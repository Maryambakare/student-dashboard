import Link from "next/link";

import SaveEventButton from "./save-event-button";

export type EventCategory = "Tech" | "Sports" | "Faith" | "Social";

export interface CampusEvent {
  id: string;
  title: string;
  category: EventCategory;
  date: string;
  time: string;
  venue: string;
  image: string;
  description: string;
}

const categoryStyles: Record<EventCategory, string> = {
  Tech: "bg-[#e4ecf1] text-[#456b87]",
  Sports: "bg-[#f6e8d2] text-[#99651f]",
  Faith: "bg-[#ede7f3] text-[#72578a]",
  Social: "bg-[#e5eee5] text-[#42684a]",
};

export function formatEventDate(date: string, options?: Intl.DateTimeFormatOptions) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    ...options,
  }).format(new Date(`${date}T00:00:00`));
}

export function CategoryBadge({ category }: { category: EventCategory }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold ${categoryStyles[category]}`}
    >
      {category}
    </span>
  );
}

export default function EventCard({ event }: { event: CampusEvent }) {
  return (
    <article
      className="group relative overflow-hidden rounded-2xl border border-[#e9e9e1] bg-white shadow-[0_3px_14px_rgba(37,41,34,0.035)] transition duration-300 hover:-translate-y-1.5 hover:border-[#d5ded2] hover:shadow-[0_16px_34px_rgba(37,41,34,0.11)]"
    >
      <Link
        href={`/events/${event.id}`}
        aria-label={`View ${event.title} details`}
        className="block overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-white"
      >
        <div
          role="img"
          aria-label={event.title}
          className="relative h-[210px] bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.02]"
          style={{
            backgroundImage: `linear-gradient(180deg, transparent 48%, rgba(19, 28, 23, .42) 100%), url("${event.image}")`,
          }}
        >
          <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
            <CategoryBadge category={event.category} />
            <span className="rounded-full bg-white/95 px-3 py-1.5 text-xs font-medium text-[#383d35] shadow-sm">
              {formatEventDate(event.date)}
            </span>
          </div>
        </div>
      </Link>
      <div className="absolute right-4 top-4 z-10">
        <SaveEventButton eventId={event.id} eventTitle={event.title} />
      </div>
      <Link href={`/events/${event.id}`} className="block p-5 focus-visible:outline-2 focus-visible:outline-[#315e47]">
        <h3 className="line-clamp-1 text-[17px] font-semibold tracking-[-0.3px] text-[#292e28]">
          {event.title}
        </h3>
        <div className="mt-3 flex items-center gap-2 text-[13px] text-[#767b71]">
          <svg
            viewBox="0 0 24 24"
            className="size-4 shrink-0 text-[#8d9589]"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            aria-hidden="true"
          >
            <path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" />
            <circle cx="12" cy="9" r="2.3" />
          </svg>
          <span className="truncate">{event.venue}</span>
          <span className="text-[#c0c2ba]" aria-hidden="true">·</span>
          <span className="shrink-0">{event.time}</span>
        </div>
        <p className="mt-4 line-clamp-2 min-h-[40px] text-[13px] leading-5 text-[#777c73]">
          {event.description}
        </p>
        <div className="mt-5 flex items-center justify-between border-t border-[#f0f0eb] pt-4 text-[13px] font-medium">
          <span className="text-[#656b61]">View event</span>
          <span
            className="text-lg text-[#315e47] transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          >
            &rarr;
          </span>
        </div>
      </Link>
    </article>
  );
}
