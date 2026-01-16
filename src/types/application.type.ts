import { TJobExperience, TJobRateType, TJobType } from "./job.type";
export type TApplicationStatus = "applied" | "shortlisted" | "accepted" | "rejected" | "cancelled";
export type TWorkStatus = "pending" | 'running' | 'stopped' | 'completed';

export type IApplication = {
  _id: string;
  jobId: string;
  title: string;
  category: string;
  startDate: string; // ISO date string
  endDate: string | null;
  deadline: string; // ISO date string
  minRange: number;
  maxRange: number;
  address: string;
  postalCode: string;
  experience: TJobExperience;
  jobType: TJobType;
  rateType: TJobRateType;
  benefits: string;
  skills: string[];
  description: string; // HTML string
  candidateUserId: string;
  candidateName: string;
  candidateEmail: string;
  candidatePhone: string;
  candidateImg: string;
  candidateCV: string; // URL
  candidateDescription: string;
  status: TApplicationStatus;
  workStatus: TWorkStatus;
  isReview: boolean;

  createdAt: string; // ISO date string
};
