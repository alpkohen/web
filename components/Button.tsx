import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "onDark";

const variants: Record<Variant, string> = {
  primary:
    "bg-coral text-white hover:bg-coral-dark border border-coral hover:border-coral-dark",
  secondary:
    "bg-transparent text-ink border border-ink/20 hover:border-ink hover:bg-ink hover:text-paper",
  ghost: "bg-transparent text-ink border border-transparent hover:text-coral",
  onDark:
    "bg-transparent text-paper border border-paper/30 hover:border-paper hover:bg-paper hover:text-espresso",
};

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 text-[0.95rem] tracking-wide transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
