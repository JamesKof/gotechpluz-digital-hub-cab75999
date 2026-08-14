import { useEffect } from "react";

interface PageSEOProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
  /** Absolute or root-relative image path used for OG/Twitter previews. */
  ogImage?: string;
  twitterCard?: "summary" | "summary_large_image";
}

const BASE_URL = "https://www.gotechpluz.com";

const toAbsolute = (url?: string) => {
  if (!url) return undefined;
  if (/^https?:\/\//i.test(url)) return url;
  return `${BASE_URL}${url.startsWith("/") ? "" : "/"}${url}`;
};

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
  ogImage,
  twitterCard = "summary_large_image",
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

    const absoluteCanonical = toAbsolute(canonical);
    const absoluteImage = toAbsolute(ogImage);

    // Standard meta
    setMeta("name", "description", description);
    if (keywords) setMeta("name", "keywords", keywords);

    // Open Graph
    setMeta("property", "og:title", ogTitle || title);
    setMeta("property", "og:description", ogDescription || description);
    setMeta("property", "og:type", ogType);
    setMeta("property", "og:site_name", "Gotechpluz");
    if (absoluteCanonical) {
      setMeta("property", "og:url", absoluteCanonical);
    }
    if (absoluteImage) {
      setMeta("property", "og:image", absoluteImage);
      setMeta("property", "og:image:alt", ogTitle || title);
    }

    // Twitter
    setMeta("name", "twitter:card", twitterCard);
    setMeta("name", "twitter:title", ogTitle || title);
    setMeta("name", "twitter:description", ogDescription || description);
    if (absoluteImage) {
      setMeta("name", "twitter:image", absoluteImage);
      setMeta("name", "twitter:image:alt", ogTitle || title);
    }

    // Canonical link
    if (absoluteCanonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", absoluteCanonical);
    }

    // Cleanup: reset to defaults when unmounting
    return () => {
      document.title = "Web Development Company in Ghana | Digital Marketing Agency Accra - Gotechpluz";
      const defaultDesc = "Gotechpluz is Ghana's leading digital marketing agency and web development company in Accra.";
      setMeta("name", "description", defaultDesc);

      const link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (link) link.setAttribute("href", BASE_URL);
    };
  }, [title, description, canonical, keywords, ogTitle, ogDescription, ogType, ogImage, twitterCard]);
};

export { BASE_URL };
