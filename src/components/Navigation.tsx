import { useState, useEffect } from "react";
import { Menu, X, ClipboardList, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/gotechpluz-logo.png";
import { useWhatsApp } from "@/hooks/use-whatsapp";

const QUESTIONNAIRE_URL = "https://forms.gle/YVXpRizgtv7GLcYs5";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { openWhatsApp } = useWhatsApp();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const openWhatsAppFromNav = () => {
    openWhatsApp({
      source: "nav_get_started",
      message: "Hi Gotechpluz, I'd like to discuss a project.",
      toastTitle: "Opening WhatsApp chat",
    });
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/process", label: "How We Work" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/blog", label: "Blog" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "py-2 md:py-3"
          : "py-3 md:py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div
          className={`relative rounded-2xl transition-all duration-500 ease-out ${
            scrolled
              ? "bg-background/70 backdrop-blur-xl shadow-[0_8px_32px_hsl(142_70%_45%/0.08)] border border-border/50"
              : "bg-background/50 backdrop-blur-lg border border-transparent"
          }`}
        >
          {/* Subtle gradient border glow on scroll */}
          {scrolled && (
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 via-transparent to-accent/10 -z-10 blur-sm" />
          )}

          <div className="flex items-center justify-between px-5 md:px-6 h-14 md:h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <img
                src={logo}
                alt="Gotechpluz"
                className="h-9 md:h-10 transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`relative px-3 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${
                    isActive(link.href)
                      ? "text-primary bg-primary/10"
                      : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-primary rounded-full" />
                  )}
                </Link>
              ))}

              {/* Separator */}
              <div className="w-px h-6 bg-border mx-2" />

              <a
                href={QUESTIONNAIRE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-foreground/70 hover:text-accent hover:bg-accent/5 rounded-xl transition-all duration-300"
              >
                <ClipboardList className="h-3.5 w-3.5" />
                Questionnaire
              </a>

              <Button
                type="button"
                size="sm"
                className="ml-1 bg-gradient-primary hover:opacity-90 transition-all duration-300 rounded-xl shadow-[0_4px_12px_hsl(142_70%_45%/0.25)] hover:shadow-[0_6px_20px_hsl(142_70%_45%/0.35)] hover:-translate-y-0.5"
                onClick={openWhatsAppFromNav}
              >
                Get Started
                <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden relative p-2.5 rounded-xl transition-all duration-300 ${
                isOpen
                  ? "bg-primary/10 text-primary"
                  : "text-foreground/70 hover:text-primary hover:bg-primary/5"
              }`}
              aria-label="Toggle menu"
            >
              <div className="relative w-5 h-5">
                <Menu
                  size={20}
                  className={`absolute inset-0 transition-all duration-300 ${
                    isOpen ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"
                  }`}
                />
                <X
                  size={20}
                  className={`absolute inset-0 transition-all duration-300 ${
                    isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"
                  }`}
                />
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-400 ease-out ${
              isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-5 pb-5 pt-2">
              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-4" />

              <div className="flex flex-col gap-1">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                      isActive(link.href)
                        ? "text-primary bg-primary/10"
                        : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {link.label}
                  </Link>
                ))}

                <a
                  href={QUESTIONNAIRE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-foreground/70 hover:text-accent hover:bg-accent/5 transition-all duration-300"
                >
                  <ClipboardList className="h-4 w-4" />
                  Website Questionnaire
                  <ExternalLink className="h-3 w-3 ml-auto opacity-50" />
                </a>

                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-2" />

                <Button
                  type="button"
                  className="bg-gradient-primary hover:opacity-90 transition-all duration-300 w-full rounded-xl shadow-[0_4px_12px_hsl(142_70%_45%/0.25)]"
                  onClick={() => {
                    setIsOpen(false);
                    openWhatsAppFromNav();
                  }}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
