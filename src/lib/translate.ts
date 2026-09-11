/**
 * Site-wide automatic translation powered by the Google Website Translator widget.
 * A hidden widget element does the heavy lifting; we drive it with the `googtrans`
 * cookie so the choice survives navigation and reloads.
 */

export interface LanguageOption {
  code: string;
  label: string;
  nativeLabel: string;
  short: string;
  rtl?: boolean;
}

export const LANGUAGES: LanguageOption[] = [
  { code: "en", label: "English", nativeLabel: "English", short: "EN" },
  { code: "fr", label: "French", nativeLabel: "Français", short: "FR" },
  { code: "es", label: "Spanish", nativeLabel: "Español", short: "ES" },
  { code: "pt", label: "Portuguese", nativeLabel: "Português", short: "PT" },
  { code: "de", label: "German", nativeLabel: "Deutsch", short: "DE" },
  { code: "zh-CN", label: "Chinese", nativeLabel: "中文", short: "ZH" },
  { code: "ar", label: "Arabic", nativeLabel: "العربية", short: "AR", rtl: true },
];

export const DEFAULT_LANGUAGE = "en";
const COOKIE_NAME = "googtrans";
const STORAGE_KEY = "gtp_lang";
const AUTO_DETECT_KEY = "gtp_lang_autodetected";

/** Country (ISO-2) -> preferred site language. Anything unlisted stays English. */
const COUNTRY_LANGUAGE_MAP: Record<string, string> = {
  // French
  FR: "fr", BE: "fr", LU: "fr", MC: "fr", TG: "fr", BJ: "fr", CI: "fr", SN: "fr",
  BF: "fr", ML: "fr", NE: "fr", GN: "fr", CM: "fr", GA: "fr", CD: "fr", CG: "fr",
  TD: "fr", MG: "fr", RW: "fr", BI: "fr", HT: "fr",
  // Spanish
  ES: "es", MX: "es", AR: "es", CO: "es", CL: "es", PE: "es", VE: "es", EC: "es",
  GT: "es", CU: "es", BO: "es", DO: "es", HN: "es", PY: "es", SV: "es", NI: "es",
  CR: "es", PA: "es", UY: "es", GQ: "es",
  // Portuguese
  PT: "pt", BR: "pt", AO: "pt", MZ: "pt", CV: "pt", GW: "pt", ST: "pt", TL: "pt",
  // German
  DE: "de", AT: "de", CH: "de", LI: "de",
  // Chinese
  CN: "zh-CN", TW: "zh-CN", HK: "zh-CN", MO: "zh-CN", SG: "zh-CN",
  // Arabic
  SA: "ar", AE: "ar", EG: "ar", MA: "ar", DZ: "ar", TN: "ar", LY: "ar", JO: "ar",
  QA: "ar", KW: "ar", BH: "ar", OM: "ar", IQ: "ar", LB: "ar", YE: "ar", SD: "ar",
  SY: "ar", PS: "ar", MR: "ar",
};

export const getLanguageByCode = (code: string) =>
  LANGUAGES.find((l) => l.code === code) ?? LANGUAGES[0];

const readCookie = (name: string) => {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
};

const writeCookie = (value: string | null) => {
  if (typeof document === "undefined") return;
  const host = window.location.hostname;
  const domains = [undefined, host, `.${host}`];
  const bareDomain = host.split(".").slice(-2).join(".");
  if (bareDomain && bareDomain !== host) domains.push(`.${bareDomain}`);

  domains.forEach((domain) => {
    const suffix = domain ? `; domain=${domain}` : "";
    if (value === null) {
      document.cookie = `${COOKIE_NAME}=; path=/${suffix}; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    } else {
      document.cookie = `${COOKIE_NAME}=${value}; path=/${suffix}; max-age=31536000`;
    }
  });
};

/** Language currently applied to the page. */
export const getCurrentLanguage = (): string => {
  const cookie = readCookie(COOKIE_NAME);
  if (cookie) {
    const parts = cookie.split("/");
    const target = parts[2];
    if (target && LANGUAGES.some((l) => l.code === target)) return target;
  }
  const stored = typeof localStorage !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
  if (stored && LANGUAGES.some((l) => l.code === stored)) return stored;
  return DEFAULT_LANGUAGE;
};

export const applyTextDirection = (code: string) => {
  if (typeof document === "undefined") return;
  const lang = getLanguageByCode(code);
  document.documentElement.setAttribute("dir", lang.rtl ? "rtl" : "ltr");
  document.documentElement.setAttribute("lang", code);
};

/** Persist the choice and reload so the whole page is re-rendered in that language. */
export const setLanguage = (code: string) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, code);
  localStorage.setItem(AUTO_DETECT_KEY, "1");

  if (code === DEFAULT_LANGUAGE) {
    writeCookie(null);
  } else {
    writeCookie(`/${DEFAULT_LANGUAGE}/${code}`);
  }
  applyTextDirection(code);
  window.location.reload();
};

/** Injects the Google translate widget once. */
export const loadTranslateWidget = () => {
  if (typeof document === "undefined") return;
  if (document.getElementById("google-translate-script")) return;

  (window as any).googleTranslateElementInit = () => {
    const T = (window as any).google?.translate?.TranslateElement;
    if (!T) return;
    new T(
      {
        pageLanguage: DEFAULT_LANGUAGE,
        includedLanguages: LANGUAGES.map((l) => l.code).join(","),
        autoDisplay: false,
      },
      "google_translate_element",
    );
  };

  const script = document.createElement("script");
  script.id = "google-translate-script";
  script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  script.async = true;
  document.body.appendChild(script);
};

/**
 * First visit only: look up the visitor's country and switch language to match.
 * Any manual choice (or a previous auto-detect) disables this permanently.
 */
export const autoDetectLanguage = async () => {
  if (typeof window === "undefined") return;
  if (localStorage.getItem(AUTO_DETECT_KEY)) return;

  // Fast path: the browser's own preference.
  const browserLang = (navigator.languages?.[0] || navigator.language || "").toLowerCase();
  const browserMatch = LANGUAGES.find(
    (l) => l.code.toLowerCase() === browserLang || browserLang.startsWith(l.code.split("-")[0]),
  );

  let detected = browserMatch?.code;

  if (!detected) {
    try {
      const res = await fetch("https://ipapi.co/json/");
      if (res.ok) {
        const data = await res.json();
        const country = String(data?.country_code || "").toUpperCase();
        detected = COUNTRY_LANGUAGE_MAP[country];
      }
    } catch {
      // Geo lookup unavailable — stay in English.
    }
  }

  localStorage.setItem(AUTO_DETECT_KEY, "1");

  if (detected && detected !== DEFAULT_LANGUAGE) {
    setLanguage(detected);
  }
};
