import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { usePageSEO, BASE_URL } from "@/hooks/use-page-seo";
import { useWhatsApp } from "@/hooks/use-whatsapp";
import { Link } from "react-router-dom";
import {
  ShoppingCart,
  CreditCard,
  Boxes,
  Truck,
  MapPin,
  ImagePlus,
  BarChart3,
  Users,
  ShieldCheck,
  Bell,
  Store,
  LayoutDashboard,
  ExternalLink,
  ArrowRight,
  MessageCircle,
  CalendarCheck,
} from "lucide-react";
import ResponsiveImage from "@/components/ResponsiveImage";
import { portfolioImages } from "@/lib/portfolio-images";

const { qlickers: qlickersShot, stylebyfef: stylebyfefShot } = portfolioImages;

const EcommercePlatformPage = () => {
  const { openWhatsApp } = useWhatsApp();


  const capabilities = [
    {
      icon: Store,
      title: "Conversion-Focused Storefront",
      description:
        "Multi-category catalogue, merchandising banners, search with filters, wishlists, variants, flash deals and preorders — engineered for mobile-first shoppers.",
    },
    {
      icon: CreditCard,
      title: "Payments & Checkout",
      description:
        "Card, Mobile Money (MTN, Telecel, AirtelTigo) and pay-on-delivery, with secure tokenised checkout, order confirmation and automated receipts.",
    },
    {
      icon: Boxes,
      title: "Inventory & Catalogue Control",
      description:
        "Real-time stock levels, variant-level SKUs, low-stock alerts, bulk uploads, pricing rules, discounts and clearance management from one console.",
    },
    {
      icon: Truck,
      title: "Fulfilment & Dispatch",
      description:
        "Order lifecycle from paid to delivered, rider assignment, delivery zones and rates, packing slips and returns handling with full audit trail.",
    },
    {
      icon: MapPin,
      title: "Pickup & Drop-Off Points",
      description:
        "Manage a network of collection hubs — customers choose a pickup point at checkout, staff confirm handover, and every drop-off is tracked and reconciled.",
    },
    {
      icon: ImagePlus,
      title: "Custom Image Ordering",
      description:
        "Shoppers upload a photo of what they want — a style, a fabric, a spare part — and request it. The team quotes, converts it into an order and fulfils it.",
    },
    {
      icon: Users,
      title: "Customer Engagement",
      description:
        "Accounts and order history, reviews, abandoned-cart nudges, WhatsApp and email notifications, loyalty and campaign-ready customer segments.",
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description:
        "Revenue, best sellers, stock turnover, delivery performance and channel attribution — the operating numbers a board or investor actually asks for.",
    },
    {
      icon: ShieldCheck,
      title: "Central Governance",
      description:
        "Role-based access for owners, managers, dispatch and support staff, with row-level security, action logs and safe multi-branch administration.",
    },
  ];

  const deployments = [
    {
      name: "Qlickers",
      url: "https://www.qlickers.com/",
      tagline: "General marketplace across nine retail categories",
      image: qlickersShot,
      points: [
        "Multi-category marketplace with preorders and daily deals",
        "Same-day Accra delivery plus nationwide dispatch",
        "Mobile Money and card payments with returns policy workflow",
      ],
    },
    {
      name: "StyleByFef",
      url: "https://www.stylebyfef.com/",
      tagline: "Fashion, beauty and lifestyle retail storefront",
      image: stylebyfefShot,
      points: [
        "Editorial merchandising with collections and clearance engine",
        "Wishlists, variant sizing and curated trend landing pages",
        "Free-delivery thresholds and 14-day returns automation",
      ],
    },
  ];

  const ECOM_URL = `${BASE_URL}/ecommerce-platform`;

  const ecommerceSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Gotechpluz",
      url: BASE_URL,
      logo: `${BASE_URL}/favicon.png`,
      telephone: "+233247233996",
      email: "info@gotechpluz.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "La Tebu Cr",
        addressLocality: "Accra",
        addressCountry: "GH",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${ECOM_URL}#webpage`,
      url: ECOM_URL,
      name: "Gotechpluz E-commerce Platform",
      description:
        "End-to-end e-commerce application unifying storefront, payments, inventory, fulfilment, customer engagement and analytics, proven in live client deployments.",
      inLanguage: "en",
      isPartOf: { "@type": "WebSite", "@id": `${BASE_URL}/#website`, url: BASE_URL, name: "Gotechpluz" },
      publisher: { "@id": `${BASE_URL}/#organization` },
      primaryImageOfPage: `${BASE_URL}${qlickersShot.img.src}`,
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
          { "@type": "ListItem", position: 2, name: "E-commerce Platform", item: ECOM_URL },
        ],
      },
    },
    {
      "@context": "https://schema.org",
      "@type": ["SoftwareApplication", "Product"],
      "@id": `${ECOM_URL}#product`,
      name: "Gotechpluz E-commerce Application",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web, iOS, Android",
      url: ECOM_URL,
      image: `${BASE_URL}${qlickersShot.img.src}`,
      description:
        "Production-ready commerce platform with storefront, Mobile Money and card payments, inventory, pickup and drop-off points, custom image ordering, fulfilment and analytics.",
      provider: { "@id": `${BASE_URL}/#organization` },
    },
    ...deployments.map((d, i) => ({
      "@context": "https://schema.org",
      "@type": ["CreativeWork", "CaseStudy"],
      "@id": `${ECOM_URL}#case-study-${i + 1}`,
      url: d.url,
      name: `${d.name} — ${d.tagline}`,
      abstract: d.tagline,
      description: d.points.join(" "),
      image: `${BASE_URL}${d.image.img.src}`,
      inLanguage: "en",
      creator: { "@id": `${BASE_URL}/#organization` },
      mainEntityOfPage: { "@id": `${ECOM_URL}#webpage` },
      about: { "@type": "Organization", name: d.name, url: d.url },
    })),
  ];

  usePageSEO({
    title: "E-commerce Platform Ghana | Storefront, Payments & Admin - Gotechpluz",
    description:
      "Gotechpluz's production-ready e-commerce application: storefront, payments, inventory, fulfilment, pickup & drop-off points, custom image orders and analytics in one governed system.",
    canonical: ECOM_URL,
    ogTitle: "Gotechpluz E-commerce Platform — Retail, Payments & Fulfilment in One System",
    ogDescription:
      "An end-to-end commerce application proven in live client deployments: storefront, Mobile Money and card payments, inventory, pickup points, custom image orders and analytics.",
    ogImage: qlickersShot.img.src,
    twitterCard: "summary_large_image",
    keywords:
      "e-commerce development Ghana, online store Accra, retail platform Ghana, pickup and drop off delivery, custom image order, admin dashboard e-commerce",
    structuredData: ecommerceSchemas,
  });

  const stack = [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "PostgreSQL",
    "Row-Level Security",
    "Edge Functions",
    "Payment Gateways",
    "Mobile Money APIs",
    "Cloud Storage",
    "Analytics",
  ];

  const outcomes = [
    { metric: "2", label: "Live client deployments" },
    { metric: "9+", label: "Retail categories supported" },
    { metric: "24/7", label: "Always-on storefront" },
    { metric: "1", label: "Unified admin console" },
  ];

  const demoMessage =
    "Hello Gotechpluz! I'd like to book a demo of your e-commerce platform (storefront + admin dashboard). Please share available times.";

  return (
    <div className="min-h-screen page-transition-enter">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-scroll-blur-in">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <ShoppingCart className="h-4 w-4 text-primary" />
              <span className="text-primary font-semibold text-sm">
                Flagship Product • Production Ready
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              The Gotechpluz{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                E-commerce Application
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              A fully engineered, production-ready e-commerce application that turns any
              retail business into a complete digital commerce operation.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              It unifies storefront, payments, inventory, fulfilment, customer engagement and
              analytics into a single, centrally governed system — including pickup and
              drop-off point management and custom image ordering.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Button
                size="lg"
                className="bg-gradient-primary"
                onClick={() =>
                  openWhatsApp({ source: "ecommerce_hero_demo", message: demoMessage })
                }
              >
                <CalendarCheck className="mr-2 h-5 w-5" />
                Book a Demo
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/price-estimator">
                  Estimate Your Store <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-12 bg-background border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {outcomes.map((o) => (
              <div key={o.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  {o.metric}
                </p>
                <p className="text-sm text-muted-foreground mt-1">{o.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two surfaces */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
              <Card className="p-8 border-border">
                <div className="w-12 h-12 mb-4 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <Store className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold mb-3">The Storefront</h2>
                <p className="text-muted-foreground">
                  The customer-facing commerce experience: discovery, product detail, cart,
                  checkout, delivery or pickup selection, custom image requests and order
                  tracking — fast on low-bandwidth mobile networks.
                </p>
              </Card>
              <Card className="p-8 border-border">
                <div className="w-12 h-12 mb-4 bg-gradient-accent rounded-xl flex items-center justify-center">
                  <LayoutDashboard className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold mb-3">The Admin Dashboard</h2>
                <p className="text-muted-foreground">
                  The companion operations console: catalogue and stock, orders and dispatch,
                  pickup points, custom requests, customers, staff roles and live reporting —
                  one governed source of truth.
                </p>
              </Card>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimateOnScroll>
              <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  End-to-End Commerce Capabilities
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Everything a retail operation needs to sell, fulfil and grow — built in, not
                  bolted on.
                </p>
              </div>
            </AnimateOnScroll>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((c, i) => {
                const Icon = c.icon;
                return (
                  <AnimateOnScroll key={c.title} delay={i * 60}>
                    <Card className="p-6 h-full border-border hover:border-primary/30 hover:shadow-medium transition-all duration-300 group">
                      <div className="w-12 h-12 mb-4 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold mb-2">{c.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {c.description}
                      </p>
                    </Card>
                  </AnimateOnScroll>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Live deployments */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimateOnScroll>
              <div className="text-center mb-14">
                <Badge className="mb-4">Built & Proven</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Live Client Deployments
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  The same application, configured for two different retail businesses now
                  trading online every day.
                </p>
              </div>
            </AnimateOnScroll>
            <div className="grid md:grid-cols-2 gap-8">
              {deployments.map((d, i) => (
                <AnimateOnScroll key={d.name} delay={i * 100}>
                  <Card className="overflow-hidden border-border hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
                    <a
                      href={d.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative h-60 overflow-hidden group"
                    >
                      <ResponsiveImage
                        picture={d.image}
                        alt={`${d.name} e-commerce storefront built by Gotechpluz`}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                    </a>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <h3 className="text-xl font-bold">{d.name}</h3>
                        <a
                          href={d.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                        >
                          Visit <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{d.tagline}</p>
                      <ul className="space-y-2 mt-auto">
                        {d.points.map((p) => (
                          <li key={p} className="flex gap-2 text-sm text-muted-foreground">
                            <Bell className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investor-grade rigour + stack */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Technical Depth, Commercial Polish, Operational Rigour
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Built and proven through live client deployments, the storefront and its
                companion administrative dashboard demonstrate exactly what investors look for
                in a scalable digital product: a real revenue engine, secure architecture,
                measurable operations and a platform that can be replicated for the next
                retailer in weeks, not quarters.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {stack.map((t) => (
                  <Badge key={t} variant="secondary">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Book a Demo of the Platform
            </h2>
            <p className="text-lg opacity-90 mb-8">
              See the storefront and admin dashboard in action, then let's configure it for your
              business. Chat with us on WhatsApp at +233 24 723 3996.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                onClick={() =>
                  openWhatsApp({ source: "ecommerce_footer_demo", message: demoMessage })
                }
              >
                <CalendarCheck className="mr-2 h-5 w-5" />
                Book a Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/60 bg-white/10 hover:bg-white/20"
                onClick={() =>
                  openWhatsApp({
                    source: "ecommerce_footer_whatsapp",
                    message:
                      "Hello Gotechpluz! I'd like to talk about building an online store with your e-commerce platform.",
                  })
                }
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EcommercePlatformPage;
