"use client";

import { useMemo, useState } from "react";
import { SiteShell } from "@/components/site-shell";
import { DarkButton, PageTitle, SegmentedControl } from "@/components/media";
import { BookIcon, CalendarIcon, MapPinIcon } from "@/components/icons";
import { liveEvents, masterclasses } from "@/lib/content";
import { asset } from "@/lib/asset";
import { useLocale } from "@/lib/locale";

export default function EventsPage() {
  const { t } = useLocale();
  const [tab, setTab] = useState<"live" | "master">("live");
  const options = useMemo(
    () => [
      { id: "live", label: t.liveEvents, icon: <CalendarIcon /> },
      { id: "master", label: t.masterclasses, icon: <BookIcon /> },
    ],
    [t],
  );

  const upcoming = liveEvents.filter((event) => event.upcoming);
  const past = liveEvents.filter((event) => !event.upcoming);

  return (
    <SiteShell>
      <main className="mx-auto flex w-full max-w-[740px] flex-col items-center gap-[52px] px-4 pb-[120px] pt-10 lg:px-0">
        <PageTitle>{t.events}</PageTitle>
        <SegmentedControl options={options} value={tab} onChange={(id) => setTab(id as "live" | "master")} />

        {tab === "live" ? (
          <>
            <EventGroup title={t.upcoming} items={upcoming} action={t.viewDetails} />
            <EventGroup title={t.past} items={past} action={t.viewDetails} />
          </>
        ) : (
          <EventGroup items={masterclasses} action={t.viewDetails} />
        )}
      </main>
    </SiteShell>
  );
}

function EventGroup({
  title,
  items,
  action,
}: {
  title?: string;
  items: { title: string; date: string; time: string; place: string; image: string }[];
  action: string;
}) {
  return (
    <section className="flex w-full flex-col gap-6">
      {title ? <h2 className="type-heading text-center">{title}</h2> : null}
      {items.map((item, index) => (
        <article key={`${item.title}-${index}`} className="grid items-center gap-8 lg:grid-cols-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset(item.image)} alt="" className="aspect-video w-full object-cover" />
          <div className="flex flex-col items-start gap-6">
            <div>
              <h3 className="type-title">{item.title}</h3>
              <div className="mt-3 flex flex-col gap-2 text-sm leading-[22px]">
                <p className="flex items-center gap-2">
                  <CalendarIcon />
                  {item.date}
                  <span>|</span>
                  {item.time}
                </p>
                <p className="flex items-start gap-2">
                  <MapPinIcon />
                  <span>{item.place}</span>
                </p>
              </div>
            </div>
            <DarkButton>{action}</DarkButton>
          </div>
        </article>
      ))}
    </section>
  );
}
