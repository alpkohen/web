"use client";

import { useActionState } from "react";
import { submitInquiry, type InquiryState } from "@/lib/actions";
import { site } from "@/lib/site";

const initial: InquiryState = { status: "idle", message: "" };

type ContactFormProps = {
  defaultTopic?: string;
};

export function ContactForm({ defaultTopic = "" }: ContactFormProps) {
  const [state, formAction, pending] = useActionState(submitInquiry, initial);

  if (state.status === "success") {
    return (
      <div
        className="border border-line bg-cream px-6 py-8"
        role="status"
        aria-live="polite"
      >
        <p className="font-serif text-2xl">Teşekkürler.</p>
        <p className="mt-3 leading-relaxed text-ink-soft">{state.message}</p>
        <a
          href={site.phoneHref}
          className="mt-5 inline-block text-coral hover:text-coral-dark"
        >
          {site.phone}
        </a>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm text-ink-soft">
          Ad soyad
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          maxLength={120}
          className="mt-1.5 w-full border border-line bg-cream px-3 py-2.5 text-ink outline-none focus:border-ink"
        />
      </div>
      <div>
        <label htmlFor="organization" className="block text-sm text-ink-soft">
          Kurum
        </label>
        <input
          id="organization"
          name="organization"
          type="text"
          autoComplete="organization"
          required
          maxLength={160}
          className="mt-1.5 w-full border border-line bg-cream px-3 py-2.5 text-ink outline-none focus:border-ink"
        />
      </div>
      <div>
        <label htmlFor="topic" className="block text-sm text-ink-soft">
          Konu
        </label>
        <textarea
          id="topic"
          name="topic"
          required
          rows={5}
          maxLength={2000}
          defaultValue={defaultTopic}
          className="mt-1.5 w-full resize-y border border-line bg-cream px-3 py-2.5 text-ink outline-none focus:border-ink"
        />
      </div>

      {state.status === "error" ? (
        <p className="text-sm text-coral-dark" role="alert">
          {state.message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center justify-center bg-espresso px-5 py-2.5 text-paper transition-colors hover:bg-ink disabled:opacity-60"
      >
        {pending ? "Gönderiliyor…" : "Bize yazın"}
      </button>
      <p className="text-sm text-muted">
        Form doğrulanır; e-posta altyapısı henüz bağlı değil. Dilerseniz{" "}
        <a href={site.phoneHref} className="text-ink underline decoration-line underline-offset-4">
          telefon
        </a>{" "}
        veya{" "}
        <a
          href={`mailto:${site.email}`}
          className="text-ink underline decoration-line underline-offset-4"
        >
          {site.email}
        </a>{" "}
        kullanın.
      </p>
    </form>
  );
}
