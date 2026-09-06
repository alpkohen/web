import { Button } from "@/components/Button";
import { primaryCta, secondaryCta } from "@/lib/site";

type CtaBandProps = {
  title?: string;
  body?: string;
};

export function CtaBand({
  title = "Önce keşif. Sonra program.",
  body = "Kurumunuza özel bir çalışma gerekip gerekmediğini, kısa bir görüşmede netleştiririz. Sunum değil; saha ve ihtiyaç konuşulur.",
}: CtaBandProps) {
  return (
    <section className="bg-espresso text-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-16 sm:px-8 md:flex-row md:items-end md:justify-between md:py-20">
        <div className="max-w-xl">
          <h2 className="font-serif text-3xl leading-tight text-balance md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-paper/70">
            {body}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href={primaryCta.href}>{primaryCta.label}</Button>
          <Button href={secondaryCta.href} variant="onDark">
            {secondaryCta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
