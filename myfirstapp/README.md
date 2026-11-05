# Gather - Campus Event Board

A responsive campus event board built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- Browse campus events with category badges and responsive cards
- Filter by Tech, Sports, Faith, or Social
- Search event titles and sort by date
- Open event details with venue information and a live countdown
- Save events to a personal list backed by browser local storage
- See saved events on the My Events page
- Accessible search, filters, save controls, and empty states

## Getting Started

From the repository root, enter the Next.js project:

```bash
cd myfirstapp
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to browse the event board.

## Checks

```bash
npm run lint
npm run build
```

## Event data

The campus event catalog is in `app/data.js`. Each entry includes an ID, title, category, date, time, venue, image URL, and description. Saved event IDs are stored in the browser under `gather-saved-events`.
