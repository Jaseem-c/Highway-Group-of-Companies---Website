import { divisions } from "@/content/divisions";
import { branches } from "@/content/branches";

export type EnquiryType = "general" | "business";

export type EnquiryInput = {
  type: EnquiryType;
  name: string;
  company: string;
  email: string;
  phone: string;
  division: string;
  branch: string;
  message: string;
  /** Honeypot — must stay empty. */
  website: string;
};

/** Error codes; the UI maps each code to localized copy (dictionary `form.errors`). */
export type ErrorCode = "name" | "email" | "phone" | "company" | "messageShort" | "messageLong" | "division" | "branch";
export type FieldErrors = Partial<Record<keyof EnquiryInput, ErrorCode>>;

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const phoneRe = /^[+()\d][\d\s().-]{5,}$/;

export function validateEnquiry(v: EnquiryInput): FieldErrors {
  const e: FieldErrors = {};
  if (v.name.trim().length < 2) e.name = "name";
  if (!emailRe.test(v.email.trim())) e.email = "email";
  if (v.phone.trim() && !phoneRe.test(v.phone.trim())) e.phone = "phone";
  if (v.type === "business" && v.company.trim().length < 2) e.company = "company";
  if (v.message.trim().length < 10) e.message = "messageShort";
  if (v.message.length > 3000) e.message = "messageLong";
  if (v.division && !divisions.some((d) => d.slug === v.division)) e.division = "division";
  if (v.branch && !branches.some((b) => b.slug === v.branch)) e.branch = "branch";
  return e;
}

export const divisionName = (slug: string) => divisions.find((d) => d.slug === slug)?.name.en ?? "";
export const branchName = (slug: string) => branches.find((b) => b.slug === slug)?.name ?? "";
