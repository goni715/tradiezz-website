
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
