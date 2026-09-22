export interface AdmissionFormData {
  studentName: string;
  fatherName: string;
  gender: 'male' | 'female';
  dateOfBirth: string;
  grade: string;
  parentPhone: string;
  whatsappSame: boolean;
  parentWhatsapp?: string;
  address: string;
  previousSchool?: string;
  emergencyContact?: string;
  notes?: string;
}

export interface SubmittedApplication extends AdmissionFormData {
  id: string;
  submissionDate: string;
  status: 'Pending Review' | 'Interview Scheduled' | 'Confirmed';
  trackingNumber: string;
}

export interface ProgramInfo {
  id: string;
  title: string;
  ageGroup: string;
  description: string;
  highlights: string[];
  timing: string;
  subjects: string[];
  badge: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  points: string[];
  color: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  points: string[];
  color: string;
}
