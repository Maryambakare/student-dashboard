"use client";

import { useState } from "react";

interface Assignment {
  id: number;
  title: string;
  course: string;
  dueDate: string;
  dueLabel: string;
  color: string;
  completed: boolean;
}

interface SummaryCardProps {
  label: string;
  value: string;
  detail: string;
  accent: string;
  icon: "courses" | "assignments" | "grade";
}

const initialAssignments: Assignment[] = [
  {
    id: 1,
    title: "Research essay outline",
    course: "World Literature",
    dueDate: "Oct 28",
    dueLabel: "Due in 2 days",
    color: "bg-[#d9e9df] text-[#315e47]",
    completed: false,
  },
  {
    id: 2,
    title: "Problem set 06",
    course: "Calculus II",
    dueDate: "Oct 30",
    dueLabel: "Due in 4 days",
    color: "bg-[#f7e5c5] text-[#95631c]",
    completed: false,
  },
  {
    id: 3,
    title: "Ecosystem field notes",
    course: "Environmental Science",
    dueDate: "Nov 02",
    dueLabel: "Due in 7 days",
    color: "bg-[#dce7ef] text-[#456b87]",
    completed: false,
  },
];

const courses = [
  {
    name: "World Literature",
    code: "ENG 204",
    instructor: "Dr. Elena Morris",
    progress: 72,
    color: "bg-[#48785a]",
    mark: "WL",
    badge: "bg-[#e0ebe3] text-[#41664d]",
  },
  {
    name: "Calculus II",
    code: "MAT 231",
    instructor: "Prof. David Chen",
    progress: 58,
    color: "bg-[#c58b36]",
    mark: "C2",
    badge: "bg-[#f5ead7] text-[#9b6b25]",
  },
  {
    name: "Environmental Science",
    code: "BIO 118",
    instructor: "Dr. Priya Shah",
    progress: 86,
    color: "bg-[#63879b]",
    mark: "ES",
    badge: "bg-[#e0eaf0] text-[#4d7185]",
  },
];

function SummaryCard({ label, value, detail, accent, icon }: SummaryCardProps) {
  return (
<article className="flex min-h-[142px] items-start justify-between rounded-[5px] border border-[#e8e7df] bg-white p-5 sm:p-6 transition duration-200 hover:-translate-y-1 hover:shadow-md">
      <div>
        <p className="text-sm font-medium text-[#77796f]">{label}</p>
        <p className="mt-3 text-[32px] font-semibold leading-none tracking-[-1.2px] text-[#252922]">
          {value}
        </p>
        <p className="mt-3 text-xs text-[#898b82]">{detail}</p>
      </div>
      <span className={`grid size-10 place-items-center rounded-[4px] ${accent}`} aria-hidden="true">
        {icon === "courses" && (
          <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.7">
            <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21V5.5Z" />
            <path d="M4 17a2.5 2.5 0 0 1 2.5-2.5H20M8 7h7M8 10h7" />
          </svg>
        )}
        {icon === "assignments" && (
          <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.7">
            <rect x="5" y="4" width="14" height="17" rx="2" />
            <path d="M9 4.5h6M8.5 11l2 2 5-5M9 17h6" />
          </svg>
        )}
        {icon === "grade" && (
          <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.7">
            <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z" />
          </svg>
        )}
      </span>
    </article>
  );
}

export default function Home() {
  const [assignments, setAssignments] = useState(initialAssignments);
  const [filter, setFilter] = useState<"all" | "pending" | "completed">("all");
  const completedCount = assignments.filter((assignment) => assignment.completed).length;
  const filteredAssignments = assignments.filter((assignment) => {
  if (filter === "pending") return !assignment.completed;
  if (filter === "completed") return assignment.completed;
  return true;
});

  function toggleAssignment(id: number) {
    setAssignments((currentAssignments) =>
      currentAssignments.map((assignment) =>
        assignment.id === id
          ? { ...assignment, completed: !assignment.completed }
          : assignment,
      ),
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f5f0] text-[#252922]">
      <aside className="hidden min-h-screen w-[238px] shrink-0 flex-col border-r border-[#e8e7df] bg-[#fbfbf8] px-5 py-7 lg:fixed lg:inset-y-0 lg:flex">
        <a href="#overview" className="flex items-center gap-3 px-2" aria-label="Campus home">
          <span className="grid size-9 place-items-center rounded-[4px] bg-[#3d674c] text-white">
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M3 9.5 12 4l9 5.5-9 5.5-9-5.5Z" />
              <path d="M7 12v5c2.8 2.3 7.2 2.3 10 0v-5M21 10v6" />
            </svg>
          </span>
          <span className="text-[15px] font-semibold tracking-[-0.3px]">fieldnotes<span className="text-[#8b9c7f]">.</span></span>
        </a>

        <p className="mb-3 mt-12 px-3 text-[10px] font-semibold uppercase tracking-[1.3px] text-[#9a9b91]">Workspace</p>
        <nav aria-label="Dashboard sections" className="space-y-1">
          <a href="#overview" className="flex items-center gap-3 rounded-[4px] bg-[#e9eee7] px-3 py-2.5 text-sm font-medium text-[#3d674c]">
            <span aria-hidden="true">⌂</span> Overview
          </a>
          <a href="#courses" className="flex items-center gap-3 rounded-[4px] px-3 py-2.5 text-sm text-[#72756b] transition-colors hover:bg-[#f0f1eb] hover:text-[#3d674c]">
            <span aria-hidden="true">▤</span> My courses
          </a>
          <a href="#assignments" className="flex items-center gap-3 rounded-[4px] px-3 py-2.5 text-sm text-[#72756b] transition-colors hover:bg-[#f0f1eb] hover:text-[#3d674c]">
            <span aria-hidden="true">☷</span> Assignments
          </a>
        </nav>

        <div className="mt-auto border-t border-[#e8e7df] pt-5">
          <div className="flex items-center gap-3 px-2">
            <span className="grid size-9 place-items-center rounded-full bg-[#e7d9c5] text-xs font-semibold text-[#775d3d]">AM</span>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium">Alex Morgan</p>
              <p className="text-xs text-[#898b82]">Class of 2027</p>
            </div>
          </div>
        </div>
      </aside>

      <main id="overview" className="mx-auto min-h-screen max-w-[1440px] px-5 pb-12 sm:px-8 lg:ml-[238px] lg:px-12">
        <header className="flex min-h-[76px] items-center justify-between border-b border-[#e5e5dd]">
          <a href="#overview" className="flex items-center gap-2 text-sm font-semibold lg:hidden">
            <span className="grid size-8 place-items-center rounded-[4px] bg-[#3d674c] text-white" aria-hidden="true">f.</span>
            fieldnotes
          </a>
          <p className="hidden text-[13px] text-[#77796f] lg:block">Monday, October 26, 2026 <span className="mx-2 text-[#c4c4ba]">/</span> Fall semester</p>
          <div className="flex items-center gap-3 sm:gap-5">
            <span className="hidden text-sm text-[#77796f] sm:block">Good morning, Alex</span>
            <span className="grid size-9 place-items-center rounded-full bg-[#e7d9c5] text-xs font-semibold text-[#775d3d] lg:hidden" aria-label="Alex Morgan">AM</span>
            <span className="grid size-9 place-items-center rounded-full border border-[#e5e5dd] bg-white text-[#77796f]" aria-label="Notifications">
              <svg viewBox="0 0 24 24" className="size-[18px]" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9ZM10 21h4" />
              </svg>
            </span>
          </div>
        </header>

        <section className="pb-8 pt-8 sm:pb-9 sm:pt-10">
          <p className="text-xs font-semibold uppercase tracking-[1.4px] text-[#8b8d81]">Your learning space</p>
          <h1 className="mt-2 text-[30px] font-semibold leading-tight tracking-[-1px] sm:text-[36px]">A good week to learn.</h1>
          <p className="mt-2 text-sm text-[#77796f]">Here’s what’s happening with your semester.</p>
        </section>

        <section aria-label="Academic summary" className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          <SummaryCard label="Active courses" value="03" detail="All courses on track" accent="bg-[#e8efe8] text-[#41664d]" icon="courses" />
          <SummaryCard label="Assignments done" value={`${String(completedCount).padStart(2, "0")} / 03`} detail="Keep your momentum going" accent="bg-[#f5ead7] text-[#9b6b25]" icon="assignments" />
          <SummaryCard label="Current average" value="A−" detail="Across all enrolled courses" accent="bg-[#e3ebef] text-[#4d7185]" icon="grade" />
        </section>

        <section id="courses" className="mt-10 scroll-mt-6">
          <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[1.3px] text-[#8b8d81]">Fall semester · 2026</p>
              <h2 className="mt-1 text-xl font-semibold tracking-[-0.4px]">Your courses</h2>
            </div>
            <span className="text-xs text-[#898b82]">3 enrolled</span>
          </div>
          <div className="grid gap-3 xl:grid-cols-3">
            {courses.map((course) => (
<article key={course.code} className="rounded-[5px] border border-[#e8e7df] bg-white p-5 transition duration-200 hover:-translate-y-1 hover:shadow-md">
                <div className="flex items-start justify-between gap-3">
                  <span className={`grid size-10 shrink-0 place-items-center rounded-[4px] text-xs font-semibold ${course.badge}`}>{course.mark}</span>
                  <span className="rounded-[3px] bg-[#f5f5f0] px-2 py-1 text-[10px] font-medium tracking-[0.5px] text-[#77796f]">{course.code}</span>
                </div>
                <h3 className="mt-5 text-[15px] font-semibold">{course.name}</h3>
                <p className="mt-1 text-xs text-[#898b82]">{course.instructor}</p>
                <div className="mt-5 flex items-center justify-between text-xs">
                  <span className="text-[#77796f]">Course progress</span>
                  <span className="font-semibold text-[#454940]">{course.progress}%</span>
                </div>
                <div className="mt-2 h-[5px] overflow-hidden rounded-full bg-[#eeeee8]" role="progressbar" aria-label={`${course.name} progress`} aria-valuenow={course.progress} aria-valuemin={0} aria-valuemax={100}>
                  <div className={`h-full rounded-full ${course.color}`} style={{ width: `${course.progress}%` }} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="assignments" className="mt-10 scroll-mt-6">
          <div className="mb-4 flex items-end justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[1.3px] text-[#8b8d81]">Your next steps</p>
              <h2 className="mt-1 text-xl font-semibold tracking-[-0.4px]">Upcoming assignments</h2>
            </div>
            <span className="text-xs text-[#898b82]">{assignments.length - completedCount} remaining</span>
          </div>
          <div className="mb-4 flex gap-2">
  {(["all", "pending", "completed"] as const).map((option) => (
    <button
      key={option}
      type="button"
      onClick={() => setFilter(option)}
      aria-pressed={filter === option}
      className={`rounded border px-3 py-2 text-xs font-medium capitalize transition-colors ${
        filter === option
          ? "border-[#3d674c] bg-[#3d674c] text-white"
          : "border-[#e8e7df] bg-white text-[#55574f] hover:bg-[#f5f5f0]"
      }`}
    >
      {option === "all" ? "All" : option === "pending" ? "Pending" : "Completed"}
    </button>
  ))}
</div>
          <div className="divide-y divide-[#eeeee8] rounded-[5px] border border-[#e8e7df] bg-white px-5 sm:px-6">
            {filteredAssignments.length === 0 ? (
  <p className="py-8 text-center text-sm text-[#898b82]">
    {filter === "completed"
      ? "No completed assignments yet."
      : filter === "pending"
        ? "You're all caught up! No pending assignments."
        : "No assignments available."}
  </p>
) : (
  filteredAssignments.map((assignment) => (
            <article key={assignment.id} className={`flex flex-col gap-4 py-5 transition duration-200 hover:bg-[#fafaf7] sm:flex-row sm:items-center sm:justify-between ${assignment.completed ? "opacity-65" : ""}`}>
                <div className="flex min-w-0 items-center gap-3">
                  <span className={`grid size-10 shrink-0 place-items-center rounded-[4px] ${assignment.color}`} aria-hidden="true">
                    <svg viewBox="0 0 24 24" className="size-[18px]" fill="none" stroke="currentColor" strokeWidth="1.7">
                      <path d="M7 3h7l5 5v12a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
                      <path d="M14 3v6h5M9 14h6M9 17h6" />
                    </svg>
                  </span>
                  <div className="min-w-0">
                    <h3 className={`truncate text-sm font-semibold ${assignment.completed ? "line-through" : ""}`}>{assignment.title}</h3>
                    <p className="mt-1 text-xs text-[#898b82]">{assignment.course} <span className="mx-1.5 text-[#c4c4ba]">·</span> {assignment.dueLabel}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-4 pl-[52px] sm:pl-0">
                  <span className="whitespace-nowrap text-xs font-medium text-[#77796f]">{assignment.dueDate}</span>
                  <button
                    type="button"
                    onClick={() => toggleAssignment(assignment.id)}
                    aria-pressed={assignment.completed}
                    className={`min-h-9 min-w-[146px] rounded-[4px] border px-3 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3d674c] ${assignment.completed ? "border-[#cbd9ce] bg-[#edf3ee] text-[#41664d] hover:bg-[#e5eee7]" : "border-[#d9ded6] bg-white text-[#4e6552] hover:border-[#9eb3a1] hover:bg-[#f5f8f4]"}`}
                  >
                    {assignment.completed ? "Completed · Undo" : "Mark as Completed"}
                  </button>
                </div>
              </article>
            ))
          )}
          </div>
        </section>

        <footer className="mt-10 border-t border-[#e5e5dd] pt-5 text-center text-[11px] text-[#9a9b91]">
          Keep showing up. It adds up.
        </footer>
      </main>
    </div>
  );
}
