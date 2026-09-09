import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { ZenovyLogo } from "./BrandMarks";
import { Menu, X, ArrowRight, ShieldCheck, Mail, MapPin } from "lucide-react";

export const SiteHeader: React.FC = () => {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { href: "/how-it-works", label: "How It Works" },
    { href: "/results", label: "Results" },
    { href: "/about", label: "About" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled
            ? "bg-[#0A0A0A]/92 backdrop-blur-md border-b border-[#B79A5B]/15 shadow-lg shadow-black/40 py-3.5"
            : "bg-[#0A0A0A]/60 backdrop-blur-sm border-b border-white/[0.04] py-5"
        }`}
      >
        <div className="site-container flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="inline-flex items-center group">
            <ZenovyLogo variant="full" size="md" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs uppercase tracking-[0.14em] font-medium transition-colors duration-180 relative py-1 ${
                    isActive
                      ? "text-[#B79A5B]"
                      : "text-[#A7A198] hover:text-[#F3F0E8]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#B79A5B]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Header CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <Link
              href="/diagnostic"
              className="btn-primary text-xs tracking-wider font-semibold py-2.5 px-5"
            >
              <span>Book a Growth Diagnostic</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#F3F0E8] hover:text-[#B79A5B] transition-colors focus:outline-none focus:ring-1 focus:ring-[#B79A5B]"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#0A0A0A]/98 backdrop-blur-xl md:hidden pt-28 px-6 pb-12 flex flex-col justify-between border-b border-[#B79A5B]/20"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex flex-col gap-6">
            <span className="eyebrow">NAVIGATION</span>
            <div className="flex flex-col gap-5">
              <Link
                href="/"
                className={`text-2xl font-serif tracking-tight transition-colors ${
                  location === "/" ? "text-[#B79A5B]" : "text-[#F3F0E8]"
                }`}
              >
                Overview
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-2xl font-serif tracking-tight transition-colors ${
                    location === link.href ? "text-[#B79A5B]" : "text-[#F3F0E8]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/faq"
                className={`text-2xl font-serif tracking-tight transition-colors ${
                  location === "/faq" ? "text-[#B79A5B]" : "text-[#F3F0E8]"
                }`}
              >
                Frequently Asked Questions
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4 pt-8 border-t border-white/10">
            <div className="text-xs text-[#A7A198] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#B79A5B]" />
              <span>Diagnose before Build. Build before Scale.</span>
            </div>
            <Link
              href="/diagnostic"
              className="btn-primary w-full py-3.5 text-center text-sm"
            >
              Book a Growth Diagnostic
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export const SiteFooter: React.FC = () => {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#B79A5B]/18 pt-16 pb-12 relative overflow-hidden">
      {/* Subtle background line */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#B79A5B]/40 to-transparent"
        aria-hidden="true"
      />

      <div className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col items-start gap-5">
            <ZenovyLogo variant="full" size="md" />
            <p className="text-sm text-[#A7A198] leading-relaxed max-w-sm">
              Installed growth infrastructure for high-ticket residential contractors.
              We architect the path from initial homeowner inquiry through qualification,
              response, and estimate handoff.
            </p>
            <div className="flex flex-col gap-2 pt-2 text-xs text-[#A7A198]">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#B79A5B]" />
                <span>Miami & South Florida — Commercial Headquarters</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#B79A5B]" />
                <a
                  href="mailto:info@zenovy.net"
                  className="hover:text-[#B79A5B] transition-colors"
                >
                  info@zenovy.net
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="eyebrow mb-2">SYSTEM NAVIGATION</span>
            <Link
              href="/how-it-works"
              className="text-sm text-[#A7A198] hover:text-[#B79A5B] transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="/results"
              className="text-sm text-[#A7A198] hover:text-[#B79A5B] transition-colors"
            >
              Client Evidence (Marakas)
            </Link>
            <Link
              href="/about"
              className="text-sm text-[#A7A198] hover:text-[#B79A5B] transition-colors"
            >
              Founders & Philosophy
            </Link>
            <Link
              href="/faq"
              className="text-sm text-[#A7A198] hover:text-[#B79A5B] transition-colors"
            >
              Knowledge & FAQs
            </Link>
            <Link
              href="/diagnostic"
              className="text-sm text-[#B79A5B] hover:underline transition-all font-medium"
            >
              Book a Growth Diagnostic →
            </Link>
          </div>

          {/* Core Philosophy Callout */}
          <div className="md:col-span-4 bg-[#141413] border border-white/[0.06] rounded-xl p-6 relative">
            <div className="text-[0.6875rem] font-bold tracking-[0.16em] uppercase text-[#B79A5B] mb-2">
              COMMERCIAL BOUNDARY
            </div>
            <p className="text-xs text-[#A7A198] leading-relaxed mb-4">
              Zenovy owns the growth system up to a sales-ready opportunity.
              Your team retains full ownership of pricing, sales conversations,
              craftsmanship, and closing.
            </p>
            <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[0.6875rem] text-[#F3F0E8]/70">
              <span>Operating in South Florida & Select US Regions</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A7A198]">
          <p>© {new Date().getFullYear()} Zenovy LLC. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/faq" className="hover:text-[#F3F0E8] transition-colors">
              FAQ
            </Link>
            <span className="text-white/15">•</span>
            <Link href="/diagnostic" className="hover:text-[#F3F0E8] transition-colors">
              Diagnostic
            </Link>
            <span className="text-white/15">•</span>
            <span className="text-[#A7A198]/60">Quiet Performance Luxury</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
