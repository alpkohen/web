import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { CtaBand } from "@/components/CtaBand";
import {
  fourD,
  pillars,
  primaryCta,
  proof,
  secondaryCta,
  site,
} from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} · ${site.tagline}`,
  description: site.description,
  openGraph: {
    title: `${site.name} · ${site.tagline}`,
    description: site.description,
  },
};

const path = [
  {
    step: "01",
    title: "Saha",
    body: "Programdan önce yerinde dinleriz. Hedef, slayttan değil işin içinden çıkar.",
  },
  {
    step: "02",
    title: "Program",
    body: "Eğitim ve danışmanlık, kurumun temposuna yayılır. Tek günlük etkinlik değil.",
  },
  {
    step: "03",
    title: "Davranış",
    body: "Ödev, gözlem, geri bildirim. Öğrenilen sınıfta kalmaz; işte izlenir.",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 py-16 sm:px-8 md:grid-cols-12 md:py-24 lg:py-28">
          <div className="md:col-span-8">
            <p className="text-[0.72rem] tracking-[0.18em] text-muted uppercase">
              Eğitim ve danışmanlık · {site.founded}’den beri
            </p>
            <h1 className="mt-5 font-serif text-5xl leading-[1.05] text-balance sm:text-6xl lg:text-[4.6rem]">
              {site.tagline}
            </h1>
            <div className="mt-7 h-px w-16 bg-coral" aria-hidden="true" />
            <p className="mt-7 max-w-xl text-xl leading-relaxed text-ink-soft">
              {site.support}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href={primaryCta.href}>{primaryCta.label}</Button>
              <Button href={secondaryCta.href} variant="secondary">
                {secondaryCta.label}
              </Button>
            </div>
          </div>

          <aside className="flex flex-col justify-end border-t border-line pt-8 md:col-span-4 md:border-t-0 md:border-l md:pt-0 md:pl-10">
            <p className="text-[0.72rem] tracking-[0.16em] text-muted uppercase">
              Odak
            </p>
            <ul className="mt-4 space-y-4 text-[1.05rem] leading-snug text-ink-soft">
              <li>Çağrı merkezi yapılanması</li>
              <li>Müşteri deneyimi</li>
              <li>Müşterinin sesi</li>
            </ul>
            <p className="mt-10 text-sm leading-relaxed text-muted">
              Telekom, finans, sigorta ve hizmet operasyonlarında; Türkiye ve
              yurt dışında.
            </p>
          </aside>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
          <p className="text-[0.72rem] tracking-[0.18em] text-muted uppercase">
            Ne yapıyoruz
          </p>
          <h2 className="mt-3 max-w-3xl font-serif text-3xl leading-tight text-balance md:text-4xl">
            Eğitim ve danışmanlık, aynı sahanın iki yüzü.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            İki ayrı vitrin değil. İhtiyaç sahadan çıkar; program aynı ekiple
            kurulur. Davranış ve operasyon aynı çizgide izlenir.
          </p>

          <div className="mt-12 grid gap-px bg-line md:grid-cols-2">
            <article className="bg-paper p-8 md:p-10">
              <p className="text-[0.72rem] tracking-[0.16em] text-coral uppercase">
                Danışmanlık
              </p>
              <h3 className="mt-3 font-serif text-2xl">Yapı, süreç, karar</h3>
              <p className="mt-4 leading-relaxed text-ink-soft">
                Çağrı merkezi ve müşteri hizmetlerinde yapılanma, deneyim
                stratejisi ve müşterinin sesi. Öneri, uygulanacak kadar net
                olmalı.
              </p>
              <Link
                href="/danismanlik"
                className="mt-6 inline-block text-ink underline decoration-line underline-offset-4 hover:decoration-ink"
              >
                Danışmanlığı inceleyin
              </Link>
            </article>
            <article className="bg-paper p-8 md:p-10">
              <p className="text-[0.72rem] tracking-[0.16em] text-coral uppercase">
                Eğitim
              </p>
              <h3 className="mt-3 font-serif text-2xl">Akademi, takip, etki</h3>
              <p className="mt-4 leading-relaxed text-ink-soft">
                Kuruma özel akademiler. Saha çalışmasıyla başlar; ödev, atölye
                ve geri bildirimle davranışa iner.
              </p>
              <Link
                href="/egitim"
                className="mt-6 inline-block text-ink underline decoration-line underline-offset-4 hover:decoration-ink"
              >
                Eğitimleri inceleyin
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
          <p className="text-[0.72rem] tracking-[0.18em] text-muted uppercase">
            İşleyiş
          </p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl">
            Saha → Program → Davranış
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {path.map((item) => (
              <article key={item.step}>
                <p className="font-serif text-3xl text-coral">{item.step}</p>
                <h3 className="mt-3 font-serif text-2xl">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
          <p className="text-[0.72rem] tracking-[0.18em] text-muted uppercase">
            Ölçek, iddia değil kayıt
          </p>
          <div className="mt-10 grid gap-10 sm:grid-cols-3">
            {proof.map((item) => (
              <div key={item.value}>
                <p className="font-serif text-5xl tracking-tight md:text-6xl">
                  {item.value}
                </p>
                <p className="mt-3 max-w-[16rem] leading-relaxed text-ink-soft">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-[0.72rem] tracking-[0.18em] text-muted uppercase">
                Hizmetler
              </p>
              <h2 className="mt-3 max-w-xl font-serif text-3xl md:text-4xl">
                Üç hat. Derinlemesine.
              </h2>
            </div>
            <Link
              href="/danismanlik"
              className="text-ink underline decoration-line underline-offset-4 hover:decoration-ink"
            >
              Tüm danışmanlık
            </Link>
          </div>
          <ol className="mt-12 divide-y divide-line border-y border-line">
            {pillars.map((item, index) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className="group grid gap-4 py-8 md:grid-cols-12 md:items-baseline"
                >
                  <span className="font-serif text-xl text-coral md:col-span-1">
                    0{index + 1}
                  </span>
                  <h3 className="font-serif text-2xl md:col-span-5 group-hover:text-coral">
                    {item.title}
                  </h3>
                  <p className="text-ink-soft md:col-span-6">{item.lead}</p>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-line bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
          <p className="text-[0.72rem] tracking-[0.18em] text-muted uppercase">
            UNIQ 4D
          </p>
          <h2 className="mt-3 max-w-2xl font-serif text-3xl md:text-4xl">
            Discover, Design, Decide, Deploy.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Keşif, tasarım, karar ve uygulama. Sırayla. Eksik adım, sahada
            boşluk bırakır.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {fourD.map((item) => (
              <article key={item.key}>
                <p className="font-serif text-2xl">{item.key}</p>
                <p className="mt-1 text-sm tracking-wide text-coral uppercase">
                  {item.tr}
                </p>
                <p className="mt-3 leading-relaxed text-ink-soft">{item.body}</p>
              </article>
            ))}
          </div>
          <Link
            href="/yaklasim"
            className="mt-10 inline-block text-ink underline decoration-line underline-offset-4 hover:decoration-ink"
          >
            Yaklaşımı okuyun
          </Link>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
