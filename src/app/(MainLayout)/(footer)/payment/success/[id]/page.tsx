"use client"

import PaymentSuccessLoading from "@/components/loader/PaymentSuccessLoading";
import { useVerifySessionQuery } from "@/redux/features/subscription/subscriptionApi";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";

const PaymentSuccessPage = () => {
    const params = useParams<{ id: string }>();
    useVerifySessionQuery(params.id);

     const PaymentSuccess = dynamic(() => import('@/components/payment/PaymentSuccess'), {
          ssr: false,
          loading: () => <PaymentSuccessLoading/>
        });

    return <PaymentSuccess/>

}


export default PaymentSuccessPage;