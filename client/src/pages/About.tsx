import React from "react";
import { Link } from "wouter";
import { SiteHeader, SiteFooter } from "@/components/Navigation";
import { FoundersSection } from "@/components/FoundersSection";
import { ArrowRight, MapPin, ShieldCheck, Check, Sparkles } from "lucide-react";

export default function About() {
  const operatingPrinciples = [
    {
      title: "Use the fewest moving parts that can do the job",
      desc: "Fragile, overly complex funnels break. We architect clean, reliable operational systems that your internal estimators and dispatchers can easily execute every single day.",
    },
    {
      title: "Track what customers do after the click",
      desc: "Impressions and raw leads do not pay contractor payroll. We insist on tracking downstream customer milestones through consultation, estimate delivery, and signed agreement.",
    },
    {
      title: "Make claims only when the evidence exists",
      desc: "No fabricated client case studies or inflated ROI claims. If we have audited evidence (like Marakas), we display it transparently. If a variable is outside our control, we say so directly.",
    },
    {
      title: "Give every major decision a clear owner",
      desc: "You will never wonder who is responsible for your account. Brayan owns growth strategy and offer architecture; Jean owns operations, automation, and delivery systems.",
    },
    {
      title: "Keep the marketing-to-sales handoff visible",
      desc: "The boundary between customer inquiry and estimator assessment is where most contractor revenue leaks. We ensure every detail captured upstream is available to your sales rep.",
    },
    {
      title: "Build systems when work repeats enough to justify them",
      desc: "We do not automate for the sake of novelty. We install automated screening, speed-to-lead, and recovery loops where human delay routinely costs you high-ticket jobs.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F3F0E8] flex flex-col selection:bg-[#B79A5B]/30">
      <SiteHeader />

      <main className="flex-1 pt-28 pb-24 md:pt-36">
        {/* Page Hero */}
        <section className="site-container mb-20">
          <div className="max-w-3xl">
            <span className="eyebrow mb-3">ABOUT ZENOVY</span>
            <h1 className="font-serif text-4xl sm:text-6xl text-[#F3F0E8] font-medium tracking-tight mb-6 leading-tight">
              Meet the people running Zenovy.
            </h1>
            <p className="text-base sm:text-xl text-[#A7A198] leading-relaxed">
              We are a Miami-based growth infrastructure company dedicated exclusively to 
              high-ticket residential home services. We build installed operational systems, not short-lived marketing campaigns.
            </p>
          </div>
        </section>

        {/* Founders Spotlight Section */}
        <section className="site-container mb-24">
          <FoundersSection />
        </section>

        {/* Section 25: How We Operate (6 Editorial Principles) */}
        <section className="bg-[#141413] py-20 border-t border-b border-white/[0.06] mb-24">
          <div className="site-container">
            <div className="max-w-3xl mb-14">
              <span className="eyebrow mb-2">OPERATIONAL INTEGRITY</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F3F0E8] font-medium">
                How we operate.
              </h2>
              <p className="text-sm sm:text-base text-[#A7A198] mt-2">
                The governing commercial and engineering principles behind every system we install.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {operatingPrinciples.map((principle, idx) => (
                <div
                  key={principle.title}
                  className="bg-[#0A0A0A] border border-white/[0.06] p-7 rounded-2xl flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-xs text-[#B79A5B] font-bold block mb-3">
                      PRINCIPLE 0{idx + 1}
                    </span>
                    <h3 className="font-serif text-xl text-[#F3F0E8] font-semibold mb-3">
                      {principle.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A7A198] leading-relaxed">
                      {principle.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 25: Miami & South Florida First */}
        <section className="site-container mb-24">
          <div className="bg-[#18332B]/30 border border-[#B79A5B]/30 rounded-2xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#B79A5B] uppercase tracking-wider mb-3">
                <MapPin className="w-4 h-4" />
                <span>REGIONAL HEADQUARTERS</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F3F0E8] font-medium mb-4">
                Miami and South Florida first.
              </h2>
              <p className="text-sm sm:text-base text-[#A7A198] leading-relaxed mb-4">
                South Florida is one of the most competitive home-service markets in the United States. 
                From hurricane impact windows and roofing to luxury whole-home remodeling in Coral Gables, 
                Boca Raton, and Palm Beach, we engineer systems where contractor stakes are exceptionally high.
              </p>
              <p className="text-sm text-[#A7A198] leading-relaxed">
                While we deploy our Growth Architecture remotely for qualified contractors nationwide, 
                our commercial core remains anchored in South Florida, offering hands-on in-person diagnostics by request.
              </p>
            </div>

            <div className="lg:col-span-4 bg-[#0A0A0A] p-6 rounded-xl border border-white/[0.08] text-xs text-[#A7A198] space-y-3">
              <div className="text-[0.6875rem] font-mono uppercase tracking-wider text-[#B79A5B] font-bold">
                COMMERCIAL BASE:
              </div>
              <div>• Miami-Dade County</div>
              <div>• Broward County</div>
              <div>• Palm Beach County</div>
              <div>• Select Nationwide US Contractors</div>
              <div className="pt-3 border-t border-white/[0.08] text-[#F3F0E8] font-medium">
                In-person meetings coordinated by request.
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA Block */}
        <section className="site-container text-center">
          <div className="max-w-2xl mx-auto bg-[#141413] border border-white/[0.08] rounded-2xl p-10">
            <span className="eyebrow mb-2">DIRECT ACCESS</span>
            <h2 className="font-serif text-3xl text-[#F3F0E8] font-medium mb-4">
              Work directly with the founders.
            </h2>
            <p className="text-sm text-[#A7A198] mb-8">
              Book a 45-minute Growth Diagnostic to inspect your pipeline alongside Brayan and Jean.
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
