import React, { useEffect, useState } from "react";
import { Link } from "wouter";
import { SiteHeader, SiteFooter } from "@/components/Navigation";
import { 
  CheckCircle2, 
  Calendar, 
  Clock, 
  Video, 
  FileText, 
  ShieldCheck, 
  User, 
  ArrowRight,
  ExternalLink
} from "lucide-react";

interface BookingData {
  contractorName: string;
  companyName: string;
  trade: string;
  selectedDate: string;
  selectedTime: string;
  locationType: string;
  email: string;
}

export default function DiagnosticBriefing() {
  const [booking, setBooking] = useState<BookingData | null>(null);

  useEffect(() => {
    // Attempt to load latest booking session or provide clean defaults
    const stored = sessionStorage.getItem("zenovy_latest_booking");
    if (stored) {
      try {
        setBooking(JSON.parse(stored));
      } catch {
        // Fallback below
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F3F0E8] flex flex-col selection:bg-[#B79A5B]/30">
      <SiteHeader />

      <main className="flex-1 pt-28 pb-24 md:pt-36">
        <section className="site-container max-w-4xl">
          {/* Section 30 Confirmed Notice Banner */}
          <div className="mb-8 p-4 rounded-xl bg-[#18332B] border border-[#B79A5B]/40 flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#B79A5B] shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-[#F3F0E8]">
                Growth Diagnostic Successfully Reserved in GoHighLevel Calendar
              </span>
            </div>
            <span className="text-[0.6875rem] font-mono text-[#B79A5B] bg-[#0A0A0A] px-2.5 py-1 rounded border border-[#B79A5B]/30">
              STATUS: CONFIRMED
            </span>
          </div>

          {/* Master Headline - Section 30 Spec */}
          <div className="mb-12">
            <span className="eyebrow mb-2">POST-BOOKING BRIEFING & PROTOCOL</span>
            <h1 className="font-serif text-3xl sm:text-5xl text-[#F3F0E8] font-medium tracking-tight mb-4">
              Your Growth Diagnostic is booked.
            </h1>
            <p className="text-base sm:text-lg text-[#A7A198] leading-relaxed">
              We look forward to examining your pipeline. Please review this brief preparation checklist 
              to ensure we get the absolute highest value out of our 45 minutes together.
            </p>
          </div>

          {/* Appointment Dossier Card */}
          <div className="bg-[#141413] border border-white/[0.08] rounded-2xl p-6 sm:p-8 mb-12">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.06]">
              <span className="font-mono text-xs uppercase tracking-wider text-[#B79A5B] font-bold">
                SESSION DETAILS
              </span>
              <span className="text-xs text-[#A7A198]">Direct with Brayan Martinez & Jean Melo</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <span className="text-[0.6875rem] text-[#A7A198] uppercase block mb-1">CONTRACTOR</span>
                <div className="font-semibold text-sm text-[#F3F0E8]">
                  {booking?.contractorName || "Contractor Executive"}
                </div>
                <div className="text-xs text-[#A7A198] mt-0.5">
                  {booking?.companyName || "Residential Contractor LLC"}
                </div>
              </div>

              <div>
                <span className="text-[0.6875rem] text-[#A7A198] uppercase block mb-1">DATE & WINDOW</span>
                <div className="font-semibold text-sm text-[#F3F0E8]">
                  {booking?.selectedDate || "Upcoming Window"}
                </div>
                <div className="text-xs text-[#B79A5B] mt-0.5 font-mono">
                  {booking?.selectedTime || "10:00 AM EDT"}
                </div>
              </div>

              <div>
                <span className="text-[0.6875rem] text-[#A7A198] uppercase block mb-1">FORMAT</span>
                <div className="font-semibold text-sm text-[#F3F0E8]">
                  {booking?.locationType || "Google Meet Video"}
                </div>
                <div className="text-xs text-[#A7A198] mt-0.5">45-minute working audit</div>
              </div>

              <div>
                <span className="text-[0.6875rem] text-[#A7A198] uppercase block mb-1">TRADE FOCUS</span>
                <div className="font-semibold text-sm text-[#F3F0E8]">
                  {booking?.trade || "High-Ticket Residential"}
                </div>
                <div className="text-xs text-[#A7A198] mt-0.5">Unit economics review</div>
              </div>
            </div>
          </div>

          {/* Section 30: What to Prepare */}
          <div className="bg-[#141413] border border-white/[0.08] rounded-2xl p-6 sm:p-8 mb-12">
            <span className="eyebrow mb-3">WHAT TO PREPARE</span>
            <h2 className="font-serif text-2xl text-[#F3F0E8] font-medium mb-6">
              Recommended data to have nearby for your diagnostic:
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-[#A7A198]">
              <div className="p-4 bg-[#0A0A0A] rounded-xl border border-white/[0.04] flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#B79A5B] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#F3F0E8] block mb-1">Recent Inbound Sources:</strong>
                  Where new homeowner calls and web forms came from over the last 60 days (Google, Meta, referrals, local signs).
                </div>
              </div>

              <div className="p-4 bg-[#0A0A0A] rounded-xl border border-white/[0.04] flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#B79A5B] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#F3F0E8] block mb-1">Average Ticket Economics:</strong>
                  Typical gross value of your preferred jobs (e.g. $18k roof, $45k remodel) vs. lower-margin service calls.
                </div>
              </div>

              <div className="p-4 bg-[#0A0A0A] rounded-xl border border-white/[0.04] flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#B79A5B] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#F3F0E8] block mb-1">Speed & Response Cadence:</strong>
                  How quickly someone currently calls, texts, or qualifies an inquiry when your team is in the field.
                </div>
              </div>

              <div className="p-4 bg-[#0A0A0A] rounded-xl border border-white/[0.04] flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#B79A5B] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#F3F0E8] block mb-1">Estimator Calendar Capacity:</strong>
                  How many qualified in-home consultations your sales reps can comfortably execute each week.
                </div>
              </div>
            </div>
          </div>

          {/* Section 31: VSL Integration (Text-First Polished State as Specified) */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#18332B]/30 border border-[#B79A5B]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <div className="text-[0.6875rem] font-mono uppercase tracking-wider text-[#B79A5B] font-bold mb-1">
                PRE-DIAGNOSTIC EXECUTIVE NOTE
              </div>
              <p className="text-sm text-[#F3F0E8] leading-relaxed">
                A calendar invitation with your secure Google Meet link has been dispatched to your email. 
                If you need to coordinate an in-person meeting in South Florida, simply reply directly to that invite.
              </p>
            </div>
            <Link
              href="/"
              className="btn-secondary py-3 px-6 text-xs whitespace-nowrap shrink-0"
            >
              Return to Homepage
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
