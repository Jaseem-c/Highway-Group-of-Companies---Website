"use client";

import { Container } from "@/components/ui/Container";
import { buttonClasses } from "@/components/ui/Button";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="py-28 sm:py-40">
      <Container>
        <p className="eyebrow">Something went wrong</p>
        <h1 className="display display-xl mt-6">Please try again</h1>
        <p className="lede mt-6 max-w-xl">An unexpected error occurred while loading this page.</p>
        <button type="button" onClick={reset} className={buttonClasses("primary", "mt-10")}>Reload page</button>
      </Container>
    </section>
  );
}
