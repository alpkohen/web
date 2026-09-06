export const site = {
  name: "UNIQ Eğitim ve Danışmanlık",
  shortName: "UNIQ",
  tagline: "Saha ile başlar. Sonuçla biter.",
  support:
    "Kuruma özel eğitim ve danışmanlık; ölçülen davranış, takip edilen etki.",
  description:
    "2007’den beri çağrı merkezi, müşteri deneyimi ve müşterinin sesi üzerine çalışan eğitim ve danışmanlık firması. Saha ile başlar, sonuçla biter.",
  url: "https://www.uniq-tr.com",
  locale: "tr_TR",
  phone: "+90 212 262 69 42",
  phoneHref: "tel:+902122626942",
  email: "iletisim@uniq-tr.com",
  address: {
    line1: "Maslak Mah. Maslak Meydan Sok.",
    line2: "Beybi Giz Plaza No:1 Kat:15 D.No:55",
    line3: "Sarıyer / İstanbul",
    maps:
      "https://www.google.com/maps/search/?api=1&query=Beybi+Giz+Plaza+Maslak+Sarıyer+İstanbul",
  },
  founded: 2007,
} as const;

export const nav = [
  { href: "/danismanlik", label: "Danışmanlık" },
  { href: "/egitim", label: "Eğitim" },
  { href: "/yaklasim", label: "Yaklaşım" },
  { href: "/vakalar", label: "Vakalar" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
] as const;

export const primaryCta = {
  href: "/iletisim?konu=kesif",
  label: "Keşif görüşmesi planlayın",
} as const;

export const secondaryCta = {
  href: "/iletisim",
  label: "İletişime geçin",
} as const;

export const proof = [
  { value: "2007", label: "Sahaya çıktığımız yıl" },
  { value: "40+", label: "Türkiye ve yurt dışında danışmanlık projesi" },
  { value: "24.000+", label: "Eğitim verdiğimiz kişi" },
] as const;

export const fourD = [
  {
    key: "Discover",
    tr: "Keşfet",
    body: "Mevcut durumu sahada inceleriz: süreç, rol, metrik ve müşterinin sesi. Öneri, masada değil yerinde çıkar.",
  },
  {
    key: "Design",
    tr: "Tasarla",
    body: "Hizmet vizyonunu, temel süreçleri, rolleri ve program çerçevesini kuruma göre çizeriz. Şablon değil, işin temposuna göre tasarım.",
  },
  {
    key: "Decide",
    tr: "Karara bağla",
    body: "Yapısal ve stratejik kararların sahiplenilmesi için çalışırız. Kabul edilmeyen öneri, uygulanmayan öneridir.",
  },
  {
    key: "Deploy",
    tr: "Uygula",
    body: "Proje disiplini, atölye ve periyodik takip. Karar sahaya iner; etki izlenir.",
  },
] as const;

export const pillars = [
  {
    href: "/danismanlik#yapilanma",
    id: "yapilanma",
    title: "Çağrı merkezinde yapılanma ve değişim",
    lead: "Kurulum, yeniden yapılandırma ve operasyonel değişim. Strateji, süreç, kapasite, performans ve maliyet aynı çerçevede.",
  },
  {
    href: "/danismanlik#deneyim",
    id: "deneyim",
    title: "Müşteri deneyiminde strateji ve iyileştirme",
    lead: "Hizmet vizyonu, yolculuk ve rol tasarımı. Deneyim, slogan değil; sahada tutulan standarttır.",
  },
  {
    href: "/danismanlik#ses",
    id: "ses",
    title: "Müşterinin sesinde analiz",
    lead: "Çağrı, anket ve nitel dinleme. Sinyali gürültüden ayırır, karara bağlarız.",
  },
] as const;

export const academies = [
  {
    title: "Yönetici Gelişim Akademisi",
    body: "Takım liderinden orta kademeye: geri bildirim, koçluk, metrik okuma ve ekip performansı.",
  },
  {
    title: "Hizmet Gelişim Akademisi",
    body: "Temsilci ve uzman hatlarında hizmet kalitesi, dinleme ve zor görüşme disiplini.",
  },
  {
    title: "Satış Gelişim Akademisi",
    body: "İhtiyaç tespiti, teklif ve kapanış. Satış, ezber cümle değil; ölçülen davranış.",
  },
  {
    title: "Tahsilat Gelişim Akademisi",
    body: "Tahsilat görüşmesinde netlik, itiraz ve taahhüt. Sonuç, bireysel planda izlenir.",
  },
  {
    title: "Eğitici Gelişim Akademisi",
    body: "İç eğitmenlerin saha gözlemi, sınıf yönetimi ve davranış takibi.",
  },
  {
    title: "İkna Gelişim Akademisi",
    body: "Karar anlarında gerekçe kurma, itiraz ve karşılıklı netlik.",
  },
] as const;

export const cases = [
  {
    sector: "Finans",
    title: "Inbound operasyonun yeniden çerçevesi",
    summary:
      "Ulusal bir finans kurumunda mevcut durum keşfi, rol ve kuyruk tasarımı, performans çerçevesinin sadeleştirilmesi.",
    work: "Danışmanlık · Yapılanma",
    outcome:
      "Karar seti sahaya indirildi; ilk hat ve takım lideri katmanında ortak dil kuruldu.",
  },
  {
    sector: "Telekomünikasyon",
    title: "Hizmet standardının sahaya bağlanması",
    summary:
      "Çok kanallı bir operasyonda müşteri yolculuğu, şikâyet kök nedenleri ve hizmet vizyonunun yeniden yazılması.",
    work: "Danışmanlık · Müşteri deneyimi",
    outcome:
      "Standart, eğitim ve kalite formuna bağlandı. İzleme, kampanya değil periyodik takip ile yürüdü.",
  },
  {
    sector: "Sigorta",
    title: "Müşterinin sesinden karar seti",
    summary:
      "Yüksek hacimli bir hasar ve bilgi hattında konuşma analizi, şikâyet temaları ve kök neden haritası.",
    work: "Danışmanlık · Müşterinin sesi",
    outcome:
      "Yönetim masasına üç öncelik çıktı. Eğitim ihtiyacı ve süreç kırıkları aynı raporda bağlandı.",
  },
  {
    sector: "Hizmet / BPO",
    title: "Takım lideri akademisi",
    summary:
      "Saha gözlemiyle tasarlanan, sekiz aya yayılan yönetici programı. Ödev, atölye ve bireysel geri bildirim.",
    work: "Eğitim · Yönetici gelişimi",
    outcome:
      "Davranış takibi sınıfta kalmadı; koçluk ve iş planı takım sonuçlarına bağlandı.",
  },
] as const;

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}
