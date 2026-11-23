import Image from "next/image";
import type { ReactNode } from "react";
import { Container } from "./Container";

type Props = {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  image?: string;
  imageAlt?: string;
};

/** Dark, architectural page header used on every inner page. */
export function PageHero({ eyebrow, title, lede, image = "/images/hero-tower.jpg", imageAlt = "" }: Props) {
  return (
    <section className="on-dark relative isolate overflow-hidden bg-burgundy text-white">
      <div className="hex-bg absolute inset-0 -z-10 opacity-40" aria-hidden />
      <div className="absolute inset-y-0 right-0 -z-10 hidden w-[46%] lg:block" aria-hidden={!imageAlt}>
        <Image src={image} alt={imageAlt} fill sizes="46vw" className="object-cover object-[60%_30%] mix-blend-luminosity opacity-70" />
        <div className="absolute inset-0 bg-burgundy/55" />
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-burgundy to-transparent" />
      </div>
      <div className="absolute -bottom-px left-0 h-1.5 w-40 bg-brand" aria-hidden />
      <Container className="pb-20 pt-20 sm:pb-24 sm:pt-28 lg:pb-32 lg:pt-36">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="display display-xl mt-6 max-w-4xl">{title}</h1>
        {lede && <p className="lede mt-8 max-w-2xl">{lede}</p>}
      </Container>
    </section>
  );
}
