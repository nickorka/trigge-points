"use client";

import { LOCALES, useI18n } from "@/i18n/locale";
import { UI_STRINGS } from "@/i18n/ui";
import { cn } from "@/lib/utils";

/**
 * EN / РУС segmented switcher. Used in the sticky site header and inside
 * the point-protocol modal header so it always sits in the same
 * top-right position in every view of the app.
 */
export function LanguageToggle({ className }: { className?: string }) {
  const { locale, setLocale } = useI18n();
  const t = UI_STRINGS[locale];

  return (
    <div
      className={cn(
        "flex shrink-0 items-center rounded-full border border-slate-300 bg-white p-0.5 shadow-sm",
        className
      )}
      role="group"
      aria-label={t.langAria}
    >
      {LOCALES.map((l) => (
        <button
          key={l.code}
          onClick={() => setLocale(l.code)}
          aria-pressed={locale === l.code}
          title={l.label}
          className={cn(
            "rounded-full px-2.5 py-1 text-[11px] font-bold tracking-wide transition-colors",
            locale === l.code
              ? "bg-slate-900 text-white"
              : "text-slate-500 hover:text-slate-900"
          )}
        >
          {l.short}
        </button>
      ))}
    </div>
  );
}
