export interface Nanny {
  id: number;
  name: string;
  title: string;
  location: string;
  experience: string;
  isSaved: boolean;
  imageUrl: string;
}

export type ExperienceRange = '0' | '1-2' | '3-4' | '5-7' | '8-9' | '10-15' | '15+';
export type EducationLevel = 'all' | 'highSchool' | 'certification' | 'associate' | 'bachelor' | 'master';
export type ViewMode = 'grid' | 'list';

export type TWorkExperience = {
  job_title: string;
  company_name: string;
  location: string;
  start_date: string;
  end_date: string;
  currently_work: boolean;
  details: string;
  _id: string;
};


export type ICandidateDetails = {
  _id: string;
  authId: string;
  name: string;
  profile_image: string;
  job_title: string[];
  job_seeking: string[];
  email: string;
  availability: string[];
  phone_number: string;
  address: string;
  skill: string[];
  alert_job_type: string[];
  profile_private: boolean;
  careerObjective: string;
  status: string;
  work_experience: {
    job_title: string;
    company_name: string;
    location: string;
    start_date: string; // ISO string
    end_date: string;   // ISO string
    currently_work: boolean;
    details: string;
    _id: string;
  }[];
  profile_access: string[];
  createdAt: string; // ISO string
  updatedAt: string; // ISO string
  __v: number;
  locations: {
    type: string;
    coordinates: [number, number];
    _id: string;
  };
  details: string;
  education: string;
  experience: string;
  availabil_date: string;
  resume: string;
};
