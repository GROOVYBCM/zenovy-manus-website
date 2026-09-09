import React, { useState } from "react";
import { Link } from "wouter";
import { SiteHeader, SiteFooter } from "@/components/Navigation";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ArrowRight, HelpCircle, Layers } from "lucide-react";

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Working with Zenovy",
    "Growth Diagnostic",
    "Leads & Growth Systems",
    "Marketing & Tracking",
    "Results & Expectations",
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F3F0E8] flex flex-col selection:bg-[#B79A5B]/30">
      <SiteHeader />

      <main className="flex-1 pt-28 pb-24 md:pt-36">
        {/* Page Hero */}
        <section className="site-container mb-12">
          <div className="max-w-3xl">
            <span className="eyebrow mb-3">KNOWLEDGE BASE & FAQ</span>
            <h1 className="font-serif text-4xl sm:text-6xl text-[#F3F0E8] font-medium tracking-tight mb-6 leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-base sm:text-xl text-[#A7A198] leading-relaxed">
              Every detail regarding how Zenovy operates, our qualification standards, 
              speed-to-lead benchmarks, tracking mechanics, and commercial boundaries.
            </p>
          </div>
        </section>

        {/* Category Filter Pills */}
        <section className="site-container mb-10">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs uppercase tracking-wider font-semibold py-2.5 px-4 rounded-full border whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? "bg-[#B79A5B] text-[#0A0A0A] border-[#B79A5B]"
                    : "bg-[#141413] text-[#A7A198] border-white/[0.08] hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Accordion Component with Search */}
        <section className="site-container mb-24">
          <div className="max-w-4xl">
            <FAQAccordion
              categoryFilter={selectedCategory === "All" ? undefined : selectedCategory}
              showSearch={true}
            />
          </div>
        </section>

        {/* Still Have Questions CTA */}
        <section className="site-container text-center">
          <div className="max-w-2xl mx-auto bg-[#18332B]/40 border border-[#B79A5B]/30 rounded-2xl p-10">
            <span className="eyebrow mb-2">HAVE A SPECIFIC SCENARIO?</span>
            <h2 className="font-serif text-3xl text-[#F3F0E8] font-medium mb-4">
              Discuss your pipeline directly.
            </h2>
            <p className="text-sm text-[#D8D4CC] mb-8">
              Book a Growth Diagnostic to examine your numbers, trade capacity, and current lead leakage.
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
