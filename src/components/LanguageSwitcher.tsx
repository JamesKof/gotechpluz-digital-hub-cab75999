import { useEffect, useState } from "react";
import { Globe, Check } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  LANGUAGES,
  LANGUAGE_GROUPS,
  getCurrentLanguage,
  getLanguageByCode,
  setLanguage,
} from "@/lib/translate";

interface LanguageSwitcherProps {
  /** Full-width stacked trigger for the mobile menu. */
  variant?: "compact" | "full";
  onSelect?: () => void;
}

const LanguageSwitcher = ({ variant = "compact", onSelect }: LanguageSwitcherProps) => {
  const [current, setCurrent] = useState(LANGUAGES[0].code);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setCurrent(getCurrentLanguage());
  }, []);

  const active = getLanguageByCode(current);

  const handleSelect = (code: string) => {
    setOpen(false);
    onSelect?.();
    if (code === current) return;
    setLanguage(code);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
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
          <span className="ml-auto text-xs font-semibold tracking-wide text-primary">
            {active.short}
          </span>
        </button>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        className="notranslate w-64 rounded-xl border-border/60 bg-background/95 p-0 backdrop-blur-xl"
      >
        <Command>
          <CommandInput placeholder="Search language..." />
          <CommandList className="max-h-72">
            <CommandEmpty>No language found.</CommandEmpty>
            {LANGUAGE_GROUPS.map((group) => (
              <CommandGroup key={group} heading={group}>
                {LANGUAGES.filter((l) => l.group === group).map((lang) => (
                  <CommandItem
                    key={lang.code}
                    value={`${lang.label} ${lang.nativeLabel} ${lang.code}`}
                    onSelect={() => handleSelect(lang.code)}
                    className="cursor-pointer gap-2 rounded-lg text-sm"
                  >
                    <span className="w-8 shrink-0 text-xs font-semibold tracking-wide text-primary">
                      {lang.short}
                    </span>
                    <span>{lang.nativeLabel}</span>
                    <span className="text-xs text-muted-foreground">{lang.label}</span>
                    {lang.code === current && (
                      <Check className="ml-auto h-3.5 w-3.5 shrink-0 text-primary" />
                    )}
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default LanguageSwitcher;
