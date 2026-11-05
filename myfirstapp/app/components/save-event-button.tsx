"use client";

import { useSavedEvents } from "./saved-events-context";

export default function SaveEventButton({
  eventId,
  eventTitle,
}: {
  eventId: string;
  eventTitle: string;
}) {
  const { isReady, isSaved, toggleSavedEvent } = useSavedEvents();
  const saved = isSaved(eventId);

  return (
    <button
      type="button"
      disabled={!isReady}
      aria-pressed={saved}
      aria-label={
        saved ? `Remove ${eventTitle} from My Events` : `Save ${eventTitle}`
      }
      onClick={() => toggleSavedEvent(eventId)}
      className={`grid size-10 place-items-center rounded-full shadow-sm transition disabled:cursor-wait disabled:opacity-70 ${
        saved
          ? "bg-[#315e47] text-white hover:bg-[#264b39]"
          : "bg-white/95 text-[#4c594a] hover:bg-white hover:text-[#315e47]"
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        className="size-[18px]"
        fill={saved ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.7"
        aria-hidden="true"
      >
        <path d="m12 3 2.8 5.7 6.3.9-4.6 4.5 1.1 6.3-5.6-3-5.6 3 1.1-6.3-4.6-4.5 6.3-.9L12 3Z" />
      </svg>
    </button>
  );
}
