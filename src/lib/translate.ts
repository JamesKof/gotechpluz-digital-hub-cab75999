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
  group: "Popular" | "African" | "World";
}

export const LANGUAGES: LanguageOption[] = [
  { code: "en", label: "English", nativeLabel: "English", short: "EN", group: "Popular" },
  { code: "fr", label: "French", nativeLabel: "Français", short: "FR", group: "Popular" },
  { code: "es", label: "Spanish", nativeLabel: "Español", short: "ES", group: "Popular" },
  { code: "pt", label: "Portuguese", nativeLabel: "Português", short: "PT", group: "Popular" },
  { code: "ar", label: "Arabic", nativeLabel: "العربية", short: "AR", rtl: true, group: "Popular" },
  { code: "zh-CN", label: "Chinese (Simplified)", nativeLabel: "简体中文", short: "ZH", group: "Popular" },

  // African languages
  { code: "ee", label: "Ewe", nativeLabel: "Eʋegbe", short: "EE", group: "African" },
  { code: "ak", label: "Twi (Akan)", nativeLabel: "Twi", short: "AK", group: "African" },
  { code: "rw", label: "Kinyarwanda", nativeLabel: "Ikinyarwanda", short: "RW", group: "African" },
  { code: "sw", label: "Swahili", nativeLabel: "Kiswahili", short: "SW", group: "African" },
  { code: "ha", label: "Hausa", nativeLabel: "Hausa", short: "HA", group: "African" },
  { code: "yo", label: "Yoruba", nativeLabel: "Yorùbá", short: "YO", group: "African" },
  { code: "ig", label: "Igbo", nativeLabel: "Igbo", short: "IG", group: "African" },
  { code: "am", label: "Amharic", nativeLabel: "አማርኛ", short: "AM", group: "African" },
  { code: "so", label: "Somali", nativeLabel: "Soomaali", short: "SO", group: "African" },
  { code: "zu", label: "Zulu", nativeLabel: "isiZulu", short: "ZU", group: "African" },
  { code: "xh", label: "Xhosa", nativeLabel: "isiXhosa", short: "XH", group: "African" },
  { code: "af", label: "Afrikaans", nativeLabel: "Afrikaans", short: "AF", group: "African" },
  { code: "sn", label: "Shona", nativeLabel: "chiShona", short: "SN", group: "African" },
  { code: "ny", label: "Chichewa", nativeLabel: "Chichewa", short: "NY", group: "African" },
  { code: "lg", label: "Luganda", nativeLabel: "Luganda", short: "LG", group: "African" },
  { code: "wo", label: "Wolof", nativeLabel: "Wolof", short: "WO", group: "African" },
  { code: "mg", label: "Malagasy", nativeLabel: "Malagasy", short: "MG", group: "African" },

  // Other world languages
  { code: "de", label: "German", nativeLabel: "Deutsch", short: "DE", group: "World" },
  { code: "it", label: "Italian", nativeLabel: "Italiano", short: "IT", group: "World" },
  { code: "nl", label: "Dutch", nativeLabel: "Nederlands", short: "NL", group: "World" },
  { code: "ru", label: "Russian", nativeLabel: "Русский", short: "RU", group: "World" },
  { code: "tr", label: "Turkish", nativeLabel: "Türkçe", short: "TR", group: "World" },
  { code: "pl", label: "Polish", nativeLabel: "Polski", short: "PL", group: "World" },
  { code: "sv", label: "Swedish", nativeLabel: "Svenska", short: "SV", group: "World" },
  { code: "hi", label: "Hindi", nativeLabel: "हिन्दी", short: "HI", group: "World" },
  { code: "bn", label: "Bengali", nativeLabel: "বাংলা", short: "BN", group: "World" },
  { code: "ur", label: "Urdu", nativeLabel: "اردو", short: "UR", rtl: true, group: "World" },
  { code: "fa", label: "Persian", nativeLabel: "فارسی", short: "FA", rtl: true, group: "World" },
  { code: "he", label: "Hebrew", nativeLabel: "עברית", short: "HE", rtl: true, group: "World" },
  { code: "ja", label: "Japanese", nativeLabel: "日本語", short: "JA", group: "World" },
  { code: "ko", label: "Korean", nativeLabel: "한국어", short: "KO", group: "World" },
  { code: "id", label: "Indonesian", nativeLabel: "Bahasa Indonesia", short: "ID", group: "World" },
  { code: "ms", label: "Malay", nativeLabel: "Bahasa Melayu", short: "MS", group: "World" },
  { code: "vi", label: "Vietnamese", nativeLabel: "Tiếng Việt", short: "VI", group: "World" },
  { code: "th", label: "Thai", nativeLabel: "ไทย", short: "TH", group: "World" },
];

export const LANGUAGE_GROUPS: Array<LanguageOption["group"]> = ["Popular", "African", "World"];

export const DEFAULT_LANGUAGE = "en";
const COOKIE_NAME = "googtrans";
const STORAGE_KEY = "gtp_lang";
const AUTO_DETECT_KEY = "gtp_lang_autodetected";

/** Country (ISO-2) -> preferred site language. Anything unlisted stays English. */
const COUNTRY_LANGUAGE_MAP: Record<string, string> = {
  // French
  FR: "fr", BE: "fr", LU: "fr", MC: "fr", TG: "fr", BJ: "fr", CI: "fr", SN: "fr",
  BF: "fr", ML: "fr", NE: "fr", GN: "fr", CM: "fr", GA: "fr", CD: "fr", CG: "fr",
  TD: "fr", HT: "fr",
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
  // African languages
  RW: "rw", BI: "rw",
  TZ: "sw", KE: "sw", UG: "sw",
  ET: "am", SO: "so", ZA: "af", ZW: "sn", MW: "ny", MG: "mg",
  // Other world languages
  IT: "it", NL: "nl", RU: "ru", BY: "ru", KZ: "ru", TR: "tr", PL: "pl",
  SE: "sv", IN: "hi", BD: "bn", PK: "ur", IR: "fa", IL: "he",
  JP: "ja", KR: "ko", ID: "id", MY: "ms", VN: "vi", TH: "th",
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
