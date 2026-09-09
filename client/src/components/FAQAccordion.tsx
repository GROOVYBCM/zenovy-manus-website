import React, { useState } from "react";
import { ChevronDown, Search, ArrowRight, HelpCircle } from "lucide-react";
import { Link } from "wouter";

export interface FAQItem {
  q: string;
  a: string;
  category: "Working with Zenovy" | "Growth Diagnostic" | "Leads & Growth Systems" | "Marketing & Tracking" | "Results & Expectations";
}

export const MASTER_FAQS: FAQItem[] = [
  // Working with Zenovy
  {
    category: "Working with Zenovy",
    q: "What does Zenovy actually do?",
    a: "Zenovy installs and manages complete growth infrastructure for high-ticket residential contractors. Rather than acting as a superficial ad buyer, we build and run the entire operational chain: targeting high-margin services, capturing qualified homeowner intent, pre-screening project scope and budget, driving rapid multi-touch follow-up, and passing sales-ready opportunities directly into your estimators' schedules with full context.",
  },
  {
    category: "Working with Zenovy",
    q: "Who does Zenovy work with?",
    a: "We work exclusively with high-ticket residential home-service companies where a single completed project carries meaningful economic value. Typical partners specialize in roofing, HVAC system replacements, luxury remodeling, kitchen and bath expansions, hardscaping, custom pools, and window & door replacements.",
  },
  {
    category: "Working with Zenovy",
    q: "Does Zenovy only work in South Florida?",
    a: "Our commercial headquarters and initial roots are in Miami and South Florida, where we can coordinate in-person diagnostics. However, we also deploy our Growth Architecture remotely for qualified contractors operating across major US metropolitan markets.",
  },
  {
    category: "Working with Zenovy",
    q: "What makes Zenovy different from a typical lead-generation agency?",
    a: "Traditional agencies sell raw, unvetted contact information and abandon you at the click. Zenovy treats customer acquisition as an installed operational system. We filter out tire-kickers before your estimators waste travel time, automate follow-up within 3 minutes, confirm appointments, recover quiet leads, and track closed job revenue back to the campaign source.",
  },

  // Growth Diagnostic
  {
    category: "Growth Diagnostic",
    q: "What happens during a Growth Diagnostic?",
    a: "A 45-minute working session conducted via Google Meet (or in-person in South Florida). We walk step-by-step through your current pipeline: where your leads originate, response speed, current qualification barriers, where prospects stall, how estimates are handed off to your team, and how accurately you track final contract value. We pinpoint where margin is leaking before recommending any changes.",
  },
  {
    category: "Growth Diagnostic",
    q: "How long does the Diagnostic take and what should I bring?",
    a: "The session takes exactly 45 minutes. You should have rough figures on hand: recent lead volume by channel, average ticket size, approximate close rate, and current technician/estimator calendar capacity.",
  },
  {
    category: "Growth Diagnostic",
    q: "What happens after the Growth Diagnostic?",
    a: "If there is a mutual operational fit, we present a tailored Growth Architecture blueprint outlining the exact infrastructure needed to capture your desired project volume. If we are not the right fit, we tell you transparently and provide actionable diagnostic findings you can keep.",
  },

  // Leads & Growth Systems
  {
    category: "Leads & Growth Systems",
    q: "How does Zenovy qualify homeowner leads?",
    a: "We implement dynamic pre-screening logic on custom landing experiences and intake workflows. Homeowners are verified for property ownership, realistic budget ranges matching your project floor, decision-maker presence, timeline urgency, and geographic zoning before an in-home estimate can be requested.",
  },
  {
    category: "Leads & Growth Systems",
    q: "Does Zenovy replace our sales team?",
    a: "No. Zenovy owns the growth system up to a sales-ready opportunity. Your estimators and sales reps remain the owners of in-home assessments, estimates, relationship building, and contract signatures. We ensure they spend time only with serious, high-margin prospects.",
  },
  {
    category: "Leads & Growth Systems",
    q: "How quickly should new inquiries be contacted?",
    a: "Under 3 minutes. Industry research consistently proves conversion probability drops exponentially after 5 minutes. Zenovy installs instant multi-channel response triggers (automated SMS, email confirmation, and instant callback scheduling) so inquiries are engaged immediately.",
  },
  {
    category: "Leads & Growth Systems",
    q: "What happens when a lead stops responding?",
    a: "Our proprietary Opportunity Recovery Loop automatically deploys polite, persistent multi-touch re-engagement sequences over 14 to 30 days. Stalled inquiries, missed consults, and postponed roof/remodel decisions are gently nudged back to active booking status.",
  },

  // Marketing & Tracking
  {
    category: "Marketing & Tracking",
    q: "How does Zenovy know which marketing sources are actually working?",
    a: "We implement server-side tracking, UTM tagging, and CRM webhook pipelines. Instead of vanity metrics like clicks or impressions, we map every closed contract back to its exact originating keyword, ad creative, and zip code.",
  },
  {
    category: "Marketing & Tracking",
    q: "Can Zenovy work with our existing CRM?",
    a: "Yes. We integrate seamlessly with GoHighLevel, ServiceTitan, Jobber, Housecall Pro, and standard contractor CRMs to maintain uninterrupted data flow without disrupting your team's day-to-day dispatch routines.",
  },
  {
    category: "Marketing & Tracking",
    q: "Is advertising spend included in your fee?",
    a: "No. Ad spend is paid directly to advertising platforms (Google Ads, Meta) through your company's own credit card. This guarantees 100% transparent billing, full account ownership, and prevents agency markup on media budgets.",
  },

  // Results & Expectations
  {
    category: "Results & Expectations",
    q: "Does Zenovy guarantee revenue or closed jobs?",
    a: "No serious growth firm can guarantee revenue because we do not sit in the homeowner's living room or control your pricing, salesmanship, and craftsmanship. We guarantee rigorous operational execution, verified lead qualification, and complete visibility into pipeline performance.",
  },
  {
    category: "Results & Expectations",
    q: "What does Zenovy control versus what the contractor controls?",
    a: "Zenovy controls: demand generation, offer positioning, targeting, pre-screening, speed-to-lead automation, appointment setting, and attribution. The contractor controls: pricing strategy, sales meetings, proposal presentation, job quality, and customer service.",
  },
];

export const FAQAccordion: React.FC<{
  limit?: number;
  categoryFilter?: string;
  showSearch?: boolean;
}> = ({ limit, categoryFilter, showSearch = false }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = MASTER_FAQS.filter((faq) => {
    const matchesCategory = categoryFilter ? faq.category === categoryFilter : true;
    const matchesSearch = searchQuery
      ? faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.a.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return matchesCategory && matchesSearch;
  });

  const displayList = limit ? filtered.slice(0, limit) : filtered;

  return (
    <div className="w-full">
      {showSearch && (
        <div className="relative mb-8 max-w-md">
          <Search className="w-4 h-4 text-[#A7A198] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search questions (e.g. CRM, qualification, South Florida)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#141413] border border-white/[0.08] focus:border-[#B79A5B] rounded-xl pl-10 pr-4 py-3 text-xs text-[#F3F0E8] placeholder:text-[#A7A198]/60 focus:outline-none transition-colors"
          />
        </div>
      )}

      <div className="space-y-3">
        {displayList.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={item.q}
              className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? "bg-[#141413] border-[#B79A5B]/40 shadow-md shadow-black/30"
                  : "bg-[#0A0A0A] border-white/[0.06] hover:border-white/15"
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 select-none"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[0.6875rem] text-[#B79A5B]">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="font-serif text-lg sm:text-xl text-[#F3F0E8] font-medium leading-snug">
                    {item.q}
                  </span>
                </div>
                <div
                  className={`p-1.5 rounded-full border border-white/10 shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180 bg-[#B79A5B]/10 text-[#B79A5B]" : "text-[#A7A198]"
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#A7A198] leading-relaxed border-t border-white/[0.04]">
                  <p>{item.a}</p>
                </div>
              )}
            </div>
          );
        })}

        {displayList.length === 0 && (
          <div className="text-center py-12 text-sm text-[#A7A198]">
            No questions found matching your search. Try another query or contact us directly.
          </div>
        )}
      </div>

      {limit && limit < MASTER_FAQS.length && (
        <div className="mt-8 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B79A5B] hover:underline"
          >
            <span>View all frequently asked questions</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      )}
    </div>
  );
};
