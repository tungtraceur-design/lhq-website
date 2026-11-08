"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { songs } from "@/lib/content";
import { useLocale } from "@/lib/locale";
import { EventWidget } from "./event-widget";
import { IntroVideo } from "./intro-video";
import { ARTIST_POSTER, MeetArtist } from "./meet-artist";
import { PlayerOverlay, type PlayerGrow, type PlayerOrigin } from "./player-overlay";
import { SiteShell } from "./site-shell";
import { TrackCard } from "./track-card";

const SKIP_KEY = "lhq-skip-video";
const POSTER = "/images/etude-2.png";

type Phase = "boot" | "video" | "assemble" | "idle";

export function HomeScreen() {
  const { locale, t } = useLocale();
  const [phase, setPhase] = useState<Phase>("boot");
  const [player, setPlayer] = useState<{
    title: string;
    image: string;
    origin?: PlayerOrigin;
    growFrom?: PlayerGrow;
  } | null>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const skipped = window.sessionStorage.getItem(SKIP_KEY) === "1";
    if (reduce || skipped) {
      setPhase("assemble");
      return;
    }
    setPhase("video");
  }, []);

  useEffect(() => {
    if (phase !== "assemble") return;
    const timer = window.setTimeout(() => setPhase("idle"), 1500);
    return () => window.clearTimeout(timer);
  }, [phase]);

  const skipVideo = useCallback(() => {
    window.sessionStorage.setItem(SKIP_KEY, "1");
    setPhase("assemble");
  }, []);

  const chromeState = phase === "video" || phase === "boot" ? "hidden" : "visible";
  const entering = phase === "assemble";

  return (
    <SiteShell lockHeight chromeState={chromeState} assemble={entering}>
      <div
        className="flex min-h-0 flex-1 flex-col lg:h-[calc(100dvh-88px)] lg:overflow-hidden"
      >
        <div className="hide-scrollbar min-h-0 flex-1 overflow-y-auto lg:h-[599px] lg:flex-none lg:overflow-x-auto lg:overflow-y-hidden">
          <div className="flex flex-col gap-6 p-4 pb-28 lg:h-[599px] lg:w-max lg:flex-row lg:items-start lg:gap-10 lg:px-12 lg:pt-[54px] lg:pb-0">
            <div
              className="home-fade shrink-0 lg:hidden"
              style={{ animationDelay: "120ms" }}
            >
              <h1 className="font-display text-[44px] leading-[1.15] tracking-[-0.01em] text-ink">
                {locale === "en" ? (
                  <>
                    <span className="home-word" style={{ animationDelay: "200ms" }}>
                      Liszt&rsquo;s 12
                    </span>
                    <br />
                    <em>
                      <span className="home-word" style={{ animationDelay: "500ms" }}>
                        Transcendental{" "}
                      </span>
                      <span className="home-word" style={{ animationDelay: "800ms" }}>
                        Etudes
                      </span>
                    </em>
                  </>
                ) : (
                  <>
                    {t.homeTitle}
                    <br />
                    <em>{t.homeTitle2}</em>
                  </>
                )}
              </h1>
            </div>

            {songs.map((song, index) => (
              <TrackCard
                key={song.id}
                title={song.title}
                number={song.number}
                name={song.name}
                image={song.image}
                index={index}
                delayMs={120 + index * 80}
                reserved={player?.image === song.image}
                onPlay={(origin) =>
                  setPlayer({
                    title: song.title,
                    image: song.image,
                    origin: {
                      top: origin.top,
                      left: origin.left,
                      width: origin.width,
                      height: origin.height,
                    },
                  })
                }
              />
            ))}

            <MeetArtist
              delayMs={480}
              playing={player?.image === ARTIST_POSTER}
              onPlay={() =>
                setPlayer({
                  title: "Lưu Hồng Quang",
                  image: ARTIST_POSTER,
                  growFrom: "center",
                })
              }
            />
          </div>
        </div>

        <div className="relative hidden min-h-0 flex-1 items-end gap-2.5 pr-8 pb-8 pl-[35px] lg:flex">
          <h1 className="home-fade min-w-0 flex-1 font-display text-[72px] leading-[1.2] tracking-[-0.66px] text-ink">
            {locale === "en" ? (
              <>
                <span className="home-word" style={{ animationDelay: "200ms" }}>
                  Liszt&rsquo;s 12
                </span>
                <br />
                <em>
                  <span className="home-word" style={{ animationDelay: "500ms" }}>
                    Transcendental{" "}
                  </span>
                  <span className="home-word" style={{ animationDelay: "800ms" }}>
                    Etudes
                  </span>
                </em>
              </>
            ) : (
              <>
                {t.homeTitle}
                <br />
                <em>{t.homeTitle2}</em>
              </>
            )}
          </h1>
          <div className="home-fade pb-2" style={{ animationDelay: "400ms" }}>
            <EventWidget />
          </div>
        </div>

        <div className="pointer-events-none fixed right-4 bottom-4 z-10 lg:hidden">
          <div className="pointer-events-auto">
            <EventWidget />
          </div>
        </div>
      </div>

      {phase === "video"
        ? createPortal(<IntroVideo poster={POSTER} onSkip={skipVideo} />, document.body)
        : null}

      {player
        ? createPortal(
            <PlayerOverlay
              title={player.title}
              image={player.image}
              origin={player.origin}
              growFrom={player.growFrom}
              onClose={() => setPlayer(null)}
            />,
            document.body,
          )
        : null}
    </SiteShell>
  );
}
