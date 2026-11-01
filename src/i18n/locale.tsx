"use client";

import { createContext, useContext, useEffect, useSyncExternalStore } from "react";

export type Locale = "en" | "ru";

export const LOCALES: { code: Locale; label: string; short: string }[] = [
  { code: "en", label: "English", short: "EN" },
  { code: "ru", label: "Русский", short: "РУС" },
];

const STORAGE_KEY = "fa-locale";

/* -------- localStorage-backed external store (no effect setState) -------- */

const listeners = new Set<() => void>();

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
  };
}

function getSnapshot(): Locale {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "ru" ? "ru" : "en";
  } catch {
    return "en";
  }
}

function getServerSnapshot(): Locale {
  return "en";
}

function writeLocale(l: Locale) {
  try {
    window.localStorage.setItem(STORAGE_KEY, l);
  } catch {
    /* storage unavailable — in-memory only for this page */
  }
  document.documentElement.lang = l;
  listeners.forEach((fn) => fn());
}

/* Sync <html lang> on first load (external DOM system — no state updates). */
function useHtmlLangSync() {
  useEffect(() => {
    document.documentElement.lang = getSnapshot();
  }, []);
}

interface I18nContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
}

const I18nContext = createContext<I18nContextValue>({
  locale: "en",
  setLocale: writeLocale,
});

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  useHtmlLangSync();
  return (
    <I18nContext.Provider value={{ locale, setLocale: writeLocale }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
