import { useEffect, useState } from "react";
import { Globe, Check } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  LANGUAGES,
  getCurrentLanguage,
  getLanguageByCode,
  setLanguage,
} from "@/lib/translate";

interface LanguageSwitcherProps {
  /** Full-width stacked list for the mobile menu. */
  variant?: "compact" | "full";
  onSelect?: () => void;
}

const LanguageSwitcher = ({ variant = "compact", onSelect }: LanguageSwitcherProps) => {
  const [current, setCurrent] = useState(LANGUAGES[0].code);

  useEffect(() => {
    setCurrent(getCurrentLanguage());
  }, []);

  const active = getLanguageByCode(current);

  const handleSelect = (code: string) => {
    onSelect?.();
    if (code === current) return;
    setLanguage(code);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          aria-label="Change language"
          className={`notranslate flex items-center gap-2 rounded-xl text-sm font-medium text-foreground/70 transition-all duration-300 hover:bg-primary/5 hover:text-primary ${
            variant === "full" ? "w-full px-4 py-3" : "px-3 py-2"
          }`}
        >
          <Globe className="h-4 w-4 shrink-0" />
          <span className={variant === "full" ? "" : "hidden xl:inline"}>
            {active.nativeLabel}
          </span>
          <span className="ml-auto text-xs font-semibold tracking-wide text-primary">{active.short}</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="notranslate w-52 rounded-xl border-border/60 bg-background/95 backdrop-blur-xl"
      >
        {LANGUAGES.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleSelect(lang.code)}
            className="cursor-pointer gap-2 rounded-lg text-sm"
          >
            <span className="w-7 text-xs font-semibold tracking-wide text-primary">{lang.short}</span>
            <span>{lang.nativeLabel}</span>
            <span className="text-muted-foreground text-xs">{lang.label}</span>
            {lang.code === current && <Check className="ml-auto h-3.5 w-3.5 text-primary" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
