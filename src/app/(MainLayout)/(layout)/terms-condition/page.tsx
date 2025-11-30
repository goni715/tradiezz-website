import PolicyContent from "@/components/policy/PolicyContent";
import { getPolicyByType } from "@/lib/api/policy.api"

const TermsConditionPage = async() => {
  const data = await getPolicyByType("terms-condition");

  return (
    <>
      <PolicyContent title="Terms & Conditions" content={data.content}/>
    </>
  )
}

export default TermsConditionPage