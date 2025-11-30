import PolicyContent from "@/components/policy/PolicyContent";
import { getPolicyByType } from "@/lib/api/policy.api"

const PrivacyPage = async() => {
  const data = await getPolicyByType("privacy-policy");

  return (
    <>
      <PolicyContent title="Privacy Policy" content={data.content}/>
    </>
  )
}

export default PrivacyPage