export interface Nanny {
  id: number;
  name: string;
  title: string;
  location: string;
  experience: number;
  isSaved: boolean;
  imageUrl: string;
}

export type ExperienceRange = '0' | '1-2' | '3-4' | '5-7' | '8-9' | '10-15' | '15+';
export type EducationLevel = 'all' | 'highSchool' | 'certification' | 'associate' | 'bachelor' | 'master';
export type ViewMode = 'grid' | 'list';