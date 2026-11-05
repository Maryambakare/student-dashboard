"use client";

import { useState } from "react";

import EventCard from "./event-card";
import events from "../data";

const categories = ["All", "Tech", "Sports", "Faith", "Social"] as const;

export default function EventExplorer() {
  const [selectedCategory, setSelectedCategory] =
    useState<(typeof categories)[number]>("All");
  const filteredEvents =
    selectedCategory === "All"
      ? events
      : events.filter((event) => event.category === selectedCategory);

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

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}
