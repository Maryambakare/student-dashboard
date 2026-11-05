"use client";

import { useEffect, useState } from "react";

function getEventStart(date: string, time: string) {
  const [clock, period] = time.split(" ");
  const [hour, minute] = clock.split(":").map(Number);
  const hour24 = (hour % 12) + (period === "PM" ? 12 : 0);
  return new Date(
    `${date}T${String(hour24).padStart(2, "0")}:${String(minute).padStart(2, "0")}:00`,
  );
}

export default function EventCountdown({
  date,
  time,
}: {
  date: string;
  time: string;
}) {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const updateTime = () => setNow(Date.now());
    updateTime();
    const intervalId = window.setInterval(updateTime, 60_000);
    return () => window.clearInterval(intervalId);
  }, []);

  if (now === null) {
    return (
      <p className="text-sm font-medium text-[#315e47]" aria-live="polite">
        Calculating start time...
      </p>
    );
  }

  const millisecondsUntilStart = getEventStart(date, time).getTime() - now;
  if (millisecondsUntilStart <= 0) {
    return (
      <p className="text-sm font-medium text-[#315e47]" aria-live="polite">
        This event has started
      </p>
    );
  }

  const totalMinutes = Math.ceil(millisecondsUntilStart / 60_000);
  const days = Math.floor(totalMinutes / 1440);
  const hours = Math.floor((totalMinutes % 1440) / 60);
  const minutes = totalMinutes % 60;
  const countdown =
    days > 0
      ? `${days} ${days === 1 ? "day" : "days"} ${hours} hrs`
      : hours > 0
        ? `${hours} hrs ${minutes} min`
        : `${minutes} min`;

  return (
    <p className="text-sm font-medium text-[#315e47]" aria-live="polite">
      Starts in {countdown}
    </p>
  );
}
