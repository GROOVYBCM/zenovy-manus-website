import React from "react";
import { Link } from "wouter";
import { SiteHeader, SiteFooter } from "@/components/Navigation";
import { GrowthArchitectureSystem } from "@/components/GrowthArchitectureSystem";
import { 
  ArrowRight, 
  Compass, 
  Target, 
  Filter, 
  ShieldCheck, 
  ArrowUpRight, 
  BarChart3, 
  CheckCircle2,
  RefreshCw,
  Award,
  Zap
} from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Start with the work worth chasing",
      tagline: "Choose the services, areas, and project types worth building demand around.",
      desc: "Not all jobs are created equal. A $25,000 complete roof replacement or a $60,000 kitchen addition carries fundamentally different unit economics than emergency leak patching. We audit your crew capacity and isolate the exact service lines and affluent zip codes that generate true gross margin.",
      icon: Compass,
    },
    {
      num: "02",
      title: "Reach homeowners who can buy it",
      tagline: "Put a clear offer in front of homeowners who can realistically buy the work.",
      desc: "We engineer customized, high-intent campaign funnels that address high-equity homeowners. By framing transparent project tiers and verifiable local craftsmanship, we attract property owners who prioritize quality, warranty, and timeline over the absolute cheapest price.",
      icon: Target,
    },
    {
      num: "03",
      title: "Sort serious opportunities early",
      tagline: "Separate serious projects from noise before your team burns time on both.",
      desc: "Your sales estimators shouldn’t spend 2 hours driving across town to evaluate a $300 cosmetic repair or meet a tenant who cannot authorize work. Our dynamic pre-screening logic verifies ownership, project scope, and budget readiness before any meeting is confirmed.",
      icon: Filter,
    },
    {
      num: "04",
      title: "Keep good leads moving",
      tagline: "Reply quickly, follow up, confirm appointments, and recover worthwhile opportunities.",
      desc: "Speed-to-lead under 3 minutes. The moment a qualified homeowner submits an inquiry, our automated multi-channel sequences engage via SMS, email, and self-scheduling links. If an opportunity stalls or goes quiet, our Opportunity Recovery Loop re-engages them automatically.",
      icon: ShieldCheck,
    },
    {
      num: "05",
      title: "Hand sales the context it needs",
      tagline: "Give your team the context it needs before the sales conversation starts.",
      desc: "No blind appointments. Before pulling into the homeowner's driveway, your sales rep receives a structured diagnostic briefing dossier: property address, aerial view, verified budget expectations, homeowner priorities, and confirmed appointment times.",
      icon: ArrowUpRight,
    },
    {
      num: "06",
      title: "See what turns into booked work",
      tagline: "Connect downstream outcomes back to the source so future decisions use real data.",
      desc: "Most agencies stop measuring at the click or form submission. Zenovy connects closed job revenues directly back to upstream campaign parameters. If a specific keyword or creative produced $140,000 in closed contracts, we double down on that exact signal.",
      icon: BarChart3,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F3F0E8] flex flex-col selection:bg-[#B79A5B]/30">
      <SiteHeader />

      <main className="flex-1 pt-28 pb-24 md:pt-36">
        {/* Page Hero */}
        <section className="site-container mb-20">
          <div className="max-w-3xl">
            <span className="eyebrow mb-3">HOW IT WORKS</span>
            <h1 className="font-serif text-4xl sm:text-6xl text-[#F3F0E8] font-medium tracking-tight mb-6 leading-tight">
              How to put better jobs in your pipeline.
            </h1>
            <p className="text-base sm:text-xl text-[#A7A198] leading-relaxed">
              We replace guesswork and disconnected lead purchases with an installed 
              operational growth framework built specifically for high-ticket residential contractors.
            </p>
          </div>
        </section>

        {/* Narrative Operational Breakdown */}
        <section className="site-container mb-24">
          <div className="space-y-12">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="bg-[#141413] border border-white/[0.06] hover:border-[#B79A5B]/30 transition-all rounded-2xl p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative overflow-hidden group"
                >
                  <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-start gap-4">
                    <span className="font-serif text-5xl sm:text-6xl font-bold text-[#B79A5B] leading-none">
                      {step.num}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[#0A0A0A] border border-white/10 flex items-center justify-center text-[#B79A5B]">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="lg:col-span-9">
                    <h2 className="font-serif text-2xl sm:text-3xl text-[#F3F0E8] font-medium mb-2">
                      {step.title}
                    </h2>
                    <div className="text-xs font-mono uppercase tracking-wider text-[#B79A5B] mb-4">
                      {step.tagline}
                    </div>
                    <p className="text-sm sm:text-base text-[#A7A198] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Formal Growth Architecture Presentation */}
        <section className="bg-[#141413] py-20 border-t border-b border-[#B79A5B]/20 mb-24">
          <div className="site-container">
            <div className="max-w-3xl mb-12">
              <span className="eyebrow mb-2">PROPRIETARY ARCHITECTURE</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F3F0E8] font-medium">
                The Zenovy Growth Architecture System
              </h2>
              <p className="text-sm text-[#A7A198] mt-2">
                Inspect every stage of the pipeline alongside supporting trust and intelligence loops.
              </p>
            </div>
            <GrowthArchitectureSystem />
          </div>
        </section>

        {/* Bottom CTA Block */}
        <section className="site-container text-center">
          <div className="max-w-2xl mx-auto bg-[#18332B]/50 border border-[#B79A5B]/30 rounded-2xl p-10 sm:p-14">
            <span className="eyebrow mb-3">GET CLARITY</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F3F0E8] font-medium mb-4">
              Find where your pipeline is getting stuck.
            </h2>
            <p className="text-sm sm:text-base text-[#D8D4CC] mb-8 leading-relaxed">
              Book a 45-minute working Growth Diagnostic with Brayan and Jean. 
              We'll audit your current lead handling and estimate handoff.
            </p>
            <Link
              href="/diagnostic"
              className="btn-primary py-4 px-8 text-sm font-semibold inline-flex items-center gap-2"
            >
              <span>Book a Growth Diagnostic</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
