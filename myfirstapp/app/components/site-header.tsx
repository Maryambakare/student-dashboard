import Link from "next/link";

export default function SiteHeader() {
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
            className="rounded-full px-4 py-2 text-sm font-medium text-[#555b51] transition-colors hover:bg-[#eff1eb] hover:text-[#315e47]"
          >
            Discover
          </Link>
          <Link
            href="/my-events"
            className="rounded-full bg-[#315e47] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#264b39]"
          >
            My events
          </Link>
        </nav>
      </div>
    </header>
  );
}
