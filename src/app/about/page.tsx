"use client";

import { useMemo, useState } from "react";
import { SiteShell } from "@/components/site-shell";
import { MonoImage, PageTitle, SegmentedControl } from "@/components/media";
import { ChevronDown } from "@/components/icons";
import {
  awardHighlights,
  awards,
  collaborations,
  milestones,
  testimonials,
} from "@/lib/content";
import { asset } from "@/lib/asset";
import { useLocale } from "@/lib/locale";

type Tab = "awards" | "biography" | "testimonials";

export default function AboutPage() {
  const { t } = useLocale();
  const [tab, setTab] = useState<Tab>("awards");
  const options = useMemo(
    () => [
      { id: "awards", label: t.awards },
      { id: "biography", label: t.biography },
      { id: "testimonials", label: t.testimonials },
    ],
    [t],
  );

  return (
    <SiteShell>
      <main className="mx-auto flex w-full max-w-[740px] flex-col items-center gap-8 px-4 pb-[120px] pt-10 lg:px-0">
        <PageTitle>{t.about}</PageTitle>
        <SegmentedControl options={options} value={tab} onChange={(id) => setTab(id as Tab)} />

        {tab === "awards" ? <AwardsPanel /> : null}
        {tab === "biography" ? <BiographyPanel lead={t.aboutLead} collaborations={t.collaborations} year={t.year} orchestra={t.orchestra} conductor={t.conductor} event={t.event} /> : null}
        {tab === "testimonials" ? <TestimonialsPanel /> : null}
      </main>
    </SiteShell>
  );
}

function AwardsPanel() {
  const { t } = useLocale();
  return (
    <>
      <div className="grid w-full grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4">
        {awardHighlights.map((award) => (
          <div key={award.name} className="flex flex-col items-center gap-2 text-center">
            <div className="relative flex h-[122px] w-full items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset(award.image)} alt="" className="max-h-[110px] max-w-[140px] object-contain opacity-70" />
            </div>
            <p className="type-title">{award.name}</p>
            <p className="type-label text-ink-muted">{award.count}</p>
          </div>
        ))}
      </div>
      <div className="w-full">
        <div className="type-label flex gap-6 px-6 py-3 text-ink-muted">
          <span className="flex w-[67px] items-center gap-2">
            {t.year} <ChevronDown />
          </span>
          <span className="flex-1">{t.awards}</span>
          <span className="w-[100px]">{t.status}</span>
        </div>
        <div className="border border-stroke">
          {awards.map((award, index) => (
            <div
              key={`${award.title}-${index}`}
              className="flex gap-6 border-b border-stroke p-6 text-base leading-6 last:border-b-0"
            >
              <p className="w-[60px]">{award.year}</p>
              <div className="flex-1">
                <p>{award.title}</p>
                {award.place ? <p>{award.place}</p> : null}
              </div>
              <p className="w-[100px]">{award.status}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function BiographyPanel({
  lead,
  collaborations: collabLabel,
  year,
  orchestra,
  conductor,
  event,
}: {
  lead: string;
  collaborations: string;
  year: string;
  orchestra: string;
  conductor: string;
  event: string;
}) {
  return (
    <>
      <p className="text-center text-[21px] leading-[1.5]">{lead}</p>
      <div className="relative w-full">
        <div className="absolute bottom-24 left-1/2 top-6 hidden w-px -translate-x-1/2 bg-stroke lg:block" />
        <div className="flex flex-col gap-20">
          {milestones.map((item, index) => {
            const last = index === milestones.length - 1;
            const imageLeft = index % 2 === 1;
            if (last) {
              return (
                <div key={item.year} className="relative z-10 flex flex-col items-center text-center">
                  <span className="mb-6 size-6 rounded-full border border-stroke bg-paper" />
                  <p className="type-title">{item.year}</p>
                  <p className="mt-2 max-w-[414px] text-base leading-[1.6]">{item.body}</p>
                  <MonoImage src="/images/etude-3.png" alt="" className="mt-6 aspect-video w-full max-w-[367px]" play />
                </div>
              );
            }
            return (
              <div key={item.year} className="relative grid items-center gap-8 lg:grid-cols-[1fr_24px_1fr]">
                <div className={imageLeft ? "lg:col-start-3" : ""}>
                  <p className="type-title">{item.year}</p>
                  <p className="mt-2 text-base leading-[1.6]">{item.body}</p>
                </div>
                <span className="relative z-10 hidden size-6 justify-self-center rounded-full border border-stroke bg-paper lg:block" />
                <MonoImage
                  src="/images/etude-3.png"
                  alt=""
                  className={`aspect-video w-full ${imageLeft ? "lg:col-start-1 lg:row-start-1" : ""}`}
                  play
                />
              </div>
            );
          })}
        </div>
      </div>
      <p className="type-heading">{collabLabel}</p>
      <div className="w-full overflow-x-auto">
        <div className="type-label flex min-w-[640px] gap-6 border border-b-0 border-stroke px-6 py-3 text-ink-muted">
          <p className="w-[67px]">{year}</p>
          <p className="w-[256px]">{orchestra}</p>
          <p className="w-[133px]">{conductor}</p>
          <p className="flex-1">{event}</p>
        </div>
        <div className="min-w-[640px] border border-stroke">
          {collaborations.map((row, index) => (
            <div key={`${row.year}-${index}`} className="flex gap-6 border-b border-stroke p-6 text-base leading-6 last:border-b-0">
              <p className="w-[67px]">{row.year}</p>
              <p className="w-[256px]">{row.orchestra}</p>
              <p className="w-[133px]">{row.conductor}</p>
              <p className="flex-1">{row.event}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function TestimonialsPanel() {
  return (
    <div className="grid w-full gap-10 lg:grid-cols-2 lg:items-start">
      <div className="flex flex-col gap-10">
        {testimonials.filter((_, index) => index % 2 === 0).map((item) => (
          <TestimonialCard key={item.name} {...item} />
        ))}
      </div>
      <div className="flex flex-col gap-10 lg:pt-20">
        {testimonials.filter((_, index) => index % 2 === 1).map((item) => (
          <TestimonialCard key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
}

function TestimonialCard({
  quote,
  name,
  role,
  image,
}: {
  quote: string;
  name: string;
  role: string;
  image: string;
}) {
  return (
    <article className="flex flex-col items-center gap-4 bg-white px-6 py-8">
      <div className="relative size-16 overflow-hidden rounded-full border border-stroke">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={asset(image)} alt="" className="h-full w-full object-cover" />
      </div>
      <p className="text-center font-title text-[24px] italic leading-[32px]">“{quote}”</p>
      <p className="text-center text-xs font-medium uppercase leading-5 tracking-[0.1em] text-ink-muted">
        {name}
        {role ? (
          <>
            <br />
            {role}
          </>
        ) : null}
      </p>
    </article>
  );
}
