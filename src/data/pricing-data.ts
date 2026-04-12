export interface Package {
  id: string;
  name: string;
  priceMin: number;
  priceMax: number;
  idealFor: string;
  features: string[];
  hasPageCount?: boolean;
  defaultPages?: number;
}

export interface AddOn {
  id: string;
  name: string;
  priceMin: number;
  priceMax: number | null;
  description: string;
}

export const packages: Package[] = [
  {
    id: "starter",
    name: "Starter Web",
    priceMin: 2100,
    priceMax: 4200,
    idealFor: "Individuals & small businesses",
    features: ["1–3 Pages", "Mobile-Friendly", "Contact Form", "WhatsApp Integration"],
    hasPageCount: true,
    defaultPages: 2,
  },
  {
    id: "standard",
    name: "Standard Business",
    priceMin: 4900,
    priceMax: 8400,
    idealFor: "Growing businesses",
    features: ["5–8 Pages", "Blog", "SEO Setup", "Maps", "Chat Integration"],
    hasPageCount: true,
    defaultPages: 6,
  },
  {
    id: "premium",
    name: "Premium Corporate",
    priceMin: 9800,
    priceMax: 16800,
    idealFor: "Established brands",
    features: ["10+ Pages", "Advanced UI/UX", "Careers Page", "SEO", "Security"],
    hasPageCount: true,
    defaultPages: 10,
  },
  {
    id: "ecommerce",
    name: "Ecommerce Website",
    priceMin: 8400,
    priceMax: 21000,
    idealFor: "Online stores",
    features: ["Storefront", "Product Pages", "Admin Dashboard", "Stock Tracking"],
  },
  {
    id: "booking",
    name: "Booking System Website",
    priceMin: 7000,
    priceMax: 14000,
    idealFor: "Service businesses",
    features: ["Booking-ready structure", "Admin Panel"],
  },
  {
    id: "saas",
    name: "SaaS MVP",
    priceMin: 14000,
    priceMax: 56000,
    idealFor: "Startups & tech platforms",
    features: ["Dashboards", "Authentication", "APIs", "Scalable Architecture"],
  },
  {
    id: "landing",
    name: "Landing Page",
    priceMin: 1500,
    priceMax: 2800,
    idealFor: "Promotions & campaigns",
    features: ["1-page design", "CTA", "Analytics"],
  },
];

export const addOns: AddOn[] = [
  { id: "payment", name: "Payment Integration", priceMin: 2000, priceMax: null, description: "Secure online payments (Mobile Money, Cards, etc.)" },
  { id: "booking-addon", name: "Advanced Booking System", priceMin: 4000, priceMax: null, description: "Calendar, automated scheduling, reminders" },
  { id: "seo", name: "Advanced SEO Optimization", priceMin: 1500, priceMax: 3000, description: "Rank better on Google" },
  { id: "dashboard", name: "Custom Dashboard", priceMin: 3000, priceMax: 8000, description: "Data visualization & reporting" },
  { id: "api", name: "API Integrations", priceMin: 2500, priceMax: null, description: "Connect to third-party systems" },
  { id: "chat", name: "Live Chat System", priceMin: 800, priceMax: 1500, description: "Real-time customer engagement" },
  { id: "analytics", name: "Analytics & Tracking Setup", priceMin: 500, priceMax: 1200, description: "Performance monitoring tools" },
  { id: "maintenance", name: "Maintenance Plan (Monthly)", priceMin: 500, priceMax: 2000, description: "Updates, backups & support" },
];

export const formatGHS = (amount: number) =>
  `GH₵${amount.toLocaleString()}`;
