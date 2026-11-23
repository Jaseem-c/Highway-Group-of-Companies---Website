import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "dark" | "outline" | "outline-light" | "white";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-white hover:bg-brand-deep",
  dark: "bg-ink text-white hover:bg-burgundy",
  white: "bg-white text-ink hover:bg-ink hover:text-white",
  outline: "bg-transparent text-ink shadow-[inset_0_0_0_2px_var(--color-ink)] hover:bg-ink hover:text-white",
  "outline-light": "bg-transparent text-white shadow-[inset_0_0_0_2px_rgb(255_255_255/0.6)] hover:bg-white hover:text-ink",
};

export const buttonClasses = (variant: Variant = "primary", extra = "") =>
  `cut-br [--cut:0.8rem] group inline-flex min-h-14 items-center justify-center gap-3 px-7 font-display text-[0.8125rem] font-bold uppercase tracking-[0.14em] transition-colors duration-300 [font-variation-settings:'wdth'_100] focus-visible:outline-offset-[-5px] ${variants[variant]} ${extra}`;

type LinkButtonProps = Omit<ComponentProps<typeof Link>, "className"> & {
  variant?: Variant;
  arrow?: boolean;
  className?: string;
  children: ReactNode;
};

export function LinkButton({ variant = "primary", arrow = true, className = "", children, ...props }: LinkButtonProps) {
  return (
    <Link className={buttonClasses(variant, className)} {...props}>
      <span>{children}</span>
      {arrow && (
        <ArrowRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </Link>
  );
}
