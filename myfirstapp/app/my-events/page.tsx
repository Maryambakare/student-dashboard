"use client";

import Link from "next/link";

import EventCard from "../components/event-card";
import { useSavedEvents } from "../components/saved-events-context";
import events from "../data";

export default function MyEventsPage() {
  const { isReady, savedEventIds } = useSavedEvents();
  const savedEvents = events.filter((event) => savedEventIds.includes(event.id));

  return (
    <main className="mx-auto min-h-[calc(100vh-76px)] max-w-[1240px] px-5 pb-20 pt-12 sm:px-8 sm:pt-16">
      <section>
        <p className="text-[11px] font-semibold uppercase tracking-[1.5px] text-[#81917d]">
          Your personal lineup
        </p>
        <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-[36px] font-semibold tracking-[-1.7px] text-[#292e28] sm:text-[44px]">
              My events
            </h1>
            <p className="mt-2 text-sm leading-6 text-[#777d73]">
              Keep the campus moments you don&apos;t want to miss close at hand.
            </p>
          </div>
          {isReady && savedEvents.length > 0 && (
            <span className="rounded-full bg-[#e5eee5] px-3 py-1.5 text-xs font-semibold text-[#42684a]">
              {savedEvents.length} saved
            </span>
          )}
        </div>
      </section>

      <section className="mt-9" aria-live="polite">
        {!isReady ? (
          <p className="rounded-2xl border border-[#e9e9e1] bg-white px-6 py-10 text-center text-sm text-[#777d73]">
            Loading your saved events...
          </p>
        ) : savedEvents.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {savedEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="flex min-h-[340px] flex-col items-center justify-center rounded-2xl border border-dashed border-[#d9ded5] bg-white/70 px-6 text-center">
            <span className="grid size-14 place-items-center rounded-full bg-[#eef2eb] text-[#527257]">
              <svg
                viewBox="0 0 24 24"
                className="size-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                aria-hidden="true"
              >
                <path d="m12 3 2.8 5.7 6.3.9-4.6 4.5 1.1 6.3-5.6-3-5.6 3 1.1-6.3-4.6-4.5 6.3-.9L12 3Z" />
              </svg>
            </span>
            <h2 className="mt-4 text-xl font-semibold text-[#30362f]">Your list is still open</h2>
            <p className="mt-2 max-w-sm text-sm leading-6 text-[#777d73]">
              Save an event that catches your eye and it&apos;ll be waiting here when you need it.
            </p>
            <Link
              href="/"
              className="mt-5 rounded-full bg-[#315e47] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#264b39]"
            >
              Discover events
            </Link>
          </div>
        )}
      </section>
    </main>
  );
}
