export type SupportedLanguage = 'vi' | 'en';

export type ProjectCategory = 
  | 'ai-ml'
  | 'computer-vision'
  | 'software-engineering'
  | 'competitive-programming'
  | 'academic-research';

export type AchievementCategory =
  | 'awards'
  | 'scholarships'
  | 'competitions'
  | 'certificates'
  | 'academic-activities'
  | 'research-activities';

export type SkillCategory =
  | 'programming-languages'
  | 'frameworks-libraries'
  | 'ai-ml'
  | 'computer-vision'
  | 'software-development'
  | 'development-tools'
  | 'databases'
  | 'foreign-languages';

export interface LocalizedString {
  vi: string;
  en: string;
}

export interface ProfileData {
  name: LocalizedString;
  headline: LocalizedString;
  institution: LocalizedString;
  faculty: LocalizedString;
  program: LocalizedString;
  currentYear: LocalizedString;
  bio: LocalizedString;
  academicInterests: LocalizedString[];
  careerDirections: {
    title: LocalizedString;
    description: LocalizedString;
  }[];
  contacts: {
    email: string;
    github?: string;
    linkedin?: string;
    collaborationInterests: LocalizedString;
  };
  cv: {
    available: boolean;
    fileName?: string;
    lastUpdated?: string;
  };
  portrait: {
    src: string;
    alt: LocalizedString;
  };
}

export interface EducationEntry {
  id: string;
  institution: LocalizedString;
  degree: LocalizedString;
  major: LocalizedString;
  period: LocalizedString;
  status: LocalizedString;
  description?: LocalizedString;
  relevantCoursework?: LocalizedString[];
  highlights?: LocalizedString[];
}

export interface SkillItem {
  id: string;
  name: string;
  category: SkillCategory;
  description?: LocalizedString;
  evidenceProjectIds?: string[];
  certifications?: string[];
}

export interface SiteSettings {
  siteTitle: LocalizedString;
  siteDescription: LocalizedString;
  author: string;
  repository: string;
  navItems: {
    key: string;
    path: string;
    label: LocalizedString;
  }[];
}
