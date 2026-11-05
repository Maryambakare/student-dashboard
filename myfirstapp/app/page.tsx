import EventCard from "./components/event-card";
import events from "./data";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-[1240px] px-5 pb-20 sm:px-8">
      <section className="grid gap-8 pb-12 pt-12 sm:pb-16 sm:pt-16 lg:grid-cols-[1fr_0.78fr] lg:items-center lg:gap-16 lg:pb-20 lg:pt-20">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#dce4da] bg-white/80 px-3 py-1.5 text-xs font-medium text-[#496b4f]">
            <span className="size-1.5 rounded-full bg-[#668b69]" aria-hidden="true" />
            A little more campus, together
          </p>
          <h1 className="max-w-[620px] text-[44px] font-semibold leading-[1.06] tracking-[-2.8px] text-[#272e27] sm:text-[62px] sm:tracking-[-3.8px]">
            Good things happen when we <span className="text-[#668268]">gather.</span>
          </h1>
          <p className="mt-5 max-w-[500px] text-[16px] leading-7 text-[#767b71]">
            Find your next favorite campus moment, meet new people, and make this semester yours.
          </p>
          <a
            href="#upcoming"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#315e47] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#264b39]"
          >
            Explore events <span aria-hidden="true">&darr;</span>
          </a>
        </div>
        <div
          role="img"
          aria-label="Students spending time together outdoors"
          className="relative min-h-[280px] overflow-hidden rounded-[26px] bg-cover bg-center shadow-[0_20px_48px_rgba(47,64,48,0.13)] sm:min-h-[360px]"
          style={{
            backgroundImage:
              'linear-gradient(180deg, rgba(25, 38, 29, .02) 28%, rgba(25, 38, 29, .56) 100%), url("https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1400&q=85")',
          }}
        >
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-5 text-white">
            <div>
              <p className="text-xs font-medium text-white/75">A campus full of possibility</p>
              <p className="mt-1 text-[21px] font-semibold tracking-[-0.5px]">Your people are out there.</p>
            </div>
            <span className="grid size-11 shrink-0 place-items-center rounded-full border border-white/35 bg-white/15 backdrop-blur">
              <svg
                viewBox="0 0 24 24"
                className="size-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                aria-hidden="true"
              >
                <path d="M16 8a4 4 0 0 0-8 0c0 3-4 4-4 7h16c0-3-4-4-4-7ZM10 19h4" />
              </svg>
            </span>
          </div>
        </div>
      </section>

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
          <p className="text-sm text-[#7b8077]">
            <span className="font-semibold text-[#3d674c]">{events.length}</span> ways to spend your time well
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
    </main>
  );
}
