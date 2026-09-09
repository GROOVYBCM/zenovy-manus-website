import React from "react";
import { Link } from "wouter";
import { SiteHeader, SiteFooter } from "@/components/Navigation";
import { SignalCanvas } from "@/components/SignalCanvas";
import { PantherContour } from "@/components/BrandMarks";
import { GrowthArchitectureSystem } from "@/components/GrowthArchitectureSystem";
import { ClientEvidenceSection } from "@/components/ClientEvidenceSection";
import { FoundersSection } from "@/components/FoundersSection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { 
  ArrowRight, 
  ShieldAlert, 
  Clock, 
  FilterX, 
  PhoneOff, 
  EyeOff, 
  Check, 
  CheckCircle2, 
  Sparkles,
  ArrowUpRight
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F3F0E8] flex flex-col relative selection:bg-[#B79A5B]/30">
      <SiteHeader />

      <main className="flex-1">
        {/* ========================================================================= */}
        {/* SECTION 13: HERO EXPERIENCE                                               */}
        {/* ========================================================================= */}
        <section className="relative min-h-[92vh] flex items-center pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-[#0A0A0A]">
          {/* Signal Field Canvas & Restrained Panther Contour */}
          <SignalCanvas density="medium" />
          <PantherContour className="top-12 -right-24 w-[750px] h-[500px]" opacity={0.06} />

          {/* Architectural Grid Underlay */}
          <div className="absolute inset-0 grid-pattern pointer-events-none opacity-40" aria-hidden="true" />

          <div className="site-container relative z-10">
            <div className="max-w-4xl">
              {/* Hero Eyebrow */}
              <div className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full bg-[#141413] border border-[#B79A5B]/30 shadow-inner">
                <span className="w-2 h-2 rounded-full bg-[#B79A5B] animate-pulse" />
                <span className="text-[0.6875rem] font-mono tracking-[0.2em] uppercase text-[#B79A5B] font-bold">
                  GROWTH SYSTEMS FOR HIGH-TICKET HOME SERVICES
                </span>
              </div>

              {/* Master Headline - Section 13 Spec */}
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#F3F0E8] font-medium leading-[1.08] tracking-tight mb-8">
                Build a growth system around the jobs you actually want.
              </h1>

              {/* Master Supporting Copy - Section 13 Spec */}
              <p className="text-base sm:text-xl text-[#A7A198] leading-relaxed max-w-2xl mb-10 font-normal">
                Zenovy helps you bring in the right homeowners, sort serious opportunities
                from noise, keep follow-up moving, and see which sources are turning into booked work.
              </p>

              {/* Primary & Secondary CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 mb-12">
                <Link
                  href="/diagnostic"
                  className="btn-primary py-4 px-8 text-sm sm:text-base font-semibold"
                >
                  <span>Book a Growth Diagnostic</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/how-it-works"
                  className="btn-secondary py-4 px-7 text-sm sm:text-base font-medium"
                >
                  <span>See how Zenovy works</span>
                  <ArrowUpRight className="w-4 h-4 text-[#A7A198]" />
                </Link>
              </div>

              {/* Qualifying Fit Microcopy - Section 13 Spec */}
              <div className="flex items-center gap-3 text-xs sm:text-sm text-[#A7A198]/90 font-light border-l-2 border-[#B79A5B]/40 pl-4 py-1">
                <span>
                  For residential contractors with room on the calendar and enough margin to care which jobs fill it.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 14: WHERE GOOD LEADS GET LOST (Ivory Section Transition)          */}
        {/* ========================================================================= */}
        <section className="bg-[#F3F0E8] text-[#0A0A0A] py-20 sm:py-28 relative overflow-hidden">
          <div className="site-container">
            <div className="max-w-3xl mb-16">
              <span className="text-[0.6875rem] font-mono tracking-[0.22em] uppercase font-bold text-[#B79A5B] block mb-3">
                WHERE GOOD LEADS GET LOST
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#0A0A0A] font-medium tracking-tight leading-tight">
                A pipeline can leak long before the estimate.
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#292927]/80 leading-relaxed">
                Most home-service companies don’t suffer from a lack of people asking questions.
                They suffer from silent operational breakdown between the initial inquiry and the sale.
              </p>
            </div>

            {/* 4 Problem Modules (Not a generic card wall) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/80 border border-[#0A0A0A]/10 p-7 rounded-2xl shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#0A0A0A] text-[#B79A5B] flex items-center justify-center mb-5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-[#0A0A0A] mb-2">
                    Slow Response Speed
                  </h3>
                  <p className="text-xs sm:text-sm text-[#292927]/80 leading-relaxed">
                    Homeowners request three quotes simultaneously. When inquiries sit for 30 minutes, 
                    the competitor who called back in 3 minutes takes the estimate.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#0A0A0A]/10 text-[0.6875rem] font-mono text-[#B79A5B] font-bold">
                  LEAK: ZERO SPEED-TO-LEAD
                </div>
              </div>

              <div className="bg-white/80 border border-[#0A0A0A]/10 p-7 rounded-2xl shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#0A0A0A] text-[#B79A5B] flex items-center justify-center mb-5">
                    <FilterX className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-[#0A0A0A] mb-2">
                    No Upstream Qualification
                  </h3>
                  <p className="text-xs sm:text-sm text-[#292927]/80 leading-relaxed">
                    Estimators burn fuel and hours visiting tire-kickers, minor $400 patch repairs, 
                    or renters who have no budget for a full roof or kitchen remodel.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#0A0A0A]/10 text-[0.6875rem] font-mono text-[#B79A5B] font-bold">
                  LEAK: ESTIMATOR TIME DRAIN
                </div>
              </div>

              <div className="bg-white/80 border border-[#0A0A0A]/10 p-7 rounded-2xl shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#0A0A0A] text-[#B79A5B] flex items-center justify-center mb-5">
                    <PhoneOff className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-[#0A0A0A] mb-2">
                    Broken Follow-Up Cadence
                  </h3>
                  <p className="text-xs sm:text-sm text-[#292927]/80 leading-relaxed">
                    A prospect misses one phone call and vanishes forever. Without an automated recovery loop, 
                    viable $25,000 opportunities die in the inbox.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#0A0A0A]/10 text-[0.6875rem] font-mono text-[#B79A5B] font-bold">
                  LEAK: ZERO OPPORTUNITY RECOVERY
                </div>
              </div>

              <div className="bg-white/80 border border-[#0A0A0A]/10 p-7 rounded-2xl shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#0A0A0A] text-[#B79A5B] flex items-center justify-center mb-5">
                    <EyeOff className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-[#0A0A0A] mb-2">
                    Blind Channel Attribution
                  </h3>
                  <p className="text-xs sm:text-sm text-[#292927]/80 leading-relaxed">
                    Owners have no concrete way of knowing which ad creative, zip code, or keyword produced 
                    the jobs that actually closed with 45% gross margin.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#0A0A0A]/10 text-[0.6875rem] font-mono text-[#B79A5B] font-bold">
                  LEAK: DISCONNECTED REPORTING
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTIONS 15 & 16: THE ZENOVY GROWTH ARCHITECTURE (Dark Graphite Environment)*/}
        {/* ========================================================================= */}
        <section id="architecture" className="py-24 sm:py-32 bg-[#0A0A0A] border-t border-b border-[#B79A5B]/15 relative">
          <div className="site-container">
            <div className="max-w-3xl mb-16">
              <span className="eyebrow mb-3">THE ZENOVY GROWTH ARCHITECTURE</span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#F3F0E8] font-medium tracking-tight mb-4">
                Put every good lead on a clear path to an estimate.
              </h2>
              <p className="text-base sm:text-lg text-[#A7A198] leading-relaxed">
                Growth is not a pile of disconnected marketing services. It is a 6-stage operational pipeline 
                supported by continuous trust infrastructure and intelligence feedback.
              </p>
            </div>

            {/* Growth Architecture Interactive System */}
            <GrowthArchitectureSystem />
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 17: WHAT ZENOVY MANAGES (4 Strategic Groups & Boundary)           */}
        {/* ========================================================================= */}
        <section className="py-24 sm:py-32 bg-[#141413] relative overflow-hidden">
          <div className="site-container">
            <div className="max-w-3xl mb-16">
              <span className="eyebrow mb-3">OPERATIONAL CAPABILITIES</span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#F3F0E8] font-medium tracking-tight mb-4">
                Build a pipeline around the work you want more of.
              </h2>
              <p className="text-base sm:text-lg text-[#A7A198]">
                We avoid endless deliverable checklists. Here is how Zenovy engineers 
                your commercial pipeline across four core operational groups:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
              <div className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/[0.06] flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#B79A5B] block mb-2">
                    GROUP 01
                  </span>
                  <h3 className="font-serif text-2xl text-[#F3F0E8] font-semibold mb-3">
                    Acquisition Precision
                  </h3>
                  <p className="text-sm text-[#A7A198] leading-relaxed mb-6">
                    Demand generation engineered specifically for high-ticket residential work. 
                    Targeting high-equity homeowners, shaping tailored project offers, and building 
                    frictionless landing environments that repel low-margin requests.
                  </p>
                </div>
                <div className="text-xs text-[#F3F0E8]/70 pt-4 border-t border-white/[0.06] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B79A5B]" />
                  <span>Custom Landing Engines · High-Intent Search · Geo-Targeted Offers</span>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/[0.06] flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#B79A5B] block mb-2">
                    GROUP 02
                  </span>
                  <h3 className="font-serif text-2xl text-[#F3F0E8] font-semibold mb-3">
                    Qualification + Follow-Up
                  </h3>
                  <p className="text-sm text-[#A7A198] leading-relaxed mb-6">
                    Multi-touch qualification workflows that respond in under 3 minutes. Automated SMS, 
                    email confirmation, direct calendar reservation, and persistent recovery loops that 
                    wake up dormant conversations without burning staff time.
                  </p>
                </div>
                <div className="text-xs text-[#F3F0E8]/70 pt-4 border-t border-white/[0.06] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B79A5B]" />
                  <span>&lt;3 Min Speed-to-Lead · Dynamic Scope Screening · Automated Recovery</span>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/[0.06] flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#B79A5B] block mb-2">
                    GROUP 03
                  </span>
                  <h3 className="font-serif text-2xl text-[#F3F0E8] font-semibold mb-3">
                    Trust + Conversion Infrastructure
                  </h3>
                  <p className="text-sm text-[#A7A198] leading-relaxed mb-6">
                    Local reputation, verified reviews, project galleries, and neighborhood credibility assets 
                    positioned directly along the homeowner decision path to reduce booking hesitation.
                  </p>
                </div>
                <div className="text-xs text-[#F3F0E8]/70 pt-4 border-t border-white/[0.06] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B79A5B]" />
                  <span>Reputation Lanes · Authority Proof · Reduced Appointment Cancellation</span>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/[0.06] flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#B79A5B] block mb-2">
                    GROUP 04
                  </span>
                  <h3 className="font-serif text-2xl text-[#F3F0E8] font-semibold mb-3">
                    Growth Intelligence
                  </h3>
                  <p className="text-sm text-[#A7A198] leading-relaxed mb-6">
                    Full-funnel pipeline transparency. We track which homeowner inquiries become 
                    closed contracts, passing actionable intelligence back to targeting parameters 
                    so customer acquisition becomes sharper every month.
                  </p>
                </div>
                <div className="text-xs text-[#F3F0E8]/70 pt-4 border-t border-white/[0.06] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B79A5B]" />
                  <span>Closed-Contract Attribution · Downstream CAC · CRM Synchronization</span>
                </div>
              </div>
            </div>

            {/* Clear Commercial Ownership Statement */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#18332B]/40 border border-[#B79A5B]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <span className="text-[0.6875rem] font-mono uppercase tracking-wider text-[#B79A5B] font-bold block mb-1">
                  OUR CLEAR COMMERCIAL BOUNDARY
                </span>
                <p className="text-sm sm:text-base text-[#F3F0E8] leading-relaxed">
                  Zenovy owns the system up to a sales-ready opportunity. Your team still owns 
                  pricing, the sales conversation, the work itself, and the close.
                </p>
              </div>
              <Link
                href="/how-it-works"
                className="btn-secondary py-3 px-6 text-xs whitespace-nowrap shrink-0"
              >
                Explore The Full Process →
              </Link>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 18: REAL CLIENT EVIDENCE (Marakas Pizza Live Account Proof)       */}
        {/* ========================================================================= */}
        <section className="py-24 sm:py-32 bg-[#0A0A0A] border-t border-white/[0.06] relative">
          <div className="site-container">
            <div className="max-w-3xl mb-14">
              <span className="eyebrow mb-3">REAL CLIENT EVIDENCE</span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#F3F0E8] font-medium tracking-tight mb-4">
                The numbers behind a live client account.
              </h2>
              <p className="text-base sm:text-lg text-[#A7A198] leading-relaxed">
                Rather than inventing hypothetical contractor case studies, we show real, 
                audited performance from an active client operating in our South Florida market.
              </p>
            </div>

            <ClientEvidenceSection />
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 19: WHO THIS FITS (Ivory Section Transition)                      */}
        {/* ========================================================================= */}
        <section className="py-24 sm:py-32 bg-[#F3F0E8] text-[#0A0A0A] relative">
          <div className="site-container">
            <div className="max-w-3xl mb-16">
              <span className="text-[0.6875rem] font-mono tracking-[0.22em] uppercase font-bold text-[#B79A5B] block mb-3">
                COMMERCIAL QUALIFICATION
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#0A0A0A] font-medium tracking-tight leading-tight mb-4">
                For home-service companies where one good job makes the difference.
              </h2>
              <p className="text-base sm:text-lg text-[#292927]/80 leading-relaxed">
                Our infrastructure is designed for residential contractors where unit economics justify 
                disciplined upstream qualification and rapid operational response.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
              <div className="space-y-6">
                <h3 className="font-serif text-2xl text-[#0A0A0A] font-semibold">
                  Ideal Operational Profile:
                </h3>
                <div className="space-y-4">
                  {[
                    "Completed project tickets typically exceed $10,000 to $75,000+",
                    "Lead quality and homeowner seriousness matter more than raw volume",
                    "Dedicated sales or estimation capacity ready to handle qualified appointments",
                    "Willingness to share downstream closed-deal metrics to refine attribution",
                    "Desire to build a predictable asset rather than chasing one-off ad spikes",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3.5">
                      <div className="w-5 h-5 rounded-full bg-[#18332B] text-[#B79A5B] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-sm sm:text-base text-[#292927] font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/80 p-8 rounded-2xl border border-[#0A0A0A]/10 shadow-sm">
                <h3 className="font-serif text-2xl text-[#0A0A0A] font-semibold mb-4">
                  Representative Residential Trades:
                </h3>
                <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm text-[#292927] font-medium">
                  <div className="p-3 bg-[#F3F0E8] rounded-lg border border-[#0A0A0A]/5">• Roofing Replacement</div>
                  <div className="p-3 bg-[#F3F0E8] rounded-lg border border-[#0A0A0A]/5">• HVAC Systems</div>
                  <div className="p-3 bg-[#F3F0E8] rounded-lg border border-[#0A0A0A]/5">• Whole-Home Remodeling</div>
                  <div className="p-3 bg-[#F3F0E8] rounded-lg border border-[#0A0A0A]/5">• Impact Windows & Doors</div>
                  <div className="p-3 bg-[#F3F0E8] rounded-lg border border-[#0A0A0A]/5">• Kitchen & Bath Expansions</div>
                  <div className="p-3 bg-[#F3F0E8] rounded-lg border border-[#0A0A0A]/5">• Hardscaping & Pavers</div>
                  <div className="p-3 bg-[#F3F0E8] rounded-lg border border-[#0A0A0A]/5">• Custom Pool Builds</div>
                  <div className="p-3 bg-[#F3F0E8] rounded-lg border border-[#0A0A0A]/5">• High-End Flooring</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 20: FOUNDERS (Obsidian Environment, Visible Ownership)            */}
        {/* ========================================================================= */}
        <section className="py-24 sm:py-32 bg-[#0A0A0A] relative">
          <div className="site-container">
            <div className="max-w-3xl mb-16">
              <span className="eyebrow mb-3">BUILT IN SOUTH FLORIDA</span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#F3F0E8] font-medium tracking-tight mb-4">
                You'll work directly with Brayan and Jean.
              </h2>
              <p className="text-base sm:text-lg text-[#A7A198] leading-relaxed">
                Visible ownership and operational responsibility. We do not pass your growth 
                architecture to an offshore team or inexperienced juniors.
              </p>
            </div>

            <FoundersSection />
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 22: HOMEPAGE FAQ (Objection Handling Module)                       */}
        {/* ========================================================================= */}
        <section className="py-24 sm:py-32 bg-[#141413] border-t border-white/[0.06] relative">
          <div className="site-container">
            <div className="max-w-3xl mb-14">
              <span className="eyebrow mb-3">CLARITY & STANDARDS</span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#F3F0E8] font-medium tracking-tight mb-4">
                Frequently asked questions.
              </h2>
              <p className="text-base sm:text-lg text-[#A7A198] leading-relaxed">
                Direct, transparent answers regarding our systems, commercial boundaries, 
                and expectations before you book a Growth Diagnostic.
              </p>
            </div>

            <FAQAccordion limit={6} />
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 21: FINAL DIAGNOSTIC CTA (Deep Forest Transition)                 */}
        {/* ========================================================================= */}
        <section className="py-24 sm:py-32 bg-[#18332B] relative overflow-hidden text-center">
          <div
            className="absolute inset-0 bg-radial from-[#B79A5B]/10 to-transparent pointer-events-none"
            aria-hidden="true"
          />

          <div className="site-container relative z-10 max-w-3xl mx-auto">
            <span className="inline-block text-[0.6875rem] font-mono tracking-[0.22em] uppercase font-bold text-[#B79A5B] px-3.5 py-1.5 rounded-full bg-[#0A0A0A]/50 border border-[#B79A5B]/30 mb-6">
              GROWTH DIAGNOSTIC
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F3F0E8] font-medium tracking-tight mb-6 leading-tight">
              Find the leak before you buy more traffic.
            </h2>

            <p className="text-base sm:text-lg text-[#D8D4CC] leading-relaxed mb-10 max-w-xl mx-auto">
              In 45 minutes, we inspect where your leads come from, how quickly they are handled, 
              where prospects stall, and how accurately your company can see downstream outcomes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/diagnostic"
                className="btn-primary py-4 px-9 text-sm sm:text-base font-semibold shadow-2xl"
              >
                <span>Book a Growth Diagnostic</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/results"
                className="btn-secondary py-4 px-7 text-sm sm:text-base font-medium"
              >
                <span>Review Client Evidence</span>
              </Link>
            </div>

            <div className="mt-8 text-xs text-[#A7A198] tracking-wide">
              No pressure. No sales pitch. 45-minute working audit via Google Meet or in South Florida.
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
