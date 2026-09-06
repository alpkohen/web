import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { fourD, pillars } from "@/lib/site";

export const metadata: Metadata = {
  title: "Danışmanlık",
  description:
    "Çağrı merkezinde yapılanma ve değişim, müşteri deneyimi stratejisi ve müşterinin sesi analizi. UNIQ 4D ile sahadan uygulamaya.",
  openGraph: {
    title: "Danışmanlık · UNIQ",
    description:
      "Çağrı merkezinde yapılanma, müşteri deneyimi ve müşterinin sesi. Uygulanacak kadar net öneri.",
  },
};

const scopes = [
  {
    title: "Strateji ve konumlama",
    body: "Hizmetin kurum içindeki yeri, kanal öncelikleri, büyüme veya sadeleştirme kararı.",
  },
  {
    title: "Süreç ve rol",
    body: "Kuyruk, yetki, eskalasyon ve ilk hat ile destek hatlarının sınırları.",
  },
  {
    title: "Kapasite ve planlama",
    body: "İş yükü, vardiya, öngörü. Kaliteyi bozmadan tempo tutmak.",
  },
  {
    title: "Performans",
    body: "Metrik seti, prim ve geri bildirim. Ölçülen şey, yönetilen şeydir.",
  },
  {
    title: "Maliyet ve verim",
    body: "Gelir-gider dengesi, dış kaynak ve iç kaynak tercihleri.",
  },
  {
    title: "Teknoloji seçimi",
    body: "Araç, ihtiyaca göre. Yazılım satmayız; kararın sahaya uyumunu konuşuruz.",
  },
] as const;

export default function ConsultingPage() {
  return (
    <>
      <PageHero
        eyebrow="Danışmanlık"
        title="Sahada tutulan yapı."
        lead="Çağrı merkezi ve müşteri hizmetlerinde yapılanma, deneyim ve müşterinin sesi. Rapor masada kalmaz; karar, rol ve takip ile bağlanır."
      />

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-20">
          <p className="max-w-2xl text-lg leading-relaxed text-ink-soft">
            2007’den bu yana Türkiye ve yurt dışında kırktan fazla danışmanlık
            projesi yürüttük. Telekom, finans, sigorta ve hizmet operasyonlarında
            tekrar eden sorun aynı: iyi niyetli kararın sahaya inmemesi.
          </p>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-20">
          <p className="text-[0.72rem] tracking-[0.18em] text-muted uppercase">
            Üç hat
          </p>
          <div className="mt-10 space-y-16">
            {pillars.map((item, index) => (
              <article
                key={item.id}
                id={item.id}
                className="scroll-mt-28 grid gap-6 border-t border-line pt-10 md:grid-cols-12"
              >
                <p className="font-serif text-3xl text-coral md:col-span-2">
                  0{index + 1}
                </p>
                <div className="md:col-span-10">
                  <h2 className="font-serif text-3xl text-balance">{item.title}</h2>
                  <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
                    {item.lead}
                  </p>
                  {index === 0 ? (
                    <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">
                      Kurulum, yeniden yapılandırma, birleşme sonrası entegrasyon
                      veya mevcut operasyonun sadeleştirilmesi. İnsan, süreç ve
                      teknoloji aynı masada.
                    </p>
                  ) : null}
                  {index === 1 ? (
                    <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">
                      Yolculuk haritası tek başına yetmez. Standart, kalite
                      formu, eğitim ve yönetici takibine bağlanmadıkça deneyim
                      söylem olarak kalır.
                    </p>
                  ) : null}
                  {index === 2 ? (
                    <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">
                      Konuşma analizi, anket ve nitel dinleme. Amacımız yazılım
                      kurmak değil; yönetim masasına üç net öncelik bırakmak.
                    </p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-20">
          <h2 className="font-serif text-3xl">Sık çalıştığımız başlıklar</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {scopes.map((item) => (
              <article key={item.title}>
                <h3 className="font-serif text-xl">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-20">
          <h2 className="font-serif text-3xl">Yöntem: UNIQ 4D</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">
            Discover, Design, Decide, Deploy. Keşfetmeden tasarlamayız;
            kararlaşmadan uygulamaya geçmeyiz.
          </p>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {fourD.map((item) => (
              <li key={item.key}>
                <p className="font-serif text-xl">{item.key}</p>
                <p className="text-sm text-coral uppercase">{item.tr}</p>
              </li>
            ))}
          </ol>
          <Link
            href="/yaklasim"
            className="mt-8 inline-block text-ink underline decoration-line underline-offset-4 hover:decoration-ink"
          >
            4D’yi ayrıntılı okuyun
          </Link>
        </div>
      </section>

      <CtaBand title="Danışmanlık ihtiyacını netleştirin." />
    </>
  );
}
