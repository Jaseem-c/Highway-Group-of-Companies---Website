"use client";

import { useRef, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { AlertTriangle, CheckCircle2, Loader2, Send } from "lucide-react";
import { divisions } from "@/content/divisions";
import { branches } from "@/content/branches";
import { site } from "@/content/site";
import { buttonClasses } from "@/components/ui/Button";
import {
  branchName,
  divisionName,
  enquiryTypes,
  validateEnquiry,
  type EnquiryInput,
  type EnquiryType,
  type FieldErrors,
} from "@/lib/enquiry";

type Status = "idle" | "submitting" | "success" | "error";

const empty: EnquiryInput = {
  type: "general",
  name: "",
  company: "",
  email: "",
  phone: "",
  division: "",
  branch: "",
  message: "",
  website: "",
};

const inputCls =
  "w-full border border-[#cfcfcf] bg-white px-4 py-3.5 text-base text-ink transition-colors placeholder:text-[#9a9a9a] hover:border-ink focus:border-brand focus:outline-none focus:ring-0 aria-[invalid=true]:border-brand aria-[invalid=true]:bg-brand/[0.03]";
const labelCls = "mb-2 block font-display text-xs font-bold uppercase tracking-[0.14em] text-ink";

function FieldError({ name, message }: { name: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={`${name}-error`} className="mt-2 text-sm text-brand">
      {message}
    </p>
  );
}

export function EnquiryForm() {
  const params = useSearchParams();
  const presetDivision = params.get("division") ?? "";
  const [values, setValues] = useState<EnquiryInput>(() => {
    const valid = divisions.some((d) => d.slug === presetDivision);
    return { ...empty, division: valid ? presetDivision : "", type: valid ? "business" : "general" };
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [failure, setFailure] = useState<"not_configured" | "other" | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const set = <K extends keyof EnquiryInput>(key: K, value: EnquiryInput[K]) => {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const blur = (key: keyof EnquiryInput) => {
    const msg = validateEnquiry(values)[key];
    setErrors((e) => ({ ...e, [key]: msg }));
  };

  const mailtoHref = () => {
    const details: string[] = [`Name: ${values.name}`];
    if (values.company) details.push(`Company: ${values.company}`);
    details.push(`Email: ${values.email}`);
    if (values.phone) details.push(`Phone: ${values.phone}`);
    if (values.division) details.push(`Division: ${divisionName(values.division)}`);
    if (values.branch) details.push(`Preferred outlet: ${branchName(values.branch)}`);
    const body = [...details, "", values.message].join("\n");
    return `mailto:${site.hq.email}?subject=${encodeURIComponent("Website enquiry")}&body=${encodeURIComponent(body)}`;
  };

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const found = validateEnquiry(values);
    setErrors(found);
    const first = Object.keys(found)[0];
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setStatus("submitting");
    setFailure(null);
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (res.ok) {
        setStatus("success");
        return;
      }
      if (res.status === 422) {
        const data = (await res.json()) as { errors?: FieldErrors };
        setErrors(data.errors ?? {});
      }
      setFailure(res.status === 503 ? "not_configured" : "other");
      setStatus("error");
    } catch {
      setFailure("other");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="cut-br [--cut:2rem] border border-line bg-paper p-8 sm:p-12">
        <CheckCircle2 aria-hidden className="size-10 text-brand" />
        <h3 className="display display-md mt-6">Thank you, {values.name.split(" ")[0]}</h3>
        <p className="lede mt-4">
          Your enquiry has been sent to our team. We will reply to {values.email} as soon as we can.
        </p>
        <button
          type="button"
          className={buttonClasses("dark", "mt-8")}
          onClick={() => {
            setValues(empty);
            setStatus("idle");
          }}
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  const err = (k: keyof EnquiryInput) => (errors[k] ? `${k}-error` : undefined);
  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate aria-describedby="form-status" className="space-y-7">
      <fieldset>
        <legend className={labelCls}>Enquiry type</legend>
        <div className="grid grid-cols-1 gap-px bg-[#cfcfcf] sm:grid-cols-2">
          {enquiryTypes.map((t) => (
            <label
              key={t.value}
              className={`flex min-h-14 cursor-pointer items-center gap-3 px-5 py-3 font-display text-sm font-bold uppercase tracking-[0.06em] transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-[-4px] has-[:focus-visible]:outline-brand ${
                values.type === t.value ? "bg-ink text-white" : "bg-white text-ink hover:bg-paper"
              }`}
            >
              <input
                type="radio"
                name="type"
                value={t.value}
                checked={values.type === t.value}
                onChange={() => set("type", t.value as EnquiryType)}
                className="sr-only"
              />
              <span
                aria-hidden
                className={`grid size-4 place-items-center border-2 ${values.type === t.value ? "border-white" : "border-ink"}`}
              >
                {values.type === t.value && <span className="size-2 bg-brand" />}
              </span>
              {t.label}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-7 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelCls}>
            Full name <span className="text-brand">*</span>
          </label>
          <input id="name" name="name" autoComplete="name" className={inputCls} value={values.name}
            onChange={(e) => set("name", e.target.value)} onBlur={() => blur("name")}
            aria-invalid={!!errors.name} aria-describedby={err("name")} required />
          <FieldError name="name" message={errors.name} />
        </div>
        <div>
          <label htmlFor="company" className={labelCls}>
            Company {values.type === "business" ? <span className="text-brand">*</span> : <span className="font-normal normal-case tracking-normal text-steel">(optional)</span>}
          </label>
          <input id="company" name="company" autoComplete="organization" className={inputCls} value={values.company}
            onChange={(e) => set("company", e.target.value)} onBlur={() => blur("company")}
            aria-invalid={!!errors.company} aria-describedby={err("company")} />
          <FieldError name="company" message={errors.company} />
        </div>
        <div>
          <label htmlFor="email" className={labelCls}>
            Email <span className="text-brand">*</span>
          </label>
          <input id="email" name="email" type="email" inputMode="email" autoComplete="email" className={inputCls}
            value={values.email} onChange={(e) => set("email", e.target.value)} onBlur={() => blur("email")}
            aria-invalid={!!errors.email} aria-describedby={err("email")} required />
          <FieldError name="email" message={errors.email} />
        </div>
        <div>
          <label htmlFor="phone" className={labelCls}>
            Phone <span className="font-normal normal-case tracking-normal text-steel">(optional)</span>
          </label>
          <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" className={inputCls}
            value={values.phone} onChange={(e) => set("phone", e.target.value)} onBlur={() => blur("phone")}
            aria-invalid={!!errors.phone} aria-describedby={err("phone")} />
          <FieldError name="phone" message={errors.phone} />
        </div>
        <div>
          <label htmlFor="division" className={labelCls}>
            Division {values.type === "general" && <span className="font-normal normal-case tracking-normal text-steel">(optional)</span>}
          </label>
          <select id="division" name="division" className={inputCls} value={values.division}
            onChange={(e) => set("division", e.target.value)} aria-invalid={!!errors.division} aria-describedby={err("division")}>
            <option value="">Select a division</option>
            {divisions.map((d) => (
              <option key={d.slug} value={d.slug}>{d.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="branch" className={labelCls}>
            Preferred outlet <span className="font-normal normal-case tracking-normal text-steel">(optional)</span>
          </label>
          <select id="branch" name="branch" className={inputCls} value={values.branch}
            onChange={(e) => set("branch", e.target.value)} aria-invalid={!!errors.branch} aria-describedby={err("branch")}>
            <option value="">No preference</option>
            {branches.map((b) => (
              <option key={b.slug} value={b.slug}>{b.name}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelCls}>
          Message <span className="text-brand">*</span>
        </label>
        <textarea id="message" name="message" rows={6} className={`${inputCls} resize-y`} value={values.message}
          onChange={(e) => set("message", e.target.value)} onBlur={() => blur("message")}
          aria-invalid={!!errors.message} aria-describedby={err("message")} required
          placeholder={values.type === "business" ? "Products, quantities, project details…" : "How can we help?"} />
        <FieldError name="message" message={errors.message} />
      </div>

      {/* Honeypot: hidden from people, visible to bots */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" value={values.website}
          onChange={(e) => set("website", e.target.value)} />
      </div>

      <div id="form-status" aria-live="polite">
        {status === "error" && (
          <div role="alert" className="border-l-4 border-brand bg-brand/[0.06] p-5">
            <p className="flex items-center gap-2 font-semibold text-brand">
              <AlertTriangle aria-hidden className="size-5" />
              {failure === "not_configured" ? "Online enquiries aren’t available yet" : "Your message could not be sent"}
            </p>
            <p className="mt-2 text-[0.9375rem] text-[#3d3d3d]">
              Nothing was sent. Please email us directly
              {values.name && values.email && values.message.length >= 10 ? (
                <>
                  {" "}
                  — <a href={mailtoHref()} className="font-semibold text-brand underline underline-offset-4">open your email app with this message ready</a>
                </>
              ) : (
                <> at <a href={`mailto:${site.hq.email}`} className="font-semibold text-brand underline underline-offset-4">{site.hq.email}</a></>
              )}
              , or call <a href={`tel:${site.hq.telHref}`} className="whitespace-nowrap font-semibold text-brand underline underline-offset-4">{site.hq.tel}</a>.
            </p>
          </div>
        )}
      </div>

      <button type="submit" disabled={status === "submitting"} className={buttonClasses("primary", "w-full sm:w-auto disabled:opacity-70")}>
        {status === "submitting" ? (
          <>
            <Loader2 aria-hidden className="size-4 animate-spin" /> <span>Sending…</span>
          </>
        ) : (
          <>
            <span>Send enquiry</span> <Send aria-hidden className="size-4" />
          </>
        )}
      </button>
    </form>
  );
}
