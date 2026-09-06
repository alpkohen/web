import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "UNIQ ile keşif görüşmesi planlayın. Maslak, İstanbul. +90 212 262 69 42.",
  openGraph: {
    title: "İletişim · UNIQ",
    description:
      "Keşif görüşmesi için yazın veya arayın. Beybi Giz Plaza, Maslak.",
  },
};

type IletisimPageProps = {
  searchParams: Promise<{ konu?: string }>;
};

export default async function ContactPage({ searchParams }: IletisimPageProps) {
  const params = await searchParams;
  const defaultTopic =
    params.konu === "kesif"
      ? "Keşif görüşmesi planlamak istiyoruz."
      : params.konu?.trim() || "";

  return (
    <>
      <PageHero
        eyebrow="İletişim"
        title="Kısa bir keşif yeter."
        lead="Kurum, ihtiyaç ve tempo. Sunum istemiyoruz; önce doğru iş olup olmadığına bakarız."
      />

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 py-16 sm:px-8 md:grid-cols-12 md:py-20">
          <div className="md:col-span-7">
            <h2 className="font-serif text-2xl">Bize yazın</h2>
            <p className="mt-3 mb-8 max-w-lg text-ink-soft">
              Ad soyad, kurum ve konu. Dönüşü telefon veya e-posta ile yaparız.
            </p>
            <ContactForm defaultTopic={defaultTopic} />
          </div>

          <aside className="md:col-span-5">
            <div className="border border-line bg-cream p-8">
              <p className="text-[0.72rem] tracking-[0.16em] text-muted uppercase">
                Doğrudan
              </p>
              <p className="mt-4 font-serif text-2xl">
                <a href={site.phoneHref} className="hover:text-coral">
                  {site.phone}
                </a>
              </p>
              <p className="mt-2">
                <a
                  href={`mailto:${site.email}`}
                  className="text-ink-soft hover:text-ink"
                >
                  {site.email}
                </a>
              </p>
              <div className="mt-8 h-px bg-line" />
              <p className="mt-8 text-[0.72rem] tracking-[0.16em] text-muted uppercase">
                Adres
              </p>
              <p className="mt-3 leading-relaxed text-ink-soft">
                {site.address.line1}
                <br />
                {site.address.line2}
                <br />
                {site.address.line3}
              </p>
              <a
                href={site.address.maps}
                className="mt-4 inline-block text-ink underline decoration-line underline-offset-4 hover:decoration-ink"
                rel="noreferrer"
                target="_blank"
              >
                Haritada açın
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
