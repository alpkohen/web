type PageHeroProps = {
  eyebrow: string;
  title: string;
  lead: string;
};

export function PageHero({ eyebrow, title, lead }: PageHeroProps) {
  return (
    <header className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
        <p className="text-[0.72rem] tracking-[0.18em] text-muted uppercase">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.12] text-balance sm:text-5xl md:text-[3.4rem]">
          {title}
        </h1>
        <div className="mt-6 h-px w-16 bg-coral" aria-hidden="true" />
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
          {lead}
        </p>
      </div>
    </header>
  );
}
