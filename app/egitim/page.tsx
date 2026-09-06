import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { academies } from "@/lib/site";

export const metadata: Metadata = {
  title: "Eğitim",
  description:
    "Kuruma özel UNIQ akademileri. Saha çalışmasıyla başlar; ödev, atölye ve geri bildirimle davranış izlenir.",
  openGraph: {
    title: "Eğitim · UNIQ",
    description:
      "Yönetici, hizmet, satış, tahsilat ve çağrı merkezine özel akademiler. Ölçülen davranış, takip edilen etki.",
  },
};

const rhythm = [
  {
    title: "Önce saha",
    body: "Farklı kademelerle görüşür, işi yerinde izleriz. İçerik, kurumun diline ve gerçek vakalarına göre yazılır.",
  },
  {
    title: "Zamana yayılan program",
    body: "Sınıf, ödev, sınav ve atölye. Tek oturumda biten eğitim, davranış bırakmaz.",
  },
  {
    title: "Bireye inen takip",
    body: "Gelişim gruptan kişiye indirgenir. Danışman gözlemler, geri bildirir, iş planına bağlar.",
  },
] as const;

export default function TrainingPage() {
  return (
    <>
      <PageHero
        eyebrow="Eğitim"
        title="Öğrenilen, işte görünsün."
        lead="UNIQ akademileri sınıf içi aktarımla sınırlı değildir. Davranış değişikliği ölçülür, izlenir ve geri bildirimle tutulur."
      />

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-20">
          <p className="max-w-2xl text-lg leading-relaxed text-ink-soft">
            Bugüne kadar 24.000’i aşkın kişiyle çalıştık. Akademi, kuruma özel
            tasarlanır; jenerik katalogdan seçilmez. Çağrı merkezi, tahsilat,
            satış ve hizmet hatlarında aynı disiplin geçerlidir.
          </p>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {rhythm.map((item, index) => (
              <article key={item.title}>
                <p className="font-serif text-3xl text-coral">0{index + 1}</p>
                <h2 className="mt-3 font-serif text-2xl">{item.title}</h2>
                <p className="mt-3 leading-relaxed text-ink-soft">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-20">
          <h2 className="font-serif text-3xl">Akademiler</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">
            Her program, saha keşfine göre yeniden kurulur. Aşağıdaki başlıklar
            çerçevedir; süre, kademe ve vaka seti kuruma aittir.
          </p>
          <ul className="mt-10 divide-y divide-line border-y border-line">
            {academies.map((item) => (
              <li
                key={item.title}
                className="grid gap-3 py-7 md:grid-cols-12 md:items-baseline"
              >
                <h3 className="font-serif text-xl md:col-span-5">{item.title}</h3>
                <p className="text-ink-soft md:col-span-7">{item.body}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-2xl leading-relaxed text-ink-soft">
            Çağrı merkezine özel akademiler, yukarıdaki çerçevelerin operasyon
            diline indirilmiş halidir: kalite, koçluk, kapasite okuma ve zor
            görüşme.
          </p>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-2 md:py-20">
          <div>
            <h2 className="font-serif text-3xl">Danışmanlıkla birlikte</h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Eğitim, yapı bozuksa kalıcı olmaz. Gerektiğinde akademi ile
              yapılanma aynı programda yürür. Ayrı sözleşmeler, ayrı ekipler
              değil.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-3xl">Ne ölçeriz</h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Katılım değil, davranış. Gözlem, ödev ve yönetici geri bildirimi
              ile. İş sonucuna giden yol, tek bir mutluluk anketi değildir.
            </p>
          </div>
        </div>
      </section>

      <CtaBand title="Akademi ihtiyacını konuşun." />
    </>
  );
}
