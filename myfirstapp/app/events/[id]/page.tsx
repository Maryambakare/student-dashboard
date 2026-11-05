import Link from "next/link";
import { notFound } from "next/navigation";

import { CategoryBadge, formatEventDate } from "../../components/event-card";
import EventCountdown from "../../components/event-countdown";
import SaveEventButton from "../../components/save-event-button";
import events from "../../data";

export default async function EventDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const event = events.find((item) => item.id === id);

  if (!event) {
    notFound();
  }

  return (
    <main className="mx-auto min-h-[calc(100vh-76px)] max-w-[1080px] px-5 pb-20 pt-8 sm:px-8 sm:pt-12">
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-[#687265] transition-colors hover:bg-white hover:text-[#315e47]"
      >
        <span aria-hidden="true">&larr;</span> All events
      </Link>

      <article className="mt-5 overflow-hidden rounded-[26px] border border-[#e7e8e0] bg-white shadow-[0_12px_42px_rgba(37,41,34,0.07)]">
        <div
          role="img"
          aria-label={event.title}
          className="relative min-h-[300px] bg-cover bg-center sm:min-h-[420px]"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(20, 28, 23, .02) 28%, rgba(20, 28, 23, .55) 100%), url("${event.image}")`,
          }}
        >
          <div className="absolute inset-x-5 bottom-5 flex flex-wrap items-end justify-between gap-4 sm:inset-x-8 sm:bottom-8">
            <div className="max-w-[740px]">
              <CategoryBadge category={event.category} />
              <h1 className="mt-4 text-[36px] font-semibold leading-[1.05] tracking-[-1.8px] text-white drop-shadow-sm sm:text-[52px] sm:tracking-[-2.7px]">
                {event.title}
              </h1>
            </div>
            <SaveEventButton eventId={event.id} eventTitle={event.title} />
          </div>
        </div>

        <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-[1fr_300px] lg:gap-12">
          <div>
            <h2 className="text-[20px] font-semibold tracking-[-0.4px] text-[#30362f]">
              About this event
            </h2>
            <p className="mt-3 max-w-[650px] text-[15px] leading-7 text-[#70766d]">
              {event.description}
            </p>
          </div>

          <aside className="rounded-2xl bg-[#f7f8f4] p-5 sm:p-6">
            <h2 className="text-sm font-semibold text-[#30362f]">Event details</h2>
            <dl className="mt-4 space-y-4">
              <div>
                <dt className="text-xs font-medium text-[#8a8f85]">Date &amp; time</dt>
                <dd className="mt-1 text-sm font-medium text-[#444a41]">
                  {formatEventDate(event.date, {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                  })}
                  <span className="text-[#adb1a8]"> &middot; </span>
                  {event.time}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-[#8a8f85]">Venue</dt>
                <dd className="mt-1 text-sm font-medium text-[#444a41]">{event.venue}</dd>
              </div>
            </dl>
            <div className="mt-5 border-t border-[#e6e9e1] pt-4">
              <EventCountdown date={event.date} time={event.time} />
            </div>
          </aside>
        </div>
      </article>
    </main>
  );
}
