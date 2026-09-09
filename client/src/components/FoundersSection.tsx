import React from "react";
import { UserCheck, Shield, Award, MapPin } from "lucide-react";

export const FoundersSection: React.FC = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Brayan Martinez Card */}
        <div className="bg-[#141413] border border-white/[0.08] hover:border-[#B79A5B]/30 transition-all rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group">
          <div
            className="absolute top-0 right-0 w-32 h-32 bg-[#B79A5B]/5 rounded-bl-full pointer-events-none"
            aria-hidden="true"
          />

          <div>
            {/* Founder Portrait Framing / High-end Editorial Profile */}
            <div className="flex items-center gap-5 mb-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#18332B] border border-[#B79A5B]/40 flex flex-col items-center justify-center relative overflow-hidden shrink-0 shadow-lg">
                <span className="font-serif text-3xl text-[#B79A5B] font-bold">BM</span>
                <span className="text-[0.5625rem] font-mono text-[#F3F0E8]/70 tracking-widest uppercase">
                  FOUNDER
                </span>
                {/* Subtle signal node */}
                <span className="absolute bottom-1 right-1 w-2 h-2 rounded-full bg-[#B79A5B] ring-2 ring-[#0A0A0A]" />
              </div>

              <div>
                <span className="eyebrow mb-1">FOUNDER & CEO</span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F3F0E8] font-semibold leading-tight">
                  Brayan Martinez
                </h3>
                <div className="text-xs font-mono text-[#B79A5B] mt-1">
                  Growth Strategy + Commercial Direction
                </div>
              </div>
            </div>

            <p className="text-sm text-[#A7A198] leading-relaxed mb-6">
              Directs market positioning, campaign unit economics, offer architecture, and major
              client account decisions. Brayan works directly with residential contractors to align
              acquisition infrastructure with their high-margin service capacity.
            </p>

            <div className="space-y-2.5 pt-4 border-t border-white/[0.06] text-xs text-[#F3F0E8]/90">
              <div className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-[#B79A5B]" />
                <span>Offer design & qualified homeowner targeting</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-[#B79A5B]" />
                <span>Contractor pipeline diagnostic & margin modeling</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-[#A7A198]">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-[#B79A5B]" />
              <span>Miami, FL</span>
            </span>
            <span className="text-[#B79A5B] font-mono text-[0.6875rem]">ACCOUNT STEWARD</span>
          </div>
        </div>

        {/* Jean Melo Card */}
        <div className="bg-[#141413] border border-white/[0.08] hover:border-[#B79A5B]/30 transition-all rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group">
          <div
            className="absolute top-0 right-0 w-32 h-32 bg-[#18332B]/20 rounded-bl-full pointer-events-none"
            aria-hidden="true"
          />

          <div>
            {/* Founder Portrait Framing */}
            <div className="flex items-center gap-5 mb-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#0A0A0A] border border-[#B79A5B]/40 flex flex-col items-center justify-center relative overflow-hidden shrink-0 shadow-lg">
                <span className="font-serif text-3xl text-[#B79A5B] font-bold">JM</span>
                <span className="text-[0.5625rem] font-mono text-[#F3F0E8]/70 tracking-widest uppercase">
                  CO-FOUNDER
                </span>
                <span className="absolute bottom-1 right-1 w-2 h-2 rounded-full bg-[#B79A5B] ring-2 ring-[#0A0A0A]" />
              </div>

              <div>
                <span className="eyebrow mb-1">CO-FOUNDER & COO</span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F3F0E8] font-semibold leading-tight">
                  Jean Melo
                </h3>
                <div className="text-xs font-mono text-[#B79A5B] mt-1">
                  Operations Architecture + Delivery Systems
                </div>
              </div>
            </div>

            <p className="text-sm text-[#A7A198] leading-relaxed mb-6">
              Engineers the internal operational pathways, CRM routing logic, speed-to-lead
              automation, and downstream outcome tracking. Jean ensures zero dropped details
              between campaign clicks and your sales team's calendar.
            </p>

            <div className="space-y-2.5 pt-4 border-t border-white/[0.06] text-xs text-[#F3F0E8]/90">
              <div className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-[#B79A5B]" />
                <span>Multi-touch qualification workflows & speed-to-lead</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-[#B79A5B]" />
                <span>Attribution integrity & closed-contract tracking</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-[#A7A198]">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-[#B79A5B]" />
              <span>South Florida</span>
            </span>
            <span className="text-[#B79A5B] font-mono text-[0.6875rem]">SYSTEMS ARCHITECT</span>
          </div>
        </div>
      </div>

      {/* Visible Ownership Guarantee Callout */}
      <div className="mt-8 p-5 rounded-xl bg-[#18332B]/30 border border-[#B79A5B]/20 flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <UserCheck className="w-5 h-5 text-[#B79A5B]" />
          <span className="text-xs sm:text-sm text-[#F3F0E8]">
            <strong>Direct Accountability:</strong> You are not handed off to junior account managers.
            Brayan and Jean personally conduct your Growth Diagnostic and architect your system.
          </span>
        </div>
      </div>
    </div>
  );
};
