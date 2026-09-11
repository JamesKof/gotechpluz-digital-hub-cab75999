import { useEffect } from "react";
import {
  applyTextDirection,
  autoDetectLanguage,
  getCurrentLanguage,
  loadTranslateWidget,
} from "@/lib/translate";

/**
 * Mounts the hidden Google translate widget, restores the saved language and
 * (on a first visit) picks a language based on the visitor's location.
 */
const TranslateProvider = () => {
  useEffect(() => {
    applyTextDirection(getCurrentLanguage());
    loadTranslateWidget();
    void autoDetectLanguage();
  }, []);

  return <div id="google_translate_element" className="sr-only" aria-hidden="true" />;
};

export default TranslateProvider;
