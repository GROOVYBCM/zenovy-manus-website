import React, { useState } from "react";
import { 
  Compass, 
  Target, 
  Filter, 
  ShieldCheck, 
  ArrowUpRight, 
  BarChart3,
  RefreshCw,
  Award,
  Zap,
  CheckCircle2
} from "lucide-react";

interface Stage {
  number: string;
  code: string;
  title: string;
  tagline: string;
  summary: string;
  mechanisms: string[];
  icon: React.ComponentType<{ className?: string }>;
}

const STAGES: Stage[] = [
  {
    number: "01",
    code: "FIND_OPP",
    title: "Find Opportunity",
    tagline: "Choose the services, areas, and project types worth building demand around.",
    summary:
      "Growth starts by auditing unit economics. We identify high-margin zip codes, roof replacements over minor repairs, complete kitchen expansions over basic handiwork, and define the commercial profile of your ideal job.",
    mechanisms: ["High-ticket geo-targeting", "Margin & job-type screening", "Competitive density mapping"],
    icon: Compass,
  },
  {
    number: "02",
    code: "CREATE_DEMAND",
    title: "Create Demand",
    tagline: "Put a clear offer in front of homeowners who can realistically buy the work.",
    summary:
      "We design bespoke campaign architectures tailored to affluent, ready-to-invest homeowners with verified equity and intent, removing low-ball tire-kickers before they enter your pipeline.",
    mechanisms: ["Custom landing experiences", "High-intent search & social offers", "Transparent local positioning"],
    icon: Target,
  },
  {
    number: "03",
    code: "IDENTIFY_WHO_MATTERS",
    title: "Identify Who Matters",
    tagline: "Separate serious projects from noise before your team burns time on both.",
    summary:
      "Every inquiry is scored against budget thresholds, homeowner status, property timeline, and geographic validity. Unqualified leads are tactfully filtered so your estimators only travel for real projects.",
    mechanisms: ["Pre-qualification screening logic", "Scope & timeline verification", "Address & zoning validation"],
    icon: Filter,
  },
  {
    number: "04",
    code: "PROTECT_CONVERT",
    title: "Protect + Convert",
    tagline: "Reply quickly, follow up, confirm appointments, and recover stalled opportunities.",
    summary:
      "Speed-to-lead under 3 minutes via automated multi-touch workflows, immediate calendar reservation, proactive SMS reminders, and multi-channel re-engagement for quiet homeowners.",
    mechanisms: ["<3 minute response workflows", "Smart calendar self-booking", "Stalled inquiry reactivation"],
    icon: ShieldCheck,
  },
  {
    number: "05",
    code: "HAND_OFF_SALES",
    title: "Hand Off to Sales",
    tagline: "Give your team the context it needs before the sales conversation starts.",
    summary:
      "Your estimator receives a structured brief with property photos, verified budget expectations, homeowner notes, and appointment confirmation prior to pulling into their driveway.",
    mechanisms: ["Diagnostic pre-call briefing dossiers", "Clean CRM contact synchronization", "Frictionless rep dispatching"],
    icon: ArrowUpRight,
  },
  {
    number: "06",
    code: "LEARN_IMPROVE",
    title: "Learn + Improve",
    tagline: "Connect downstream outcomes back to the source so future decisions use real data.",
    summary:
      "We track which campaign source, headline, and zip code turned into actual signed contracts, feeding closed-revenue signals back into acquisition targeting.",
    mechanisms: ["Closed-estimate attribution", "Downstream CAC by project type", "Continuous algorithmic feedback"],
    icon: BarChart3,
  },
];

export const GrowthArchitectureSystem: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);

  return (
    <div className="w-full flex flex-col gap-8">
      {/* Supporting Infrastructure Rails Banner */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-xl bg-[#141413] border border-[#B79A5B]/20">
        <div className="flex items-start gap-3.5 p-3 rounded-lg bg-[#0A0A0A]/60 border border-white/[0.04]">
          <Award className="w-5 h-5 text-[#B79A5B] shrink-0 mt-0.5" />
          <div>
            <div className="text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[#B79A5B]">
              TRUST INFRASTRUCTURE LANE
            </div>
            <p className="text-xs text-[#A7A198] mt-1 leading-snug">
              Continuous proof, localized reviews, and verified contractor authority supporting every stage.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3.5 p-3 rounded-lg bg-[#0A0A0A]/60 border border-white/[0.04]">
          <RefreshCw className="w-5 h-5 text-[#B79A5B] shrink-0 mt-0.5" />
          <div>
            <div className="text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[#B79A5B]">
              OPPORTUNITY RECOVERY LOOP
            </div>
            <p className="text-xs text-[#A7A198] mt-1 leading-snug">
              Re-engages quiet leads, missed consults, and postponed estimates back into the conversion flow.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3.5 p-3 rounded-lg bg-[#0A0A0A]/60 border border-white/[0.04]">
          <Zap className="w-5 h-5 text-[#B79A5B] shrink-0 mt-0.5" />
          <div>
            <div className="text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[#B79A5B]">
              GROWTH INTELLIGENCE LOOP
            </div>
            <p className="text-xs text-[#A7A198] mt-1 leading-snug">
              Sends signed deal revenue downstream back into upstream acquisition parameters.
            </p>
          </div>
        </div>
      </div>

      {/* The 6 Stages Grid (Horizontal flow on Desktop, 2x3 on Tablet, Vertical Spine on Mobile) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
        {STAGES.map((stage, idx) => {
          const Icon = stage.icon;
          const isSelected = activeStage === idx;

          return (
            <button
              key={stage.number}
              type="button"
              onClick={() => setActiveStage(idx)}
              className={`text-left p-4 rounded-xl transition-all duration-200 relative flex flex-col justify-between min-h-[170px] ${
                isSelected
                  ? "bg-[#18332B] border border-[#B79A5B] shadow-lg shadow-black/50"
                  : "bg-[#141413] border border-white/[0.06] hover:border-[#B79A5B]/40 hover:bg-[#1a1a18]"
              }`}
            >
              {/* Stage Number & Signal Indicator */}
              <div className="flex items-center justify-between w-full mb-3">
                <span
                  className={`text-xs font-mono font-bold tracking-wider ${
                    isSelected ? "text-[#F3F0E8]" : "text-[#B79A5B]"
                  }`}
                >
                  {stage.number}
                </span>
                <span
                  className={`w-2 h-2 rounded-full transition-all ${
                    isSelected ? "bg-[#B79A5B] ring-4 ring-[#B79A5B]/20" : "bg-white/20"
                  }`}
                />
              </div>

              <div>
                <Icon
                  className={`w-5 h-5 mb-2 transition-colors ${
                    isSelected ? "text-[#B79A5B]" : "text-[#A7A198]"
                  }`}
                />
                <h4 className="font-serif text-base text-[#F3F0E8] font-semibold leading-tight mb-1">
                  {stage.title}
                </h4>
                <p className="text-[0.75rem] text-[#A7A198] line-clamp-2 leading-relaxed">
                  {stage.tagline}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-white/[0.08] flex items-center justify-between text-[0.6875rem] text-[#B79A5B] font-medium">
                <span>{isSelected ? "Inspecting" : "Inspect"}</span>
                <span>→</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Deep-Dive Stage Detail Panel */}
      <div className="bg-[#141413] border border-[#B79A5B]/30 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
        <div
          className="absolute -right-16 -top-16 w-64 h-64 bg-[#B79A5B]/5 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="flex flex-col lg:flex-row gap-8 items-start justify-between relative z-10">
          <div className="lg:max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-mono text-[#B79A5B] uppercase tracking-wider px-2.5 py-1 bg-[#0A0A0A] rounded border border-[#B79A5B]/20">
                STAGE {STAGES[activeStage].number} ARCHITECTURE
              </span>
              <span className="text-xs text-[#A7A198]">
                {STAGES[activeStage].code}
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-[#F3F0E8] mb-3">
              {STAGES[activeStage].title}
            </h3>

            <p className="text-sm sm:text-base text-[#A7A198] leading-relaxed mb-6">
              {STAGES[activeStage].summary}
            </p>

            <div className="space-y-2">
              <div className="text-[0.6875rem] uppercase tracking-[0.16em] font-bold text-[#B79A5B]">
                SYSTEM MECHANISMS ACTIVATED:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {STAGES[activeStage].mechanisms.map((mech) => (
                  <div
                    key={mech}
                    className="flex items-center gap-2 p-2.5 rounded bg-[#0A0A0A] border border-white/[0.06] text-xs text-[#F3F0E8]"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B79A5B] shrink-0" />
                    <span>{mech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-72 bg-[#0A0A0A] border border-white/[0.08] p-5 rounded-xl flex flex-col justify-between shrink-0">
            <div>
              <span className="text-[0.625rem] tracking-[0.18em] uppercase text-[#A7A198] font-bold">
                OPERATIONAL HANDOFF
              </span>
              <p className="text-xs text-[#F3F0E8] mt-2 leading-relaxed">
                Stage {STAGES[activeStage].number} hands verified, scored data forward into Stage{" "}
                {STAGES[(activeStage + 1) % STAGES.length].number}. Zero friction, zero leaked details.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/[0.08]">
              <span className="text-[0.6875rem] text-[#B79A5B] font-mono">
                STATUS: READY FOR AUDIT
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
