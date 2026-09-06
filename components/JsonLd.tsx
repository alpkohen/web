import { site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    foundingDate: String(site.founded),
    description: site.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.line1} ${site.address.line2}`,
      addressLocality: "Sarıyer",
      addressRegion: "İstanbul",
      addressCountry: "TR",
    },
    areaServed: ["TR"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
