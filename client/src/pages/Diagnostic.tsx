import React from "react";
import { SiteHeader, SiteFooter } from "@/components/Navigation";
import { GHLBookingWidget } from "@/components/GHLBookingWidget";
import { 
  CheckCircle2, 
  Clock, 
  Video, 
  MapPin, 
  ShieldCheck, 
  AlertCircle,
  HelpCircle
} from "lucide-react";

export default function DiagnosticPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F3F0E8] flex flex-col selection:bg-[#B79A5B]/30">
      <SiteHeader />

      <main className="flex-1 pt-28 pb-24 md:pt-36">
        {/* Diagnostic Hero & Main 2-Column Booking Workspace */}
        <section className="site-container mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Context, What to Expect & Value */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div>
                <span className="eyebrow mb-3">HOME SERVICES GROWTH DIAGNOSTIC</span>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F3F0E8] font-medium tracking-tight mb-6 leading-tight">
                  Find where your pipeline is leaking.
                </h1>
                <p className="text-base sm:text-lg text-[#A7A198] leading-relaxed">
                  We'll walk through the path from a new inquiry to a booked estimate, 
                  then look at what happens after your sales team gets involved.
                </p>
              </div>

              {/* Session Logistics Card */}
              <div className="bg-[#141413] border border-white/[0.08] p-6 rounded-2xl space-y-4">
                <div className="flex items-center gap-3 text-sm text-[#F3F0E8]">
                  <Clock className="w-4 h-4 text-[#B79A5B] shrink-0" />
                  <span><strong>Duration:</strong> 45 minutes of focused working analysis</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#F3F0E8]">
                  <Video className="w-4 h-4 text-[#B79A5B] shrink-0" />
                  <span><strong>Format:</strong> Google Meet (High-resolution screenshare audit)</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#F3F0E8]">
                  <MapPin className="w-4 h-4 text-[#B79A5B] shrink-0" />
                  <span><strong>Local Option:</strong> Miami & South Florida in-person by request</span>
                </div>
              </div>

              {/* What We Examine List */}
              <div className="space-y-3">
                <h3 className="font-serif text-xl text-[#F3F0E8] font-semibold">
                  What we examine together:
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#A7A198]">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#B79A5B] shrink-0 mt-0.5" />
                    <span>Your current lead sources & true cost per qualified estimate</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#B79A5B] shrink-0 mt-0.5" />
                    <span>Response speed and first-touch qualification barriers</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#B79A5B] shrink-0 mt-0.5" />
                    <span>Where viable homeowners drop off or become unresponsive</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#B79A5B] shrink-0 mt-0.5" />
                    <span>How estimate context is transferred to your sales reps</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#B79A5B] shrink-0 mt-0.5" />
                    <span>Downstream contract attribution and margin visibility</span>
                  </li>
                </ul>
              </div>

              {/* Strict No-Pitch Guarantee */}
              <div className="p-4 rounded-xl bg-[#18332B]/30 border border-[#B79A5B]/20 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#B79A5B] shrink-0 mt-0.5" />
                <div className="text-xs text-[#D8D4CC] leading-relaxed">
                  <strong>Zero Pressure Guarantee:</strong> This is a working operational audit with Brayan and Jean. 
                  If we determine Zenovy is not the right fit for your current volume or trade, we will tell you directly.
                </div>
              </div>
            </div>

            {/* Right Column: High-Capacity GoHighLevel Booking Shell */}
            <div className="lg:col-span-7">
              <GHLBookingWidget />
            </div>
          </div>
        </section>

        {/* Section 28: Diagnostic Supporting Content (What Happens Next & Qualification) */}
        <section className="bg-[#141413] py-20 border-t border-b border-white/[0.06]">
          <div className="site-container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-xl bg-[#0A0A0A] border border-white/[0.06]">
                <div className="font-mono text-xs uppercase tracking-wider text-[#B79A5B] font-bold mb-2">
                  01. WHO THIS IS FOR
                </div>
                <h3 className="font-serif text-xl text-[#F3F0E8] font-semibold mb-2">
                  High-Ticket Home Services
                </h3>
                <p className="text-xs text-[#A7A198] leading-relaxed">
                  Residential contractors where average completed project values exceed $10,000+ 
                  and available crew or technician capacity exists to absorb new work.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#0A0A0A] border border-white/[0.06]">
                <div className="font-mono text-xs uppercase tracking-wider text-[#B79A5B] font-bold mb-2">
                  02. WHAT TO BRING
                </div>
                <h3 className="font-serif text-xl text-[#F3F0E8] font-semibold mb-2">
                  Rough Pipeline Metrics
                </h3>
                <p className="text-xs text-[#A7A198] leading-relaxed">
                  Recent monthly inquiry counts, average close rate, typical ticket size, and any 
                  current frustration points with tire-kickers or missed calls.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#0A0A0A] border border-white/[0.06]">
                <div className="font-mono text-xs uppercase tracking-wider text-[#B79A5B] font-bold mb-2">
                  03. WHAT HAPPENS NEXT
                </div>
                <h3 className="font-serif text-xl text-[#F3F0E8] font-semibold mb-2">
                  Clear Blueprint or Referral
                </h3>
                <p className="text-xs text-[#A7A198] leading-relaxed">
                  If there is mutual alignment, we present an installed architecture proposal. 
                  If not, you keep all diagnostic findings with zero obligation.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
