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
