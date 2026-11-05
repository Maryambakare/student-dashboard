/** @typedef {"Tech" | "Sports" | "Faith" | "Social"} EventCategory */

/** @type {Array<{ id: string, title: string, category: EventCategory, date: string, time: string, venue: string, image: string, description: string }>} */
const events = [
  {
    id: "campus-tech-summit",
    title: "Campus Tech Summit",
    category: "Tech",
    date: "2026-11-12",
    time: "10:00 AM",
    venue: "Innovation Hub",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=85",
    description:
      "Meet the builders shaping tomorrow at a full day of practical talks, hands-on demos, and conversations with the people growing our campus tech community.",
  },
  {
    id: "founders-fireside",
    title: "Founders' Fireside Chat",
    category: "Tech",
    date: "2026-11-15",
    time: "4:30 PM",
    venue: "The Commons",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=85",
    description:
      "Hear honest stories about starting small, finding your first customers, and building a team from three student founders who began right here on campus.",
  },
  {
    id: "interfaculty-football",
    title: "Interfaculty Football Final",
    category: "Sports",
    date: "2026-11-09",
    time: "3:00 PM",
    venue: "University Sports Field",
    image:
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1200&q=85",
    description:
      "The season comes down to one match. Bring your faculty colours, find your spot in the stands, and cheer both teams through the final whistle.",
  },
  {
    id: "sunrise-fun-run",
    title: "Sunrise Campus Fun Run",
    category: "Sports",
    date: "2026-11-18",
    time: "6:30 AM",
    venue: "Main Gate",
    image:
      "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1200&q=85",
    description:
      "Start the morning with a relaxed 3K loop around campus. Run, jog, or walk with friends; everyone is welcome, and refreshments are waiting at the finish.",
  },
  {
    id: "evening-of-worship",
    title: "An Evening of Worship",
    category: "Faith",
    date: "2026-11-13",
    time: "6:00 PM",
    venue: "University Chapel",
    image:
      "https://images.unsplash.com/photo-1519683109079-d5f539e1542f?auto=format&fit=crop&w=1200&q=85",
    description:
      "Take a quiet pause in the middle of the semester for music, reflection, and a warm welcome from the campus faith community.",
  },
  {
    id: "interfaith-table",
    title: "Interfaith Community Table",
    category: "Faith",
    date: "2026-11-21",
    time: "1:00 PM",
    venue: "Student Union Garden",
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=85",
    description:
      "Share a meal and thoughtful conversation with students from different traditions. Come curious, bring a friend, and pull up a chair.",
  },
  {
    id: "welcome-back-picnic",
    title: "Welcome Back Picnic",
    category: "Social",
    date: "2026-11-08",
    time: "12:00 PM",
    venue: "Founders' Lawn",
    image:
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=85",
    description:
      "Ease into the new term with lawn games, good food, and an afternoon of meeting people from across campus. Just show up; we'll take care of the rest.",
  },
  {
    id: "open-mic-night",
    title: "Open Mic Under the Stars",
    category: "Social",
    date: "2026-11-19",
    time: "7:00 PM",
    venue: "Arts Courtyard",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=85",
    description:
      "A laid-back night for songs, stories, poetry, and the occasional surprise. Sign up for a spot or settle in with friends and enjoy the show.",
  },
  {
    id: "design-sprint",
    title: "Build for Good Design Sprint",
    category: "Tech",
    date: "2026-11-25",
    time: "9:00 AM",
    venue: "Digital Lab",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",
    description:
      "Team up with designers and developers to prototype a small idea for a local community partner. Bring a laptop, an open mind, and a willingness to collaborate.",
  },
  {
    id: "wellness-yoga",
    title: "Mindful Morning Yoga",
    category: "Social",
    date: "2026-11-11",
    time: "8:00 AM",
    venue: "Recreation Studio",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=85",
    description:
      "Stretch, breathe, and reset with a beginner-friendly guided class. Mats are available, and no previous yoga experience is needed.",
  },
];

export default events;
