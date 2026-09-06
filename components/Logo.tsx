import Link from "next/link";

type LogoProps = {
  tone?: "light" | "dark";
};

export function Logo({ tone = "light" }: LogoProps) {
  const word = tone === "dark" ? "text-paper" : "text-ink";
  const sub = tone === "dark" ? "text-paper/55" : "text-muted";

  return (
    <Link href="/" className="group inline-flex items-baseline gap-2.5">
      <span
        className={`font-serif text-[1.7rem] leading-none tracking-tight ${word}`}
      >
        UNIQ
      </span>
      <span
        className={`hidden text-[0.68rem] leading-tight tracking-[0.14em] uppercase sm:block ${sub}`}
      >
        Eğitim ve
        <br />
        Danışmanlık
      </span>
    </Link>
  );
}
