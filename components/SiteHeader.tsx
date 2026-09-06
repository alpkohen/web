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
                  active
                    ? "text-ink underline decoration-coral decoration-1 underline-offset-[10px]"
                    : "text-ink-soft hover:text-ink"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href={primaryCta.href}
            className="border border-espresso bg-espresso px-3.5 py-1.5 text-[0.88rem] text-paper transition-colors hover:bg-ink"
          >
            {primaryCta.shortLabel}
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center border border-line lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="relative block h-3.5 w-[18px]" aria-hidden="true">
            <span
              className={`absolute left-0 h-[1.5px] w-[18px] bg-ink transition ${
                open ? "top-[6px] rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute top-[6px] left-0 h-[1.5px] w-[18px] bg-ink transition ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-[1.5px] w-[18px] bg-ink transition ${
                open ? "top-[6px] -rotate-45" : "top-[12px]"
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
              className="mt-2 inline-flex justify-center border border-espresso bg-espresso px-4 py-2.5 text-paper"
            >
              {primaryCta.label}
            </Link>
          </nav>
        </div>
      ) : null}
    </>
  );
}
