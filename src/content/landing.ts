export type DemoItem = {
  id: string;
  industry: string;
  title: string;
  problem: string;
  outcome: string;
  /** Path under /public, e.g. /media/demo-tree-service.jpeg */
  imageSrc: string;
  imageAlt: string;
  liveUrl: string;
};

/** Hero looping portfolio clip + poster frame while video loads */
export const HERO_MEDIA = {
  videoSrc: "/media/hero-demo.mp4",
  posterSrc: "/media/demo-tree-service.jpeg",
} as const;

export type AdvancedAddonWidget =
  | "chat"
  | "quote"
  | "lead-alert"
  | "service-area"
  | "reviews"
  | "photo-upload";

export type AdvancedAddon = {
  id: string;
  title: string;
  description: string;
  icon: "bot" | "calculator" | "bell" | "map" | "star" | "camera";
  widget: AdvancedAddonWidget;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const INDUSTRIES = [
  "Roofing",
  "Tree Service",
  "Landscaping",
  "Plumbing",
  "HVAC",
  "Electrical",
  "Pressure Washing",
  "Fencing",
  "Junk Removal",
  "Concrete",
  "Window Cleaning",
  "Pest Control",
] as const;

export const DEMO_ITEMS: DemoItem[] = [
  {
    id: "tree-demo",
    industry: "Tree Service",
    title: "Tree service demo",
    problem: "Emergency paths and quotes were easy to miss on the old site.",
    outcome: "Clear emergency CTAs, trust cues, and a fast path to estimate or call.",
    imageSrc: "/media/demo-tree-service.jpeg",
    imageAlt: "Sample tree service website with hero, emergency section, and quote card",
    liveUrl: "https://home-service-demos.vercel.app/tree-service",
  },
  {
    id: "plumbing-demo",
    industry: "Plumbing",
    title: "Plumbing demo",
    problem: "Busy layout without a obvious first action for urgent jobs.",
    outcome: "Same-day focus, readable service list, and calls and quotes up front.",
    imageSrc: "/media/demo-plumbing.jpeg",
    imageAlt: "Sample plumbing website with hero, service tags, and booking options",
    liveUrl: "https://home-service-demos.vercel.app/plumbing",
  },
  {
    id: "landscaping-demo",
    industry: "Landscaping",
    title: "Landscaping demo",
    problem: "Generic look that did not show project quality or local credibility.",
    outcome: "Strong visuals, proof row, and portfolio that sells the work.",
    imageSrc: "/media/demo-landscaping.jpeg",
    imageAlt: "Sample landscaping website with hero garden photo and project gallery",
    liveUrl: "https://home-service-demos.vercel.app/landscaping",
  },
];

export const WHY_THIS_WORKS_POINTS = [
  "Your customers are on phones, so we build phone-first from day one.",
  "They do not scroll forever, so the primary action is always in reach.",
  "They bounce from slow websites, so speed is treated as a product feature.",
  "They judge trust fast, so design quality and clarity are intentional.",
  "They need quick answers, so forms and calls are direct and simple.",
] as const;

export const PROCESS_STEPS = [
  {
    id: "share",
    title: "Share your current site",
    description: "Send your URL or business type.",
    timeline: "Day 1",
  },
  {
    id: "mockup",
    title: "Get a free mockup",
    description: "We send a direction that fits your business.",
    timeline: "Days 2-3",
  },
  {
    id: "refine",
    title: "Approve and refine",
    description: "You request edits before anything goes live.",
    timeline: "Days 4-5",
  },
  {
    id: "launch",
    title: "Launch fast",
    description: "We ship a modern site ready for real customers.",
    timeline: "Days 6-10",
  },
] as const;

export const ADVANCED_ADDONS: AdvancedAddon[] = [
  {
    id: "ai-chat",
    title: "AI chat assistant",
    description: "Handles common questions after hours so leads are not lost overnight.",
    icon: "bot",
    widget: "chat",
  },
  {
    id: "instant-quote",
    title: "Instant quote estimator",
    description: "Lets visitors get a quick price range before calling your team.",
    icon: "calculator",
    widget: "quote",
  },
  {
    id: "lead-alerts",
    title: "Lead alert notifications",
    description: "Pings your phone the moment a new lead comes in from the website.",
    icon: "bell",
    widget: "lead-alert",
  },
  {
    id: "service-area",
    title: "Service-area checker",
    description: "Confirms zip coverage instantly so customers know if you service them.",
    icon: "map",
    widget: "service-area",
  },
  {
    id: "reviews",
    title: "Live review spotlight",
    description: "Highlights recent reviews to build trust before customers contact you.",
    icon: "star",
    widget: "reviews",
  },
  {
    id: "photo-quote",
    title: "Photo upload for quotes",
    description: "Collects images early so your team can respond with better estimates.",
    icon: "camera",
    widget: "photo-upload",
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "price",
    question: "How much does this usually cost?",
    answer:
      "Scope varies by business, so we start with a mockup and then provide clear pricing based on what you actually need.",
  },
  {
    id: "timeline",
    question: "How long does a project take?",
    answer:
      "Most outreach sites ship quickly once content is approved. We focus on fast turnaround with clear milestones.",
  },
  {
    id: "revisions",
    question: "What if I do not like the first design direction?",
    answer:
      "We revise based on your feedback. The goal is a site that feels right for your business and customers.",
  },
  {
    id: "domain",
    question: "Do I have to change my domain or hosting?",
    answer:
      "Usually no. We can typically keep your existing domain and advise on hosting setup only when needed.",
  },
  {
    id: "support",
    question: "Can you help with updates after launch?",
    answer:
      "Yes. We can keep handling updates, feature additions, and ongoing improvements based on your goals.",
  },
];
