import FindWork from "@/components/FindWork/FindWork";
import { Suspense } from "react";

const FindWorkPage = () => {
  return (
    <>
    <Suspense>
      <FindWork/>
    </Suspense>
    </>
  )
}

export default FindWorkPage;