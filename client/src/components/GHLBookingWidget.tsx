import React, { useState } from "react";
import { useLocation } from "wouter";
import { 
  Calendar as CalendarIcon, 
  Clock, 
  Video, 
  MapPin, 
  CheckCircle, 
  ArrowRight,
  ShieldCheck,
  Building,
  User,
  Mail,
  Phone,
  DollarSign
} from "lucide-react";

export const GHLBookingWidget: React.FC = () => {
  const [, setLocation] = useLocation();

  // Selected date and slot
  const [selectedDate, setSelectedDate] = useState<string>("Tomorrow");
  const [selectedTime, setSelectedTime] = useState<string>("10:00 AM EDT");
  const [locationType, setLocationType] = useState<"meet" | "miami">("meet");

  // Form inputs
  const [contractorName, setContractorName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [trade, setTrade] = useState("Roofing");
  const [avgTicket, setAvgTicket] = useState("$15,000 – $35,000");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const availableDates = ["Tomorrow", "Thursday", "Friday", "Next Monday"];
  const availableTimes = [
    "09:30 AM EDT",
    "11:00 AM EDT",
    "02:00 PM EDT",
    "03:30 PM EDT",
    "05:00 PM EDT",
  ];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Save mock booking data into sessionStorage for the briefing page
    const bookingDetails = {
      contractorName: contractorName || "Contractor Executive",
      companyName: companyName || "Residential Home Services LLC",
      trade,
      selectedDate,
      selectedTime,
      locationType: locationType === "meet" ? "Google Meet (Video Conference)" : "Miami, FL (In-Person Office Session)",
      email: email || "contractor@example.com",
      bookedAt: new Date().toISOString(),
    };

    sessionStorage.setItem("zenovy_latest_booking", JSON.stringify(bookingDetails));

    // Redirect to Section 30 Post-Booking Briefing page
    setTimeout(() => {
      setIsSubmitting(false);
      setLocation("/diagnostic/briefing");
    }, 700);
  };

  return (
    <div className="w-full bg-[#141413] border border-[#B79A5B]/35 rounded-2xl p-6 sm:p-8 relative shadow-2xl overflow-hidden">
      {/* GHL System Identification Badge */}
      <div className="flex items-center justify-between pb-5 mb-6 border-b border-white/[0.08] text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[#F3F0E8] font-mono tracking-wider font-semibold">
            ZENOVY CALENDAR DISPATCH · GHL ENGINE
          </span>
        </div>
        <span className="text-[#A7A198] text-[0.6875rem]">DIRECT ACCESS TO FOUNDERS</span>
      </div>

      <form onSubmit={handleBookingSubmit} className="space-y-6">
        {/* Step 1: Session Format Choice */}
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-[#B79A5B] mb-2 font-bold">
            01. SESSION VENUE & FORMAT (45 MINUTES)
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setLocationType("meet")}
              className={`p-3.5 rounded-xl border text-left flex items-start gap-3 transition-all ${
                locationType === "meet"
                  ? "bg-[#18332B] border-[#B79A5B] text-[#F3F0E8]"
                  : "bg-[#0A0A0A] border-white/[0.06] text-[#A7A198] hover:border-white/20"
              }`}
            >
              <Video className="w-4 h-4 text-[#B79A5B] shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-[#F3F0E8]">Google Meet Session</div>
                <div className="text-[0.6875rem] text-[#A7A198] mt-0.5">High-resolution screenshare pipeline audit</div>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setLocationType("miami")}
              className={`p-3.5 rounded-xl border text-left flex items-start gap-3 transition-all ${
                locationType === "miami"
                  ? "bg-[#18332B] border-[#B79A5B] text-[#F3F0E8]"
                  : "bg-[#0A0A0A] border-white/[0.06] text-[#A7A198] hover:border-white/20"
              }`}
            >
              <MapPin className="w-4 h-4 text-[#B79A5B] shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-[#F3F0E8]">Miami, FL In-Person</div>
                <div className="text-[0.6875rem] text-[#A7A198] mt-0.5">South Florida coordination by request</div>
              </div>
            </button>
          </div>
        </div>

        {/* Step 2: Date & Time Picker Simulation */}
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-[#B79A5B] mb-2 font-bold">
            02. SELECT TIME WINDOW
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
            {availableDates.map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => setSelectedDate(d)}
                className={`py-2 px-3 rounded-lg text-xs font-medium border text-center transition-all ${
                  selectedDate === d
                    ? "bg-[#B79A5B] text-[#0A0A0A] border-[#B79A5B] font-bold"
                    : "bg-[#0A0A0A] text-[#A7A198] border-white/[0.06] hover:border-white/20"
                }`}
              >
                {d}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {availableTimes.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setSelectedTime(t)}
                className={`py-2 px-2.5 rounded-lg text-xs font-mono border text-center transition-all ${
                  selectedTime === t
                    ? "bg-[#18332B] text-[#F3F0E8] border-[#B79A5B] font-bold ring-1 ring-[#B79A5B]"
                    : "bg-[#0A0A0A] text-[#A7A198] border-white/[0.06] hover:border-white/20"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Step 3: Contractor Qualification & Contact Info */}
        <div className="pt-2 border-t border-white/[0.08]">
          <label className="block text-xs font-mono uppercase tracking-wider text-[#B79A5B] mb-3 font-bold">
            03. COMPANY & PROJECT CONTEXT
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[0.6875rem] text-[#A7A198] mb-1">Your Full Name</label>
              <div className="relative">
                <User className="w-3.5 h-3.5 text-[#A7A198] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Marcus Vance"
                  value={contractorName}
                  onChange={(e) => setContractorName(e.target.value)}
                  className="w-full bg-[#0A0A0A] border border-white/[0.08] focus:border-[#B79A5B] rounded-lg pl-9 pr-3 py-2.5 text-xs text-[#F3F0E8] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-[0.6875rem] text-[#A7A198] mb-1">Company / Brand Name</label>
              <div className="relative">
                <Building className="w-3.5 h-3.5 text-[#A7A198] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Apex Roofing & Exteriors"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full bg-[#0A0A0A] border border-white/[0.08] focus:border-[#B79A5B] rounded-lg pl-9 pr-3 py-2.5 text-xs text-[#F3F0E8] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-[0.6875rem] text-[#A7A198] mb-1">Direct Work Email</label>
              <div className="relative">
                <Mail className="w-3.5 h-3.5 text-[#A7A198] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  placeholder="marcus@apexroofing.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#0A0A0A] border border-white/[0.08] focus:border-[#B79A5B] rounded-lg pl-9 pr-3 py-2.5 text-xs text-[#F3F0E8] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-[0.6875rem] text-[#A7A198] mb-1">Direct Mobile Phone</label>
              <div className="relative">
                <Phone className="w-3.5 h-3.5 text-[#A7A198] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="tel"
                  required
                  placeholder="(305) 555-0199"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#0A0A0A] border border-white/[0.08] focus:border-[#B79A5B] rounded-lg pl-9 pr-3 py-2.5 text-xs text-[#F3F0E8] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-[0.6875rem] text-[#A7A198] mb-1">Primary Residential Trade</label>
              <select
                value={trade}
                onChange={(e) => setTrade(e.target.value)}
                className="w-full bg-[#0A0A0A] border border-white/[0.08] focus:border-[#B79A5B] rounded-lg px-3 py-2.5 text-xs text-[#F3F0E8] focus:outline-none"
              >
                <option value="Roofing">Roofing Replacement & Restoration</option>
                <option value="HVAC">HVAC Complete Systems</option>
                <option value="Remodeling">Custom Home Remodeling / Additions</option>
                <option value="Windows & Doors">Impact Windows & High-End Doors</option>
                <option value="Kitchen & Bath">Luxury Kitchen & Bath</option>
                <option value="Hardscaping / Pools">Hardscaping, Pavers & Custom Pools</option>
                <option value="Flooring / Painting">High-Ticket Flooring & Architectural Painting</option>
              </select>
            </div>

            <div>
              <label className="block text-[0.6875rem] text-[#A7A198] mb-1">Average Completed Ticket Size</label>
              <select
                value={avgTicket}
                onChange={(e) => setAvgTicket(e.target.value)}
                className="w-full bg-[#0A0A0A] border border-white/[0.08] focus:border-[#B79A5B] rounded-lg px-3 py-2.5 text-xs text-[#F3F0E8] focus:outline-none"
              >
                <option value="$8,000 – $15,000">$8,000 – $15,000</option>
                <option value="$15,000 – $35,000">$15,000 – $35,000 (Ideal Floor)</option>
                <option value="$35,000 – $75,000">$35,000 – $75,000</option>
                <option value="$75,000+">$75,000+ (High-End Luxury)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Commercial Ownership Notice */}
        <div className="p-3 bg-[#0A0A0A] border border-white/[0.04] rounded-lg text-[0.6875rem] text-[#A7A198] flex items-center gap-2.5">
          <ShieldCheck className="w-4 h-4 text-[#B79A5B] shrink-0" />
          <span>
            Calendar reserved strictly for high-ticket residential contractors with existing project capacity.
          </span>
        </div>

        {/* Submit Primary CTA */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full py-4 text-xs sm:text-sm uppercase tracking-wider font-bold flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <span>CONFIRMING CALENDAR RESERVATION...</span>
          ) : (
            <>
              <span>Confirm & Lock Growth Diagnostic</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};
