import { BASE_URL } from "@/constant/global.constant";
import { TPolicyType } from "@/types/policy.type";

export async function getPolicyByType (type: TPolicyType) {
  const res = await fetch(`${BASE_URL}/policy/get-policy-by-type/${type}`, {
    cache: 'no-store'
  });

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

  const data = await res.json();
  return data?.data || {};
}