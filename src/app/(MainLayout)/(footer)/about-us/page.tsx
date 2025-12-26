import PolicyContent from "@/components/policy/PolicyContent";
import { BASE_URL } from "@/constant/global.constant";

async function getPolicyByType() {
    const res = await fetch(`${BASE_URL}/policy/get-policy-by-type/${"about-us"}`, {
        next: { tags: ['policy'] }
    });

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    return data?.data || {};
}

const AboutUsPage = async() => {
  const data = await getPolicyByType();

  return (
    <>
      <PolicyContent title="About Us" content={data.content}/>
    </>
  )
}

export default AboutUsPage