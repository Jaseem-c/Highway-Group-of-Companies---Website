import { divisions } from "@/content/divisions";
import { branches } from "@/content/branches";

export const enquiryTypes = [
  { value: "general", label: "General enquiry" },
  { value: "business", label: "Business / product enquiry" },
] as const;

export type EnquiryType = (typeof enquiryTypes)[number]["value"];

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

export type FieldErrors = Partial<Record<keyof EnquiryInput, string>>;

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const phoneRe = /^[+()\d][\d\s().-]{5,}$/;

export function validateEnquiry(v: EnquiryInput): FieldErrors {
  const e: FieldErrors = {};
  if (v.name.trim().length < 2) e.name = "Please enter your full name.";
  if (!emailRe.test(v.email.trim())) e.email = "Please enter a valid email address.";
  if (v.phone.trim() && !phoneRe.test(v.phone.trim())) e.phone = "Please enter a valid phone number.";
  if (v.type === "business" && v.company.trim().length < 2) e.company = "Please tell us your company name.";
  if (v.message.trim().length < 10) e.message = "Please tell us a little more (at least 10 characters).";
  if (v.message.length > 3000) e.message = "Please keep your message under 3,000 characters.";
  if (v.division && !divisions.some((d) => d.slug === v.division)) e.division = "Please choose a division from the list.";
  if (v.branch && !branches.some((b) => b.slug === v.branch)) e.branch = "Please choose an outlet from the list.";
  return e;
}

export const divisionName = (slug: string) => divisions.find((d) => d.slug === slug)?.name ?? "";
export const branchName = (slug: string) => branches.find((b) => b.slug === slug)?.name ?? "";
