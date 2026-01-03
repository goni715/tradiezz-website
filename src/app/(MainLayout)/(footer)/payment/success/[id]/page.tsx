"use client"

import PaymentSuccessLoading from "@/components/loader/PaymentSuccessLoading";
import PaymentFailed from "@/components/payment/PaymentFailed";
import { useVerifySessionQuery } from "@/redux/features/subscription/subscriptionApi";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";

const PaymentSuccessPage = () => {
    const params = useParams<{ id: string }>();
    const { isLoading, isSuccess, isError} = useVerifySessionQuery(params.id);

     const PaymentSuccess = dynamic(
       () => import("@/components/payment/PaymentSuccess"),
       {
         ssr: false,
         loading: () => <PaymentSuccessLoading />,
       }
     );

     if (isLoading) {
       return <PaymentSuccessLoading />;
     }

     if (!isLoading && isSuccess) {
       return <PaymentSuccess />;
     }

     if (!isLoading && isError ) {
       return <PaymentFailed />;
     }
}


export default PaymentSuccessPage;