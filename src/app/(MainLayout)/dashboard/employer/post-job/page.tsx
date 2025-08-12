"use client"
import PostJobLoading from "@/components/loader/PostJobLoading";
import dynamic from "next/dynamic";


const PostJobPage = () => {
  const PostJobForm = dynamic(() => import('@/components/dashboard/employer/PostJobForm/PostJobForm'), {
    ssr: false,
    loading: () => <PostJobLoading />
  });


  return (
    <>
      <PostJobForm />
    </>
  )
}

export default PostJobPage;
