"use client";

import { ISubscription } from "@/types/subscription.type";
import { Check, Calendar, Zap } from "lucide-react";


const getStatusColor = (status: string) => {
  switch (status) {
    case "active":
      return "bg-green-50 text-green-700 border-green-200";
    case "pending":
      return "bg-amber-50 text-amber-700 border-amber-200";
    case "expired":
      return "bg-red-50 text-red-700 border-red-200";
    default:
      return "bg-slate-50 text-slate-700 border-slate-200";
  }
};

const getPaymentStatusColor = (status: string) => {
  switch (status) {
    case "paid":
      return "text-emerald-600";
    case "unpaid":
      return "text-amber-600";
    case "failed":
      return "text-red-600";
    case "refunded":
      return "text-slate-600";
    default:
      return "text-slate-600";
  }
};

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const SubscriptionCard = ({
  subscription,
}: {
  subscription: ISubscription;
}) => {
  const {
    amount,
    startDate,
    endDate,
    planName,
    duration,
    validity,
    features,
    description,
    paymentStatus,
    status,
  } = subscription || {};

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl border border-gray-300 shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-slate-50 to-slate-100 px-6 sm:px-8 py-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                {planName}
              </h2>
              <p className="text-slate-600 text-sm mt-1">{description}</p>
            </div>
            <div className="flex flex-col gap-2">
              {/* Status Badge */}
              <div
                className={`inline-flex items-center px-3 py-1 rounded-full text-xs justify-center font-semibold border w-fit ${getStatusColor(
                  status
                )}`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </div>
              {/* Payment Status */}
              <div
                className={`text-xs font-medium ${getPaymentStatusColor(
                  paymentStatus
                )}`}
              >
                Payment:{" "}
               <span className="capitalize">
                 {paymentStatus}
               </span>
              </div>
            </div>
          </div>

          {/* Price Section */}
          <div className="flex items-baseline gap-2">
            <span className="text-4xl sm:text-5xl font-bold text-slate-900">
              ${amount.toFixed(2)}
            </span>
            <span className="text-slate-600 font-medium">/{validity}</span>
          </div>
        </div>

        {/* Content Section */}
        <div className="px-6 sm:px-8 py-8">
          {/* Date Range */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                  Start Date
                </p>
                <p className="text-sm font-medium text-slate-900">
                  {formatDate(startDate)}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Zap className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                  Duration
                </p>
                <p className="text-sm font-medium text-slate-900">
                  {duration} days
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                  Expiry Date
                </p>
                <p className="text-sm font-medium text-slate-900">
                  {formatDate(endDate)}
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-slate-200 mb-8" />

          {/* Features Section */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wide">
              Included Features
            </h3>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionCard;
