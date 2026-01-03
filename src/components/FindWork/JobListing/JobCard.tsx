import React from 'react';
import { MapPin, Clock, Bookmark } from 'lucide-react';
import CategoryBadge from '../../badge/CategoryBadge';
import { useRouter } from 'next/navigation';

type JobCardProps = {
  job: {
    title: string;
    location: string;
    salary: string;
    daysRemaining: number;
    category: string;
  };
};

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const router = useRouter();
  return (
    <div className="bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg border border-gray-100 overflow-hidden flex flex-col h-full">
      <div className="p-5 flex flex-col grow">
        <div className="flex justify-between items-start mb-3">
          <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
            {job.title}
          </h2>
            <Bookmark className="h-5 w-5 cursor-pointer text-gray-800"/>
        </div>

        <div className="flex items-center text-gray-600 mt-1 mb-2">
          <MapPin size={16} className="mr-1 text-gray-400" />
          <span className="text-sm">{job.location}</span>
        </div>

        <div className="text-gray-800 font-medium mt-1 mb-2">{job.salary}</div>

        <div className="flex items-center justify-between text-sm text-gray-500 mt-auto">
          <div className="flex items-center text-sm">
            <Clock size={16} className="mr-1 text-gray-400" />
            <span>{job.daysRemaining} days remaining</span>
          </div>
          <CategoryBadge category={job.category} />
        </div>
      </div>

      <div className="p-4 border-t border-gray-100 bg-gray-50">
        <button onClick={()=> router.push(`/job-details/${job.title}`)} className="w-full py-2 px-4 bg-primary hover:bg-primary/90 cursor-pointer text-white text-sm font-medium rounded-md transition-colors duration-300 focus:outline-none">
          View Details
        </button>
      </div>
    </div>
  );
};

export default JobCard;