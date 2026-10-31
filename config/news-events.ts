export interface NewsItem {
  id: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  link: string;
}

export const newsEventsData: NewsItem[] = [
  {
    id: "news-1",
    category: "ACHIEVEMENT",
    date: "15 Mar 2026",
    title: "PMRIMS Students Awarded Prestigious ICMR-STS Scholarships",
    excerpt: "Several PMRIMS undergraduate MBBS students have earned the renowned ICMR-STS scholarships for their outstanding clinical research projects.",
    image: "/images/PMR IMAGES/College Labs/vlcsnap-2026-02-25-11h45m22s241.png",
    link: "/gallery",
  },
  {
    id: "news-2",
    category: "COMMUNITY",
    date: "10 Mar 2026",
    title: "PMRIMS Conducts Free Medical Camps Twice Weekly",
    excerpt: "In keeping with its commitment to community health, PMRIMS conducts free medical outreach camps twice every week across Chevella and Rangareddy district.",
    image: "/images/PMR IMAGES/OP/vlcsnap-2026-02-25-11h56m04s783.png",
    link: "/gallery",
  },
  {
    id: "news-3",
    category: "EVENTS",
    date: "28 Feb 2026",
    title: "Annual PMRIMS Cultural Fest Celebrates Student Talent",
    excerpt: "The annual cultural fest brought together medical students from across disciplines for a celebration of music, dance, and inter-collegiate artistic showcases.",
    image: "/images/PMR IMAGES/Sports/WhatsApp Image 2026-02-25 at 12.47.10 PM (1).jpeg",
    link: "/gallery",
  },
];
