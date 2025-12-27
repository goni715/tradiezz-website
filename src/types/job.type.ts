/* eslint-disable @typescript-eslint/no-explicit-any */

export interface IJob {
  title: string;
  company: string;
  logo?: string;
  logoBackground: string;
  location: string;
  type: string;
  salary: string;
  timeRemaining?: string;
  status: "active" | "expired" | "expiring";
}

export type TJob = {
  id: number;
  company:string;
  logo: string;
  logoColor: string;
  featured: boolean;
  location: string;
  title: string;
  salary: string;
  type: string;
  category: string;
  bookmarked: boolean;
  daysRemaining: number;
  logoText: string;
};


export type ISubscription = {
  tier: string;
  price: number;
  description: string;
  features: string[];
  recommended?: boolean;
};


export interface TCandidateJob {
  _id: string;
  title: string;
  jobType: "freelance" | "full_time" | "part_time" | string;
  experience: "entry_level" | "1_2_years" | "3_5_years" | "5_plus_years" | string;
  rateType: "hourly" | "daily" | "monthly" | string;
  startDate: string;  // ISO date string
  endDate: string;    // ISO date string
  deadline: string;   // ISO date string
  minRange: number;
  maxRange: number;
  address: string;
  postalCode: string;
  categoryId: string;
  category: string;
  createdAt: string;
  updatedAt: string;
}



export type TEmployerJob = {
  _id: string;
  authId: string;
  userId: string;
  title: string;
  category: {
    _id: string;
    category: string;
    image: string;
    __v: number;
  };
  experience: string;
  types: string;
  education: string;
  skill: string[];
  salary: number;
  rate: string;
  vacancies: number;
  application_dateline: string; // ISO string
  locations: {
    type: string;
    coordinates: [number, number];
    _id: string;
  };
  descriptions: string;
  applications: any[]; // If you know the structure, replace 'any'
  favorite: any[]; // If you know the structure, replace 'any'
  status: string;
  job_pattern: string;
  address: string;
  createdAt: string; // ISO string
  updatedAt: string; // ISO string
};


export type IFindJob = {
  _id: string;
  userId: {
    _id: string;
    name: string;
    profile_image: string | null;
  };
  title: string;
  category: {
    _id: string;
    category: string;
    image: string;
    createdAt: string; // ISO string
    updatedAt: string; // ISO string
    __v: number;
  };
  salary: number;
  rate: string;
  vacancies: number;
  postalCode: string;
  experience: string; // e.g., "4_6_years"
  types: string;      // e.g., "fixedterm_contract"
  education: string;  // e.g., "apprenticeship"
  descriptions: string;
  application_dateline: string; // ISO string
  skill: string[];
  job_pattern: string;
  locations: {
    type: string; // likely "Point"
    coordinates: [number, number]; // [longitude, latitude]
    _id: string;
  };
  address: string;
  createdAt: string; // ISO string
  isFavorite: boolean;
};


export type TAppliedJob = {
  _id: string;
  userId: string;
  jobId: {
    _id: string;
    authId: string;
    userId: {
      _id: string;
      profile_image: string | null;
      years_of_establishment: number | null;
      socialMedia: {
        _id: string;
      };
      company: {
        name: string;
        employer_position: string;
        details: string;
        website_link: string | null;
        _id: string;
      };
    };
    title: string;
    category: {
      _id: string;
      category: string;
      image: string;
    };
    experience: string;
    types: string;
    education: string;
    skill: string[];
    vacancies: number;
    application_dateline: string;
    locations: {
      type: string;
      coordinates: [number, number];
      _id: string;
    };
    descriptions: string;
    applications: string[];
    favorite: string[];
    status: string;
    job_pattern: string;
    address: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  resume: string;
  createdAt: string;
  updatedAt: string;
};

export type TJobType = 'full_time' | 'part_time' | 'freelance' | 'contact';
export type TJobExperience = 'apprentice' | 'newly_qualified' | '1_3_years' | '3_5_years' | '5_years_plus' | 'n/a';
export type TJobRateType = 'hourly' | 'daily' | 'weekly' | 'monthly' | 'annual';

export type IMyJob = {
  _id: string;
  title: string;
  jobType: TJobType;
  experience: TJobExperience;
  rateType: TJobRateType;
  startDate: string;   // ISO date string
  endDate: string;     // ISO date string
  deadline: string;    // ISO date string
  minRange: number;
  maxRange: number;
  address: string;
  postalCode: string;
  categoryId: string;
  category: string;
  applications: number;
  status: "visible" | "hidden";
  createdAt: string;   // ISO date string
  updatedAt: string;   // ISO date string
};
