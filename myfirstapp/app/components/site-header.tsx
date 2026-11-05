"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useSavedEvents } from "./saved-events-context";

export default function SiteHeader() {
  const pathname = usePathname();
  const { isReady, savedEventIds } = useSavedEvents();
  const isMyEventsPage = pathname === "/my-events";

  return (
    <header className="sticky top-0 z-20 border-b border-[#e8e7df] bg-[#fbfbf8]/95 backdrop-blur">
      <div className="mx-auto flex h-[76px] max-w-[1240px] items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Gather home">
          <span className="grid size-10 place-items-center rounded-xl bg-[#315e47] text-white">
            <svg
              viewBox="0 0 24 24"
              className="size-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
            >
              <path d="M4 13.5c0-4.4 3.6-8 8-8s8 3.6 8 8" />
              <path d="M4 13.5v3a2 2 0 0 0 2 2h2v-7H6a2 2 0 0 0-2 2Zm16 0v3a2 2 0 0 1-2 2h-2v-7h2a2 2 0 0 1 2 2Z" />
            </svg>
          </span>
          <span className="text-[20px] font-semibold tracking-[-0.8px] text-[#252922]">
            gather<span className="text-[#729477]">.</span>
          </span>
        </Link>

        <nav aria-label="Main navigation" className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/"
            aria-current={pathname === "/" ? "page" : undefined}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              pathname === "/"
                ? "bg-[#eff1eb] text-[#315e47]"
                : "text-[#555b51] hover:bg-[#eff1eb] hover:text-[#315e47]"
            }`}
          >
            Discover
          </Link>
          <Link
            href="/my-events"
            aria-current={isMyEventsPage ? "page" : undefined}
            className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              isMyEventsPage
                ? "bg-[#315e47] text-white"
                : "text-[#555b51] hover:bg-[#eff1eb] hover:text-[#315e47]"
            }`}
          >
            My events
            {isReady && savedEventIds.length > 0 && (
              <span
                className={`grid min-w-5 place-items-center rounded-full px-1 text-[11px] ${
                  isMyEventsPage ? "bg-white/20 text-white" : "bg-[#e2ebe0] text-[#315e47]"
                }`}
              >
                {savedEventIds.length}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
