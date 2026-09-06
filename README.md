# UNIQ Eğitim ve Danışmanlık

Kurumsal web sitesi. Eğitim ve danışmanlık tek deneyimde; saha, program ve davranış aynı çizgide.

Yığın: **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**.

## Geliştirme

```bash
npm install
npm run dev
```

Tarayıcıda [http://localhost:3000](http://localhost:3000).

## Derleme

```bash
npm run build
npm start
```

## Sayfalar

| Yol | İçerik |
| --- | --- |
| `/` | Ana sayfa |
| `/danismanlik` | Danışmanlık |
| `/egitim` | Eğitim |
| `/yaklasim` | UNIQ 4D |
| `/vakalar` | Anonim vakalar |
| `/hakkimizda` | Kurum |
| `/iletisim` | İletişim formu |

## İletişim formu

`lib/actions.ts` içindeki `submitInquiry` doğrular ve kaydı loglar. Gerçek e-posta veya CRM bağlanana kadar TODO bırakılmıştır. Formun yanında telefon ve `mailto:` yedek olarak durur.

E-posta adresi (`iletisim@uniq-tr.com`) `lib/site.ts` içinde değiştirilebilir.

## İçerik

Metin, iletişim ve kanıt rakamları `lib/site.ts` dosyasındadır.
