import React, { useState } from 'react';
import { 
  X, 
  GraduationCap, 
  CheckCircle2, 
  Phone, 
  MessageCircle, 
  Printer, 
  Sparkles, 
  User, 
  MapPin, 
  BookOpen, 
  Calendar,
  AlertCircle
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import { AdmissionFormData, SubmittedApplication } from '../types';
import { SchoolLogo } from './SchoolLogo';

interface AdmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplicationSubmitted: (app: SubmittedApplication) => void;
}

export const AdmissionModal: React.FC<AdmissionModalProps> = ({
  isOpen,
  onClose,
  onApplicationSubmitted,
}) => {
  const [formData, setFormData] = useState<AdmissionFormData>({
    studentName: '',
    fatherName: '',
    gender: 'male',
    dateOfBirth: '',
    grade: 'Playgroup',
    parentPhone: '',
    whatsappSame: true,
    parentWhatsapp: '',
    address: 'Bijar',
    previousSchool: '',
    emergencyContact: '',
    notes: '',
  });

  const [submittedSlip, setSubmittedSlip] = useState<SubmittedApplication | null>(null);
  const [errorMsg, setErrorMsg] = useState<string>('');

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.studentName.trim() || !formData.fatherName.trim()) {
      setErrorMsg('Please enter student name and father/guardian name.');
      return;
    }
    if (!formData.parentPhone.trim()) {
      setErrorMsg('Please enter a parent contact phone number.');
      return;
    }

    const trackingNum = `CES-${Math.floor(1000 + Math.random() * 9000)}`;
    const newApplication: SubmittedApplication = {
      ...formData,
      id: `app_${Date.now()}`,
      submissionDate: new Date().toLocaleDateString('en-PK', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }),
      status: 'Pending Review',
      trackingNumber: trackingNum,
    };

    // Save to local storage
    try {
      const existing = JSON.parse(localStorage.getItem('ces_admissions') || '[]');
      localStorage.setItem('ces_admissions', JSON.stringify([newApplication, ...existing]));
    } catch {
      // Local storage fallback
    }

    setSubmittedSlip(newApplication);
    onApplicationSubmitted(newApplication);
  };

  const getWhatsAppMessage = (app: SubmittedApplication) => {
    const text = `*NEW ONLINE ADMISSION APPLICATION*
*School:* The Concept Education System Bijar
*Application ID:* ${app.trackingNumber}
*Student Name:* ${app.studentName}
*Father Name:* ${app.fatherName}
*Grade Applied:* ${app.grade}
*Gender:* ${app.gender === 'male' ? 'Boy' : 'Girl'}
*Date of Birth:* ${app.dateOfBirth || 'Not specified'}
*Parent Phone:* ${app.parentPhone}
*Address:* ${app.address}
*Previous School:* ${app.previousSchool || 'None'}
*Notes:* ${app.notes || 'None'}

Please schedule our admission assessment/interview. JazakAllah!`;
    return `https://wa.me/923049315158?text=${encodeURIComponent(text)}`;
  };

  const handlePrint = () => {
    window.print();
  };

  const handleReset = () => {
    setSubmittedSlip(null);
    setFormData({
      studentName: '',
      fatherName: '',
      gender: 'male',
      dateOfBirth: '',
      grade: 'Playgroup',
      parentPhone: '',
      whatsappSame: true,
      parentWhatsapp: '',
      address: 'Bijar',
      previousSchool: '',
      emergencyContact: '',
      notes: '',
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 my-8">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-blue-700 via-sky-600 to-blue-800 text-white p-5 sm:p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <SchoolLogo size="sm" lightText={true} />
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-amber-300">
                Official Admissions Portal
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-serif-crest text-white">
                {submittedSlip ? 'Admission Confirmation Slip' : 'Online Student Admission Form'}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {submittedSlip ? (
            /* Confirmation Voucher View */
            <div className="space-y-6">
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-center">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
                <h4 className="text-lg font-bold text-emerald-900">
                  Application Successfully Submitted!
                </h4>
                <p className="text-xs text-emerald-700 mt-1">
                  Your admission inquiry has been recorded. Our admissions desk will contact you shortly.
                </p>
              </div>

              {/* Printable Official Slip Card */}
              <div
                id="printable-slip"
                className="border-2 border-dashed border-slate-300 rounded-2xl p-6 bg-slate-50 space-y-4 text-slate-800 relative"
              >
                <div className="flex items-center justify-between border-b pb-3 border-slate-200">
                  <div>
                    <h5 className="font-serif-crest font-bold text-base text-slate-900">
                      The Concept Education System
                    </h5>
                    <p className="text-xs text-blue-700 font-semibold">
                      Bijar Campus (Near Madni Public Model High School)
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-500 uppercase font-bold block">
                      Application Slip
                    </span>
                    <span className="text-xs font-black font-mono bg-amber-200 text-slate-900 px-2 py-0.5 rounded">
                      {submittedSlip.trackingNumber}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-slate-500 block">Student Name:</span>
                    <strong className="text-sm text-slate-900">{submittedSlip.studentName}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Father / Guardian:</span>
                    <strong className="text-sm text-slate-900">{submittedSlip.fatherName}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Grade Applying For:</span>
                    <span className="font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded inline-block">
                      {submittedSlip.grade}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Gender:</span>
                    <span className="capitalize font-semibold text-slate-800">{submittedSlip.gender}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Parent Contact:</span>
                    <strong className="font-mono text-slate-900">{submittedSlip.parentPhone}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Submission Date:</span>
                    <span className="text-slate-800">{submittedSlip.submissionDate}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-slate-500 block">Address:</span>
                    <span className="text-slate-800">{submittedSlip.address}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200 text-[11px] text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-2">
                  <span>Helpline / Office: <strong>{SCHOOL_INFO.phoneFormatted}</strong></span>
                  <span>Motto: &ldquo;{SCHOOL_INFO.tagline}&rdquo;</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <a
                  href={getWhatsAppMessage(submittedSlip)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm rounded-xl shadow flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Send Details to School WhatsApp (03049315158)</span>
                </a>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={handlePrint}
                    className="py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl flex items-center justify-center gap-2 border border-slate-300 transition-colors cursor-pointer"
                  >
                    <Printer className="w-4 h-4 text-slate-600" />
                    <span>Print Voucher</span>
                  </button>
                  <button
                    onClick={handleReset}
                    className="py-2.5 px-4 bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold text-xs rounded-xl flex items-center justify-center gap-2 border border-blue-200 transition-colors cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4 text-blue-600" />
                    <span>Submit Another</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Interactive Admission Form */
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-900 flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Limited Seats:</strong> Admissions are open for Playgroup, Nursery, Prep, Primary, and Middle classes. Fill out the details below to secure priority consideration.
                </span>
              </div>

              {errorMsg && (
                <div className="bg-rose-50 border border-rose-200 rounded-xl p-3 text-xs text-rose-700 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-600" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Student Info */}
              <div className="space-y-4">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 border-b pb-1">
                  1. Student Information
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Student Full Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="studentName"
                        value={formData.studentName}
                        onChange={handleChange}
                        placeholder="e.g. Muhammad Ali"
                        required
                        className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      />
                      <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Father / Guardian Name *
                    </label>
                    <input
                      type="text"
                      name="fatherName"
                      value={formData.fatherName}
                      onChange={handleChange}
                      placeholder="e.g. Tariq Mehmood"
                      required
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Grade / Class Applying For *
                    </label>
                    <select
                      name="grade"
                      value={formData.grade}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white font-medium"
                    >
                      <option value="Playgroup">Playgroup (Early Childhood)</option>
                      <option value="Nursery">Nursery</option>
                      <option value="Prep / KG">Prep / Kindergarten</option>
                      <option value="Class 1st">Class 1st</option>
                      <option value="Class 2nd">Class 2nd</option>
                      <option value="Class 3rd">Class 3rd</option>
                      <option value="Class 4th">Class 4th</option>
                      <option value="Class 5th">Class 5th</option>
                      <option value="Class 6th">Class 6th</option>
                      <option value="Class 7th">Class 7th</option>
                      <option value="Class 8th / 9th">Class 8th / 9th</option>
                      <option value="Quran & Tajweed Special Wing">Dedicated Quran & Tajweed Academy</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Gender *
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setFormData((p) => ({ ...p, gender: 'male' }))}
                        className={`py-2 text-xs font-bold rounded-lg border transition-all ${
                          formData.gender === 'male'
                            ? 'bg-blue-600 text-white border-blue-600'
                            : 'bg-slate-50 text-slate-700 border-slate-300 hover:bg-slate-100'
                        }`}
                      >
                        Boy / Male
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData((p) => ({ ...p, gender: 'female' }))}
                        className={`py-2 text-xs font-bold rounded-lg border transition-all ${
                          formData.gender === 'female'
                            ? 'bg-blue-600 text-white border-blue-600'
                            : 'bg-slate-50 text-slate-700 border-slate-300 hover:bg-slate-100'
                        }`}
                      >
                        Girl / Female
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Previous School (if any)
                    </label>
                    <input
                      type="text"
                      name="previousSchool"
                      value={formData.previousSchool}
                      onChange={handleChange}
                      placeholder="e.g. None / Fresh Admission"
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Parent Contact */}
              <div className="space-y-4 pt-2">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 border-b pb-1">
                  2. Parent / Guardian Contact Details
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Phone Number (Call / SMS) *
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="parentPhone"
                        value={formData.parentPhone}
                        onChange={handleChange}
                        placeholder="0300-1234567"
                        required
                        className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      />
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Home Address / Mohallah *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="e.g. Near Madni High School, Bijar"
                        required
                        className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      />
                      <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Special Inquiries or Questions
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={2}
                    placeholder="Any specific questions about fee, school transport, or syllabus..."
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-3 border-t border-slate-200">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-500 hover:to-yellow-500 text-slate-950 font-black text-sm uppercase tracking-wider rounded-xl shadow-lg transition-transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <GraduationCap className="w-5 h-5 text-slate-950" />
                  <span>SUBMIT ADMISSION APPLICATION</span>
                </button>
                <p className="text-[11px] text-center text-slate-500 mt-2">
                  No online payment required. Application is submitted directly to the Bijar campus office.
                </p>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
