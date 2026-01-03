import { useGetAppliedJobIdsQuery } from "@/redux/features/application/applicationApi";

type TProps = {
  jobId: string;
};

const AppliedBadge = ({ jobId }: TProps) => {
  const { data, isLoading } = useGetAppliedJobIdsQuery(undefined);
  const appliedJobIds = data?.data || [];

  if (!isLoading && appliedJobIds.includes(jobId)) {
    return (
      <>
        <span className="shrink-0 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
          Applied
        </span>
      </>
    );
  }
  return null;
};

export default AppliedBadge;
