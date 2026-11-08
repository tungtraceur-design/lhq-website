"use client";

import { FormEvent, useState } from "react";
import { SiteShell } from "@/components/site-shell";
import { DarkButton, PageTitle } from "@/components/media";
import { socials } from "@/lib/content";
import { asset } from "@/lib/asset";
import { useLocale } from "@/lib/locale";

export default function ContactPage() {
  const { t } = useLocale();
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <SiteShell>
      <main className="mx-auto flex w-full max-w-[740px] flex-col items-center gap-20 px-4 pb-[120px] pt-10 lg:px-0">
        <div className="flex w-full flex-col items-center gap-8">
          <PageTitle>{t.contact}</PageTitle>
          <form className="grid w-full gap-8 lg:grid-cols-2" onSubmit={onSubmit}>
            <div className="flex flex-col gap-8">
              <Field label={t.name} placeholder={t.namePh} />
              <Field label={t.email} placeholder={t.emailPh} type="email" />
              <Field label={t.phone} placeholder={t.phonePh} type="tel" />
            </div>
            <label className="flex flex-col gap-2.5">
              <span className="type-label text-ink">{t.message}</span>
              <textarea
                className="min-h-[220px] flex-1 border border-stroke-input bg-white p-5 text-base leading-6 text-ink placeholder:text-muted"
                placeholder={t.messagePh}
              />
            </label>
            <div className="col-span-full flex justify-center">
              <DarkButton type="submit">{t.send}</DarkButton>
            </div>
            {sent ? <p className="col-span-full text-center text-sm text-ink-muted">{t.sent}</p> : null}
          </form>
        </div>
        <div className="flex flex-col items-center gap-4">
          <p className="type-heading">{t.follow}</p>
          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a key={social.name} href={social.href} target="_blank" rel="noreferrer" aria-label={social.name}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={asset(social.icon)} alt="" className="size-10" />
              </a>
            ))}
          </div>
        </div>
      </main>
    </SiteShell>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="flex flex-col gap-2.5">
      <span className="type-label text-ink">{label}</span>
      <input
        type={type}
        required={type !== "tel"}
        className="h-12 border border-stroke-input bg-white px-4 text-base leading-6 text-ink placeholder:text-muted"
        placeholder={placeholder}
      />
    </label>
  );
}
