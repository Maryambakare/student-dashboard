import Link from "next/link";

export default function EventDetailsLoading() {
  return (
    <main className="mx-auto min-h-[calc(100vh-76px)] max-w-[1080px] px-5 pb-20 pt-8 sm:px-8 sm:pt-12">
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-[#687265]"
      >
        <span aria-hidden="true">&larr;</span> All events
      </Link>
      <div
        className="mt-5 animate-pulse overflow-hidden rounded-[26px] border border-[#e7e8e0] bg-white"
        aria-label="Loading event details"
      >
        <div className="min-h-[300px] bg-[#e7ebe3] sm:min-h-[420px]" />
        <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-[1fr_300px]">
          <div className="space-y-3">
            <div className="h-6 w-40 rounded bg-[#e7ebe3]" />
            <div className="h-4 max-w-[580px] rounded bg-[#eff1ec]" />
            <div className="h-4 max-w-[480px] rounded bg-[#eff1ec]" />
          </div>
          <div className="min-h-[170px] rounded-2xl bg-[#f3f5f0]" />
        </div>
      </div>
    </main>
  );
}
