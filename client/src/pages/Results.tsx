import React from "react";
import { Link } from "wouter";
import { SiteHeader, SiteFooter } from "@/components/Navigation";
import { ClientEvidenceSection } from "@/components/ClientEvidenceSection";
import { ArrowRight, ShieldCheck, CheckCircle2, TrendingUp, Search } from "lucide-react";

export default function Results() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F3F0E8] flex flex-col selection:bg-[#B79A5B]/30">
      <SiteHeader />

      <main className="flex-1 pt-28 pb-24 md:pt-36">
        {/* Page Hero */}
        <section className="site-container mb-16">
          <div className="max-w-3xl">
            <span className="eyebrow mb-3">CLIENT RESULTS & LIVE EVIDENCE</span>
            <h1 className="font-serif text-4xl sm:text-6xl text-[#F3F0E8] font-medium tracking-tight mb-6 leading-tight">
              A real client account, with the numbers attached.
            </h1>
            <p className="text-base sm:text-xl text-[#A7A198] leading-relaxed">
              We do not fabricate synthetic contractor case studies with blurred logos. 
              Here is real, unfiltered performance evidence from an active client operating in our South Florida market.
            </p>
          </div>
        </section>

        {/* Evidence Core */}
        <section className="site-container mb-24">
          <ClientEvidenceSection expandedMode={true} />
        </section>

        {/* Why Evidence Matters Editorial */}
        <section className="bg-[#141413] py-20 border-t border-b border-white/[0.06] mb-24">
          <div className="site-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="eyebrow mb-2">METHODOLOGY PROOF</span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#F3F0E8] font-medium mb-4">
                  Why a hospitality account matters to a residential contractor.
                </h2>
                <p className="text-sm sm:text-base text-[#A7A198] leading-relaxed mb-4">
                  Marakas Pizza is a high-volume Miami restaurant. While pizzas are not roofs or luxury kitchens, 
                  operating inside a live, fast-moving consumer account requires bulletproof conversion mechanics, 
                  strict webhook tracking, zero dropped transactions, and relentless attribution discipline.
                </p>
                <p className="text-sm sm:text-base text-[#A7A198] leading-relaxed">
                  If an agency cannot accurately track a $35 online order to its acquisition source, they have 
                  no business attempting to manage a $45,000 contractor pipeline.
                </p>
              </div>

              <div className="bg-[#0A0A0A] p-8 rounded-2xl border border-white/[0.08] space-y-4">
                <div className="text-xs font-mono uppercase tracking-wider text-[#B79A5B] font-bold">
                  WHAT THIS PROVES ABOUT ZENOVY:
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#B79A5B] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#F3F0E8]">
                      We operate inside real client accounts, not simulated sandbox environments.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#B79A5B] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#F3F0E8]">
                      Server-side conversion tracking implemented without data leaks.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#B79A5B] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#F3F0E8]">
                      Real South Florida brand affinity and audience scaling (9.2K to 12K+).
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#B79A5B] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#F3F0E8]">
                      Direct accountability and weekly metric reporting to the business owner.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Diagnostic CTA */}
        <section className="site-container text-center">
          <div className="max-w-2xl mx-auto bg-[#18332B]/40 border border-[#B79A5B]/30 rounded-2xl p-10">
            <span className="eyebrow mb-2">READY FOR TRANSPARENCY?</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F3F0E8] font-medium mb-4">
              Get the same measurement discipline in your business.
            </h2>
            <p className="text-sm text-[#D8D4CC] mb-8">
              Book a Growth Diagnostic to audit your current lead tracking and estimate handoff.
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
