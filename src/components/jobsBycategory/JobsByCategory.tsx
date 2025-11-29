"use client";
// import BlogPagination from "@/components/BlogList/BlogPagination";
import { TCandidateJob } from "@/types/job.type";
import JobItem from "../job/JobItem";
import NotFoundCard from "../card/NotFoundCard";

type TProps = {
  jobs: TCandidateJob[]
}

const JobsByCategory = ( { jobs } : TProps) => {
  // const [currentPage, setCurrentPage] = useState(1);
  // const [searchTerm, setSearchTerm] = useState("");
  // const totalPages = 5;

  return (
    <>
      {/* <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <p className="text-primary font-semibold mt-1">
              12 jobs available
            </p>
          </div>
        </div>
      </div> */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {jobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {jobs.map((job, index) => (
              <JobItem key={index} job={job} />
            ))
            }
          </div>
        )
          : (
            <NotFoundCard title="There are no jobs available by this category" />
          )}
        {/* <BlogPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        /> */}
      </div>
    </>
  );
};

export default JobsByCategory;
