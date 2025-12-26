import JobsByCategory from "@/components/jobsBycategory/JobsByCategory";
import { BASE_URL } from "@/constant/global.constant";


async function getJobsByCategoryId(categoryId: string) {
  const res = await fetch(`${BASE_URL}/job/get-candidate-jobs?categoryId=${categoryId}`, {
    cache: 'no-store'
  });
  const data = await res.json();
  return data?.data || [];
}


const JobsByCategoryPage = async ( { params }: {params: Promise<{ categoryId : string }>}) => {
  const { categoryId } = await params;
  const jobs = await getJobsByCategoryId(categoryId);

  
  return (
    <>
      <JobsByCategory jobs={jobs}/>
    </>
  )
}

export default JobsByCategoryPage