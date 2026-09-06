import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { cases } from "@/lib/site";

export const metadata: Metadata = {
  title: "Vakalar",
  description:
    "Finans, telekom, sigorta ve hizmet operasyonlarından anonimleştirilmiş UNIQ çalışmaları. İsim yok; işin özeti var.",
  openGraph: {
    title: "Vakalar · UNIQ",
    description:
      "Anonimleştirilmiş sektör vakaları: yapılanma, deneyim, müşterinin sesi ve yönetici akademisi.",
  },
};

export default function CasesPage() {
  return (
    <>
      <PageHero
        eyebrow="Vakalar"
        title="İsim yok. İş var."
        lead="Müşteri adlarını burada kullanmıyoruz. Aşağıdaki kartlar, tekrar eden iş tiplerinin anonim özetidir. Ayrıntı, keşif görüşmesinde."
      />

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-20">
          <div className="grid gap-6 md:grid-cols-2">
            {cases.map((item) => (
              <article
                key={item.title}
                className="flex flex-col border border-line bg-cream p-8"
              >
                <p className="text-[0.72rem] tracking-[0.16em] text-coral uppercase">
                  {item.sector}
                </p>
                <h2 className="mt-3 font-serif text-2xl text-balance">
                  {item.title}
                </h2>
                <p className="mt-4 leading-relaxed text-ink-soft">
                  {item.summary}
                </p>
                <p className="mt-6 text-sm tracking-wide text-muted uppercase">
                  {item.work}
                </p>
                <p className="mt-2 leading-relaxed text-ink-soft">
                  {item.outcome}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-12 max-w-2xl text-sm leading-relaxed text-muted">
            Kartlar referans listesi değildir. İzin verilen kurum adları, ayrı
            bir görüşmede paylaşılır.
          </p>
        </div>
      </section>

      <CtaBand title="Kendi vakınızı konuşmak için yazın." />
    </>
  );
}
