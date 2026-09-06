"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { Logo } from "@/components/Logo";
import { nav, primaryCta } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/90 backdrop-blur-md">
      <HeaderBar key={pathname} pathname={pathname} />
    </header>
  );
}

function HeaderBar({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between px-5 sm:px-8">
        <Logo />

        <nav
          className="hidden items-center gap-5 xl:gap-7 lg:flex"
          aria-label="Ana menü"
        >
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[0.92rem] tracking-wide transition-colors ${
                  active ? "text-ink" : "text-ink-soft hover:text-ink"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href={primaryCta.href}
            className="border border-coral bg-coral px-3.5 py-1.5 text-[0.88rem] text-white transition-colors hover:bg-coral-dark hover:border-coral-dark"
          >
            {primaryCta.label}
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center border border-line lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Menüyü kapat" : "Menüyü aç"}</span>
          <span className="relative block h-3.5 w-4" aria-hidden="true">
            <span
              className={`absolute left-0 h-px w-4 bg-ink transition ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute top-1.5 left-0 h-px w-4 bg-ink transition ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-px w-4 bg-ink transition ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      {open ? (
        <div
          id={menuId}
          className="border-t border-line bg-paper px-5 py-6 lg:hidden"
        >
          <nav className="flex flex-col gap-4" aria-label="Mobil menü">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-1 text-lg text-ink"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={primaryCta.href}
              className="mt-2 inline-flex justify-center border border-coral bg-coral px-4 py-2.5 text-white"
            >
              {primaryCta.label}
            </Link>
          </nav>
        </div>
      ) : null}
    </>
  );
}
