import { SiteHeader, SiteFooter, Hero } from "@/components/sections/Chrome";
import { BodyMap } from "@/components/atlas/BodyMap";
import { LinesSection } from "@/components/sections/LinesSection";
import { AssessmentSection, PrimerSection, SafetySection } from "@/components/sections/EduSections";
import { QuickRefSection } from "@/components/sections/QuickRefSection";
import { I18nProvider } from "@/i18n/locale";

export default function Home() {
  return (
    <I18nProvider>
      <div className="flex min-h-screen flex-col bg-white text-slate-900">
        <SiteHeader />
        <main className="flex-1">
          <Hero />

          <div className="py-16">
            <BodyMap />
          </div>

          <LinesSection />
          <PrimerSection />
          <AssessmentSection />
          <SafetySection />
          <QuickRefSection />
        </main>
        <SiteFooter />
      </div>
    </I18nProvider>
  );
}
