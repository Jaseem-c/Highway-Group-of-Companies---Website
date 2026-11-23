import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="py-28 sm:py-40">
      <Container>
        <p className="eyebrow">Error 404</p>
        <h1 className="display display-xl mt-6">Page not found</h1>
        <p className="lede mt-6 max-w-xl">The page you are looking for has moved or does not exist.</p>
        <LinkButton href="/" className="mt-10">Back to home</LinkButton>
      </Container>
    </section>
  );
}
