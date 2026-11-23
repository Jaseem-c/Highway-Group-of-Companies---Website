import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  dark?: boolean;
  className?: string;
  as?: "h1" | "h2";
};

export function SectionHeading({ eyebrow, title, lede, dark = false, className = "", as: Tag = "h2" }: Props) {
  return (
    <div className={`${dark ? "on-dark" : ""} ${className}`}>
      <p className="eyebrow">{eyebrow}</p>
      <Tag className={`display display-lg mt-5 ${dark ? "text-white" : "text-ink"}`}>{title}</Tag>
      {lede && <p className="lede mt-6 max-w-2xl">{lede}</p>}
    </div>
  );
}
