import Link from "next/link";
import { Logo } from "@/components/Logo";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-espresso text-paper">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo tone="dark" />
          <p className="mt-5 max-w-sm text-[1.05rem] leading-relaxed text-paper/70">
            {site.tagline}
            <br />
            {site.support}
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="text-[0.72rem] tracking-[0.16em] text-paper/45 uppercase">
            Sayfalar
          </p>
          <ul className="mt-4 space-y-2.5">
            <li>
              <Link href="/" className="text-paper/80 hover:text-paper">
                Ana sayfa
              </Link>
            </li>
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-paper/80 hover:text-paper"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="text-[0.72rem] tracking-[0.16em] text-paper/45 uppercase">
            Ofis
          </p>
          <address className="mt-4 not-italic text-paper/80">
            <a href={site.phoneHref} className="hover:text-paper">
              {site.phone}
            </a>
            <p className="mt-3 leading-relaxed">
              {site.address.line1}
              <br />
              {site.address.line2}
              <br />
              {site.address.line3}
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-sm text-paper/45 sm:flex-row sm:justify-between sm:px-8">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <p>İstanbul · {site.founded}’den beri saha.</p>
        </div>
      </div>
    </footer>
  );
}
