import { useState } from "react";
import { Star, X, ExternalLink } from "lucide-react";

const REVIEW_URL = "https://g.page/r/CZy0fDsoqhdwEAE/review";

const FloatingReviewWidget = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-36 right-3 sm:bottom-40 sm:right-6 md:bottom-40 md:right-8 z-40 flex flex-col items-end gap-3">
      {open && (
        <div className="w-[16rem] rounded-2xl border border-border/60 bg-background/95 backdrop-blur-lg p-4 shadow-large animate-in fade-in slide-in-from-bottom-2">
          <div className="flex items-start justify-between gap-2">
            <p className="text-sm font-semibold text-foreground">
              Enjoyed working with Gotechpluz?
            </p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close review widget"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="mt-2 flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-accent text-accent" />
            ))}
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            Share a quick Google review — it takes less than a minute and helps other
            businesses find us.
          </p>
          <a
            href={REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-1.5 rounded-xl bg-gradient-primary px-3 py-2 text-sm font-medium text-primary-foreground shadow-soft hover:opacity-90 transition-opacity"
          >
            Write a review
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Leave a review"
        aria-expanded={open}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-accent text-accent-foreground shadow-medium hover:shadow-large hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
      >
        <Star className="h-5 w-5 fill-current" />
      </button>
    </div>
  );
};

export default FloatingReviewWidget;
