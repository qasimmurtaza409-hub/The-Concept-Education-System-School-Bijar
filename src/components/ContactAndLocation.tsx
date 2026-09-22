import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Mail, 
  Send, 
  CheckCircle2, 
  Navigation,
  School,
  Sparkles
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export const ContactAndLocation: React.FC = () => {
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [inquirySent, setInquirySent] = useState(false);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName.trim() || !inquiryPhone.trim()) return;

    // Open WhatsApp directly with inquiry
    const msg = `*NEW WEBSITE INQUIRY*
*Name:* ${inquiryName}
*Phone:* ${inquiryPhone}
*Question / Inquiry:* ${inquiryMessage || 'Inquiring about school admission & fees'}
*Campus:* The Concept Education System Bijar`;

    const url = `https://wa.me/923049315158?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    setInquirySent(true);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
            Visit &amp; Contact Us
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-serif-crest">
            Campus Location &amp; Inquiries
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-amber-400 to-blue-600 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Conveniently located in Bijar. Parents and guardians are always welcome to tour our campus during office hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Cards & Location Info */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Primary Contact Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-6">
              <h3 className="text-xl font-bold font-serif-crest text-slate-900 flex items-center gap-2">
                <School className="w-6 h-6 text-blue-600" />
                <span>The Concept Education System</span>
              </h3>

              <div className="space-y-4">
                {/* Location */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-extrabold text-slate-400 tracking-wider">
                      Campus Address
                    </h4>
                    <p className="text-base font-bold text-slate-900 mt-0.5">
                      {SCHOOL_INFO.location}
                    </p>
                    <p className="text-xs text-slate-600">
                      {SCHOOL_INFO.city}, {SCHOOL_INFO.province}
                    </p>
                    <span className="inline-block mt-2 text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                      Landmark: Opposite/Near Madni Public Model High School
                    </span>
                  </div>
                </div>

                {/* Direct Phone / Call */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-amber-50/50 border border-amber-200">
                  <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center flex-shrink-0 font-bold">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xs uppercase font-extrabold text-amber-900 tracking-wider">
                      Official Helpline / Admissions
                    </h4>
                    <a
                      href={`tel:${SCHOOL_INFO.phone}`}
                      className="text-lg font-black text-slate-900 hover:text-blue-700 tracking-wider font-mono block mt-0.5"
                    >
                      {SCHOOL_INFO.phoneFormatted}
                    </a>
                    <p className="text-xs text-slate-600">Available Monday through Saturday for calls</p>
                  </div>
                  <a
                    href={`tel:${SCHOOL_INFO.phone}`}
                    className="self-center px-3 py-1.5 bg-amber-400 hover:bg-amber-500 text-slate-950 text-xs font-bold rounded-lg transition-colors"
                  >
                    Call Now
                  </a>
                </div>

                {/* WhatsApp Chat */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-emerald-50/60 border border-emerald-200">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xs uppercase font-extrabold text-emerald-800 tracking-wider">
                      WhatsApp Admissions Desk
                    </h4>
                    <p className="text-sm font-bold text-slate-900 mt-0.5">
                      Chat with Academic Coordinator
                    </p>
                    <p className="text-xs text-slate-600">Get fee details, syllabus &amp; timings instantly</p>
                  </div>
                  <a
                    href={SCHOOL_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-center px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition-colors"
                  >
                    Open Chat
                  </a>
                </div>

                {/* Visiting Hours */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-slate-700 text-white flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-extrabold text-slate-400 tracking-wider">
                      Campus Visiting Hours
                    </h4>
                    <p className="text-sm font-bold text-slate-900 mt-0.5">
                      {SCHOOL_INFO.timings}
                    </p>
                    <p className="text-xs text-slate-500">Friday morning classes close earlier for Jummah prayer</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Parent Quick Inquiry Box */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
            <div className="border-b border-slate-200 pb-4 mb-6">
              <span className="text-[11px] font-black uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                Direct Communication
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-serif-crest text-slate-900 mt-1">
                Send Quick Inquiry to Campus Office
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Have questions regarding fees, school van/transport, books, or uniforms? Send us a quick note and our team will reply promptly.
              </p>
            </div>

            {inquirySent ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-lg font-bold text-emerald-900">
                  Inquiry Dispatched!
                </h4>
                <p className="text-xs text-emerald-700">
                  Your message has been formatted and opened for direct transmission to our campus office. You can also directly call us at <strong>{SCHOOL_INFO.phoneFormatted}</strong>.
                </p>
                <button
                  onClick={() => setInquirySent(false)}
                  className="px-4 py-2 bg-emerald-600 text-white font-bold text-xs rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Name (Parent / Guardian) *
                  </label>
                  <input
                    type="text"
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    placeholder="e.g. Asad Ullah Khan"
                    required
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Mobile / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    value={inquiryPhone}
                    onChange={(e) => setInquiryPhone(e.target.value)}
                    placeholder="0304-xxxxxxx"
                    required
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Question or Message
                  </label>
                  <textarea
                    rows={3}
                    value={inquiryMessage}
                    onChange={(e) => setInquiryMessage(e.target.value)}
                    placeholder="e.g. Inquiring about Class 2 admission criteria and monthly fee structure..."
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-blue-700 hover:bg-blue-800 text-white font-extrabold text-sm uppercase tracking-wider rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry Via WhatsApp</span>
                </button>

                <p className="text-[11px] text-center text-slate-500">
                  Direct connection with <strong>{SCHOOL_INFO.fullName}</strong> administration.
                </p>
              </form>
            )}

            {/* Quick Map & Directions Card */}
            <div className="mt-6 pt-5 border-t border-slate-200">
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 flex items-center justify-between">
                <div>
                  <strong className="text-xs text-slate-800 block">Need Driving / Walking Directions?</strong>
                  <span className="text-[11px] text-slate-500">Located Near Madni Public Model High School, Bijar</span>
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Near Madni Public Model High School, Bijar')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-xs font-bold text-blue-700 bg-white border border-slate-300 rounded-lg hover:bg-blue-50 transition-colors flex items-center gap-1.5"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open Map</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
