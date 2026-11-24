import Image from "next/image";
import type { Brand } from "@/content/brands";
import type { Dictionary } from "@/i18n/en";

/** Original brochure logo, untouched, centred on white. */
export function BrandTile({ brand, t }: { brand: Brand; t: Dictionary }) {
  return (
    <div className="group relative flex h-28 items-center justify-center bg-white p-6 sm:h-32 lg:h-36">
      <div className="relative size-full">
        <Image
          src={brand.logo}
          alt={t.common.logoAlt(brand.name)}
          fill
          sizes="(min-width: 1024px) 14vw, (min-width: 640px) 28vw, 46vw"
          className="object-contain transition-transform duration-500 ease-out-expo group-hover:scale-105"
        />
      </div>
    </div>
  );
}
