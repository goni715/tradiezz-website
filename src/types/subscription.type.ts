
export type TPaymentStatus = 'unpaid' | 'paid' | 'failed' | 'refunded';

export interface ISubscription {
  _id: string;
  amount: number;
  startDate: string;   // ISO date string
  endDate: string;     // ISO date string
  employerName: string;
  employerEmail: string;
  employerPhone: string;
  employerImg: string;
  planName: string; 
  duration: number;   // in days
  validity: "monthly" | "yearly";
  paymentStatus: TPaymentStatus;
  status: "pending" | "active" | "expired";
  createdAt: string;  // ISO date string
  description: string;
  features: string[];
};
