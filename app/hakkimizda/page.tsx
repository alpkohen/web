import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { proof, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "UNIQ Eğitim ve Danışmanlık, 2007’den beri çağrı merkezi ve müşteri deneyimi alanında sahada çalışan bir eğitim ve danışmanlık firmasıdır.",
  openGraph: {
    title: "Hakkımızda · UNIQ",
    description:
      "2007, İstanbul. Çağrı merkezi, müşteri deneyimi, müşterinin sesi. Eğitim ve danışmanlık aynı çatıda.",
  },
};

const traits = [
  {
    title: "Konu yakınlığı",
    body: "Kurucu ekip, müşteri deneyimi, memnuniyet ve operasyon kurulumu üzerine yıllanmış işten gelir. Genel yönetim söylemi değil; hat bilgisi.",
  },
  {
    title: "Analitik, ayrıntıya inen",
    body: "Hem geniş hem derin bakarız. Metrik, çağrı ve rol aynı dosyada durur. Uygulanmayan analiz, analiz değildir.",
  },
  {
    title: "Gerçekçi",
    body: "Kurumun temposuna ve kısıtına uygun plan. Koşulları yok sayan yol haritası yazmayız.",
  },
  {
    title: "Uçtan uca sahiplik",
    body: "Önerinin arkasında dururuz. Eğitim veya danışmanlık bittikten sonra da uygulamanın izini süreriz.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Hakkımızda"
        title={`${site.founded}’den beri aynı iş.`}
        lead="UNIQ, çağrı merkezi ve müşteri hizmetlerini ileri taşımak isteyen kurumlarla çalışır. Eğitim ve danışmanlık tek çatıdadır."
      />

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-20">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="text-lg leading-relaxed text-ink-soft">
                İstanbul’da kurulan ofisimizle telekom, finans, sigorta ve
                perakende dahil farklı ölçeklerde iş yaptık. Yurt dışı
                projelerde de aynı yöntem geçerlidir: önce saha, sonra program,
                sonra takip.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-ink-soft">
                Kurucu Alp Kohen ve ekip, müşteri deneyimi ile operasyon
                iyileştirmesini ayrı spekülatif alanlar olarak görmez. Hat
                çalışmazsa deneyim konuşulamaz.
              </p>
            </div>
            <aside className="border border-line bg-cream p-6 md:col-span-5 md:p-8">
              <p className="text-[0.72rem] tracking-[0.16em] text-muted uppercase">
                Ofis
              </p>
              <p className="mt-3 leading-relaxed">
                {site.address.line1}
                <br />
                {site.address.line2}
                <br />
                {site.address.line3}
              </p>
              <p className="mt-5">
                <a href={site.phoneHref} className="hover:text-coral">
                  {site.phone}
                </a>
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-20">
          <div className="grid gap-10 sm:grid-cols-3">
            {proof.map((item) => (
              <div key={item.value}>
                <p className="font-serif text-5xl">{item.value}</p>
                <p className="mt-3 text-ink-soft">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-20">
          <h2 className="font-serif text-3xl">Nasıl çalışırız</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            {traits.map((item) => (
              <article key={item.title}>
                <h3 className="font-serif text-2xl">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
