/** Brochure line icons (white on transparent) tinted via currentColor. */
export function DivisionIcon({ src, className = "size-14" }: { src: string; className?: string }) {
  return (
    <span
      aria-hidden
      className={`icon-mask ${className}`}
      style={{ maskImage: `url(${src})`, WebkitMaskImage: `url(${src})` }}
    />
  );
}
