import JobsByCategory from "@/components/jobsBycategory/JobsByCategory";


async function getJobsByCategoryId(categoryId: string) {
  const res = await fetch(`https://tradiezz-backend.vercel.app/api/v1/job/get-candidate-jobs?categoryId=${categoryId}`, {
    cache: 'no-store'
  });
  const data = await res.json();
  return data?.data || [];
}


const JobsByCategoryPage = async ( { params }: {params: Promise<{ categoryId : string }>}) => {
  const { categoryId } = await params;
  const jobs = await getJobsByCategoryId(categoryId);
  console.log(jobs);

  
  return (
    <>
      <h1>{categoryId}</h1>
      <JobsByCategory/>
    </>
  )
}

export default JobsByCategoryPage