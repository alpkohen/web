import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { fourD } from "@/lib/site";

export const metadata: Metadata = {
  title: "Yaklaşım",
  description:
    "UNIQ 4D: Discover, Design, Decide, Deploy. Keşif, tasarım, karar ve uygulamanın sırayla yürütüldüğü danışmanlık modeli.",
  openGraph: {
    title: "Yaklaşım · UNIQ 4D",
    description:
      "Discover, Design, Decide, Deploy. Saha keşfinden uygulamaya kadar eksiksiz sıra.",
  },
};

const discipline = [
  "Zamanı ve çıktıyı baştan bağlarız. Açık uçlu ‘strateji çalışması’ satmayız.",
  "Ortak çalışma ortamını şeffaf tutarız. Taslak, karar ve takip aynı yerde durur.",
  "Eğitim ve danışmanlık aynı modelin parçasıdır. Biri diğerinin yerine geçmez.",
] as const;

export default function ApproachPage() {
  return (
    <>
      <PageHero
        eyebrow="UNIQ 4D"
        title="Sıra bozulmaz."
        lead="Discover, Design, Decide, Deploy. Keşfet, tasarla, karara bağla, uygula. Atlanan adım, sahada boşluk olarak geri gelir."
      />

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-20">
          <p className="max-w-2xl text-lg leading-relaxed text-ink-soft">
            Model, yıllara yayılan saha işinden çıktı. Önce mevcut durum; sonra
            tasarım; sonra sahiplenme; en sonda uygulama. Tersine çalışan iş —
            önce slayt, sonra keşif — tutmaz.
          </p>

          <ol className="mt-14 space-y-0">
            {fourD.map((item, index) => (
              <li
                key={item.key}
                className="grid gap-6 border-t border-line py-10 md:grid-cols-12 md:py-14"
              >
                <p className="font-serif text-4xl text-coral md:col-span-2">
                  0{index + 1}
                </p>
                <div className="md:col-span-4">
                  <h2 className="font-serif text-3xl">{item.key}</h2>
                  <p className="mt-1 tracking-[0.14em] text-muted uppercase">
                    {item.tr}
                  </p>
                </div>
                <p className="text-lg leading-relaxed text-ink-soft md:col-span-6">
                  {item.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-line bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-20">
          <h2 className="font-serif text-3xl">Disiplin</h2>
          <ul className="mt-8 max-w-2xl space-y-5">
            {discipline.map((item) => (
              <li key={item} className="leading-relaxed text-ink-soft">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title="4D’nin sizin işinize uyup uymadığını konuşun." />
    </>
  );
}
