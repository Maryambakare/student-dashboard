"use client";

import { useState } from "react";

import EventCard from "./event-card";
import events from "../data";

const categories = ["All", "Tech", "Sports", "Faith", "Social"] as const;

export default function EventExplorer() {
  const [selectedCategory, setSelectedCategory] =
    useState<(typeof categories)[number]>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const filteredEvents = events.filter((event) => {
    const matchesCategory =
      selectedCategory === "All" || event.category === selectedCategory;
    const matchesSearch = event.title.toLowerCase().includes(normalizedQuery);
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="upcoming" className="scroll-mt-24">
      <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[1.5px] text-[#81917d]">
            Your campus calendar
          </p>
          <h2 className="mt-2 text-[28px] font-semibold tracking-[-1px] text-[#292e28] sm:text-[32px]">
            Upcoming events
          </h2>
        </div>
        <p className="text-sm text-[#7b8077]" aria-live="polite">
          <span className="font-semibold text-[#3d674c]">{filteredEvents.length}</span>{" "}
          {filteredEvents.length === 1 ? "event" : "events"} to explore
        </p>
      </div>

      <label className="mb-5 flex h-12 max-w-[420px] items-center gap-3 rounded-xl border border-[#e5e7df] bg-white px-4 transition-colors focus-within:border-[#8da68d]">
        <svg
          viewBox="0 0 24 24"
          className="size-[18px] shrink-0 text-[#848a80]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          aria-hidden="true"
        >
          <circle cx="10.8" cy="10.8" r="6.8" />
          <path d="m16 16 4.2 4.2" />
        </svg>
        <span className="sr-only">Search events by title</span>
        <input
          type="search"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          placeholder="Search events by title..."
          className="h-full min-w-0 flex-1 bg-transparent text-sm text-[#30362f] outline-none placeholder:text-[#a0a49b]"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery("")}
            className="rounded-full px-2 py-1 text-xs font-medium text-[#687265] hover:bg-[#f1f3ee]"
          >
            Clear
          </button>
        )}
      </label>

      <div className="mb-6 flex flex-wrap gap-2" aria-label="Filter by category">
        {categories.map((category) => {
          const isSelected = selectedCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              aria-pressed={isSelected}
              className={`rounded-full border px-4 py-2 text-[13px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#315e47] ${
                isSelected
                  ? "border-[#315e47] bg-[#315e47] text-white"
                  : "border-[#e5e7df] bg-white text-[#666d62] hover:border-[#c8d4c7] hover:text-[#315e47]"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {filteredEvents.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <div className="flex min-h-[280px] flex-col items-center justify-center rounded-2xl border border-dashed border-[#d9ded5] bg-white/70 px-6 text-center">
          <span className="grid size-12 place-items-center rounded-full bg-[#eef2eb] text-[#527257]">
            <svg
              viewBox="0 0 24 24"
              className="size-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              aria-hidden="true"
            >
              <circle cx="10.8" cy="10.8" r="6.8" />
              <path d="m16 16 4.2 4.2M8 10.8h5.6" />
            </svg>
          </span>
          <h3 className="mt-4 text-lg font-semibold text-[#30362f]">No events found</h3>
          <p className="mt-2 max-w-sm text-sm leading-6 text-[#777d73]">
            Try a different title or category to find your next campus moment.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
            }}
            className="mt-5 rounded-full border border-[#dce4da] bg-white px-4 py-2 text-sm font-medium text-[#42684a] transition-colors hover:bg-[#f1f4ef]"
          >
            Clear filters
          </button>
        </div>
      )}
    </section>
  );
}
