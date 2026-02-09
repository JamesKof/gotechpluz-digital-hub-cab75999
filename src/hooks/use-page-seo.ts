import { useEffect } from "react";

interface PageSEOProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
}

const BASE_URL = "https://www.gotechpluz.com";

/**
 * Sets per-page SEO meta tags dynamically for SPA pages.
 * This ensures Google sees unique metadata for each route.
 */
export const usePageSEO = ({
  title,
  description,
  canonical,
  keywords,
  ogTitle,
  ogDescription,
  ogType = "website",
}: PageSEOProps) => {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Helper to set or create a meta tag
    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // Standard meta
    setMeta("name", "description", description);
    if (keywords) setMeta("name", "keywords", keywords);

    // Open Graph
    setMeta("property", "og:title", ogTitle || title);
    setMeta("property", "og:description", ogDescription || description);
    setMeta("property", "og:type", ogType);
    if (canonical) {
      setMeta("property", "og:url", canonical);
    }

    // Twitter
    setMeta("name", "twitter:title", ogTitle || title);
    setMeta("name", "twitter:description", ogDescription || description);

    // Canonical link
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonical);
    }

    // Cleanup: reset to defaults when unmounting
    return () => {
      document.title = "Web Development Company in Ghana | Digital Marketing Agency Accra - Gotechpluz";
      const defaultDesc = "Gotechpluz is Ghana's leading digital marketing agency and web development company in Accra.";
      setMeta("name", "description", defaultDesc);
      
      const link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (link) link.setAttribute("href", BASE_URL);
    };
  }, [title, description, canonical, keywords, ogTitle, ogDescription, ogType]);
};

export { BASE_URL };
