import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <p className="text-[0.72rem] tracking-[0.18em] text-muted uppercase">
        404
      </p>
      <h1 className="mt-4 font-serif text-4xl md:text-5xl">
        Bu sayfa yok.
      </h1>
      <p className="mt-4 max-w-md text-lg text-ink-soft">
        Bağlantı eski siteden kalmış olabilir. Ana sayfadan devam edin.
      </p>
      <div className="mt-8">
        <Button href="/">Ana sayfa</Button>
      </div>
    </div>
  );
}
