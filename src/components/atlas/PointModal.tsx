"use client";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { BodyFigure } from "./BodyFigure";
import { LanguageToggle } from "@/components/i18n/LanguageToggle";
import { useI18n } from "@/i18n/locale";
import { UI_STRINGS, fill } from "@/i18n/ui";
import { LINE_MAP_BY_LOCALE, POINT_MAP_BY_LOCALE } from "@/data/localized";
import { tcmMeridianName } from "@/data/tcm";
import { regionLabels } from "@/data/regionSearch";
import type { TriggerPoint } from "@/data/types";
import { cn } from "@/lib/utils";

/* ---------------- trigger button that owns the dialog ---------------- */

export function PointModalTrigger({
  point,
  label,
}: {
  point: TriggerPoint;
  label?: string;
}) {
  const { locale } = useI18n();
  const t = UI_STRINGS[locale];
  const [open, setOpen] = useState(false);
  const [currentId, setCurrentId] = useState<string>(point.id);

  const current = POINT_MAP_BY_LOCALE[locale][currentId] ?? point;

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-800 sm:w-auto"
          onClick={() => setCurrentId(point.id)}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" /></svg>
          {label ?? t.atlas.protocolCta}
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-slate-950/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in" />
        <Dialog.Content className="fixed inset-x-0 bottom-0 top-auto z-50 max-h-[92vh] overflow-y-auto rounded-t-2xl bg-white p-0 shadow-2xl data-[state=open]:animate-in sm:inset-0 sm:m-auto sm:h-fit sm:max-h-[88vh] sm:max-w-3xl sm:rounded-2xl">
          <DialogContentBody pointId={current.id} onNavigate={setCurrentId} onClose={() => setOpen(false)} />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

/* ---------------- full protocol body ---------------- */

const SECTION_STYLES = "rounded-xl border border-slate-200 bg-white p-4";

function SectionHeading({
  n,
  title,
  sub,
}: {
  n: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="mb-2.5 flex items-center gap-2.5">
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-700 text-[11px] font-bold text-white">
        {n}
      </span>
      <div>
        <h4 className="text-sm font-bold text-slate-900">{title}</h4>
        {sub && <p className="text-xs text-slate-500">{sub}</p>}
      </div>
    </div>
  );
}

export function DialogContentBody({
  pointId,
  onNavigate,
  onClose,
}: {
  pointId: string;
  onNavigate: (id: string) => void;
  onClose: () => void;
}) {
  const { locale } = useI18n();
  const t = UI_STRINGS[locale];
  const point = POINT_MAP_BY_LOCALE[locale][pointId];
  if (!point) return null;
  const line = LINE_MAP_BY_LOCALE[locale][point.lineId];
  const viewWord = point.view === "front" ? t.atlas.viewFront : t.atlas.viewBack;

  // Contextual labels: acupoints get Chinese-medicine wording.
  const isTcm = point.lineId === "tcm";
  const L = {
    whereItHurts: isTcm ? t.modalTcm.relief : t.modal.whereItHurts,
    whatYouNotice: isTcm ? t.modalTcm.indications : t.modal.whatYouNotice,
    locate: isTcm ? t.modalTcm.locate : t.modal.locate,
    locateSub: isTcm ? t.modalTcm.locateSub : t.modal.locateSub,
    release: isTcm ? t.modalTcm.release : t.modal.release,
    releaseSub: isTcm ? t.modalTcm.releaseSub : t.modal.releaseSub,
    activationTitle: isTcm ? t.modalTcm.activationTitle : t.modal.activationTitle,
    manual: isTcm ? t.modalTcm.manual : t.modal.manual,
    manualSub: isTcm ? t.modalTcm.manualSub : t.modal.manualSub,
    stretch: isTcm ? t.modalTcm.stretch : t.modal.stretch,
    stretchSub: isTcm ? t.modalTcm.stretchSub : t.modal.stretchSub,
    causes: isTcm ? t.modalTcm.causes : t.modal.causes,
    causesSub: isTcm ? t.modalTcm.causesSub : t.modal.causesSub,
    related: isTcm ? t.modalTcm.related : t.modal.related,
  };
  const badgeText =
    isTcm && point.tcm
      ? `${point.tcm.hanzi} · ${tcmMeridianName(point.tcm.meridian, locale)}`
      : `${line.abbr} · ${line.name}`;

  return (
    <div>
      {/* header */}
      <div
        className="sticky top-0 z-10 border-b bg-white/95 px-5 py-4 backdrop-blur"
        style={{ borderColor: `${line.color}30` }}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <span
              className="inline-block rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide"
              style={{ backgroundColor: `${line.color}18`, color: line.color }}
            >
              {badgeText}
            </span>
            <Dialog.Title className="mt-1.5 font-serif text-2xl font-bold leading-tight text-slate-900">
              {point.name}
            </Dialog.Title>
            <Dialog.Description className="text-sm italic text-teal-700">
              {point.commonName}
            </Dialog.Description>
          </div>
          <div className="flex shrink-0 items-center gap-1.5">
            <LanguageToggle />
            <Dialog.Close asChild>
              <button
                onClick={onClose}
                className="rounded-full p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
                aria-label={t.modal.closeAria}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12" /></svg>
              </button>
            </Dialog.Close>
          </div>
        </div>
      </div>

      <div className="space-y-4 px-5 py-5">
        {/* location + pain map with mini figure */}
        <div className="grid gap-4 sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
          <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-2">
            <BodyFigure
              view={point.view}
              markers={[point]}
              selectedId={point.id}
              activeRegions={point.referral}
              compact
              className="mx-auto h-[300px] w-auto max-w-full"
            />
            <p className="pb-1 text-center text-[11px] text-slate-500">
              <span className="mr-1 inline-block h-2 w-2 rounded-full bg-red-500/70 align-middle" />
              {fill(t.modal.figureCaption, { view: viewWord })}
            </p>
          </div>
          <div className="space-y-3">
            <div>
              <h4 className="text-sm font-bold text-slate-900">{L.whereItHurts}</h4>
              <p className="mt-1 text-sm leading-relaxed text-slate-700">{point.painSummary}</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {regionLabels(point.referral, locale).map((label) => (
                  <span
                    key={label}
                    className="rounded-full border border-red-200 bg-red-50 px-2 py-0.5 text-[11px] font-semibold text-red-700"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">{L.whatYouNotice}</h4>
              <p className="mt-1 text-sm leading-relaxed text-slate-700">{point.symptoms}</p>
            </div>
            {isTcm && point.tcm && (
              <div className="rounded-xl border border-sky-200 bg-sky-50/60 p-3">
                <p className="text-xs font-bold uppercase tracking-wide text-sky-800">
                  {t.modalTcm.functionsTitle}
                </p>
                <p className="mt-1 font-serif text-sm font-bold text-slate-900">
                  {point.tcm.pinyin} {point.tcm.hanzi}
                </p>
                <p className="text-xs text-slate-600">
                  {tcmMeridianName(point.tcm.meridian, locale)}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-700">
                  {point.tcm.functions}
                </p>
              </div>
            )}
            {isTcm && point.tcm?.cautions && (
              <div className="rounded-xl border border-amber-300 bg-amber-50 p-3">
                <p className="text-xs font-bold uppercase tracking-wide text-amber-800">
                  {t.modalTcm.cautionsTitle}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-amber-900">
                  {point.tcm.cautions}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* find the point */}
        <div className={SECTION_STYLES}>
          <SectionHeading n="1" title={L.locate} sub={L.locateSub} />
          <p className="text-sm leading-relaxed text-slate-700">{point.howToFind}</p>
        </div>

        {/* self release */}
        <div className={cn(SECTION_STYLES, "border-teal-200 bg-teal-50/50")}>
          <SectionHeading n="2" title={L.release} sub={L.releaseSub} />
          <div className="mb-3 flex flex-wrap gap-2">
            <Chip label={t.modal.chipTool} value={point.release.tool} />
            <Chip label={t.modal.chipTime} value={point.release.duration} />
            <Chip label={t.modal.chipPressure} value={point.release.pressure} />
          </div>
          <ol className="space-y-1.5">
            {point.release.steps.map((s, i) => (
              <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-slate-700">
                <span className="mt-0.5 flex h-4.5 w-4.5 h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-teal-700 text-[10px] font-bold text-white">
                  {i + 1}
                </span>
                {s}
              </li>
            ))}
          </ol>
          <div className="mt-3 rounded-lg border border-teal-300 bg-white p-3">
            <p className="text-xs font-bold uppercase tracking-wide text-teal-800">{L.activationTitle}</p>
            <p className="mt-1 text-sm leading-relaxed text-slate-700">{point.release.activation}</p>
          </div>
        </div>

        {/* manual therapy */}
        <div className={SECTION_STYLES}>
          <SectionHeading n="3" title={L.manual} sub={L.manualSub} />
          <p className="text-sm leading-relaxed text-slate-700">{point.manualTherapy}</p>
        </div>

        {/* stretch */}
        <div className={SECTION_STYLES}>
          <SectionHeading n="4" title={L.stretch} sub={L.stretchSub} />
          <p className="mb-1.5 text-sm font-semibold text-slate-900">
            {point.stretch.name}
            <span className="ml-2 rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">
              {fill(t.modal.holdBadge, { x: point.stretch.hold })}
            </span>
          </p>
          <ol className="list-decimal space-y-1 pl-5 text-sm leading-relaxed text-slate-700">
            {point.stretch.steps.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ol>
        </div>

        {/* causes */}
        <div className={SECTION_STYLES}>
          <SectionHeading n="5" title={L.causes} sub={L.causesSub} />
          <ul className="grid gap-1.5 sm:grid-cols-2">
            {point.causes.map((c, i) => (
              <li key={i} className="flex gap-2 text-sm leading-relaxed text-slate-700">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                {c}
              </li>
            ))}
          </ul>
        </div>

        {/* prevention */}
        <div className={SECTION_STYLES}>
          <SectionHeading n="6" title={t.modal.prevention} />
          <ul className="space-y-1.5">
            {point.prevention.map((c, i) => (
              <li key={i} className="flex gap-2 text-sm leading-relaxed text-slate-700">
                <svg className="mt-1 h-4 w-4 shrink-0 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M20 6 9 17l-5-5" /></svg>
                {c}
              </li>
            ))}
          </ul>
        </div>

        {/* related */}
        {point.related && point.related.length > 0 && (
          <div>
            <h4 className="mb-2 text-sm font-bold text-slate-900">
              {L.related}
            </h4>
            <div className="flex flex-wrap gap-2">
              {point.related.map((rid) => {
                const rp = POINT_MAP_BY_LOCALE[locale][rid];
                if (!rp) return null;
                const rc = LINE_MAP_BY_LOCALE[locale][rp.lineId];
                return (
                  <button
                    key={rid}
                    onClick={() => onNavigate(rp.id)}
                    className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50"
                  >
                    <span className="h-2 w-2 rounded-full" style={{ backgroundColor: rc.color }} />
                    {rp.name}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Chip({ label, value }: { label: string; value: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs text-slate-700 ring-1 ring-slate-200">
      <span className="font-bold uppercase tracking-wide text-teal-700">{label}</span>
      {value}
    </span>
  );
}
