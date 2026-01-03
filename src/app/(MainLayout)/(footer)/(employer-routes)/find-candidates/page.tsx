import FindCandidates from "@/components/findCandidate/FindCandidates";
import { BASE_URL } from "@/constant/global.constant";

async function getCategories() {
  const res = await fetch(`${BASE_URL}/category/get-category-drop-down`, {
    next: {
      revalidate: 30, // cache 30 seconds
      tags: ['category'], // optional, invalidate with tag
    },
  });
  const data = await res.json();
  return data?.data || [];
}

const FindCandidatesPage = async () => {
  const categories = await getCategories();

  return (
    <>
      <FindCandidates categories={categories}/>
    </>
  )
}

export default FindCandidatesPage