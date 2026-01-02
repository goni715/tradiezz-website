import { IPlan } from "@/types/plan.type";
import { ArrowRight, CheckCircle } from "lucide-react";
import { CgSpinnerTwo } from "react-icons/cg";

type TProps = {
  plan: IPlan
}

const PriceCard = ({ plan }: TProps ) => {
  //const [createPaymentIntent, {isLoading}] = useCreatePaymentIntentMutation();
  //const { subscription_status } = useAppSelector((state) => state.subscription);
  const isLoading = false;
  
  
  const handlePaymentIntent = () => {
    // if (subscription_status?.subscription_status === "Active") {
    //   ErrorToast("You have already subscription")
    // }
    // else {
    //   createPaymentIntent({
    //     subscriptionId: subscription?._id
    //   })
    // }
  }

  return (
    <div
      className={`border border-gray-200 rounded-lg overflow-hidden hover:border-gray-400 hover:shadow-sm duration-200`}
    >
      <div className="p-6">
        <h3 className="font-bold text-gray-800 uppercase">{plan?.name}</h3>
        <p className="text-sm text-gray-600 mt-1 mb-3">{plan.description}</p>
        <div className="flex items-end gap-1 mb-4">
          <span className="text-3xl font-bold">£{plan?.price}</span>
          <span className="text-gray-500 mb-1 capitalize">/{plan?.validity}</span>
        </div>
        <div className="space-y-3">
          {plan?.features?.map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
              <span className="text-sm text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
        <button
          onClick={handlePaymentIntent}
          // disabled={isLoading || subscription_status?.subscription}
          className={`mt-6 w-full py-2 px-4 rounded flex items-center justify-center gap-2 bg-light-gray text-primary hover:bg-primary hover:text-white cursor-pointer duration-200 disabled:cursor-not-allowed"
          `}
        >
          {
            isLoading ? (
              <>
                <CgSpinnerTwo className="animate-spin" fontSize={16} />
                Processing...
              </>
            ) : (
              <>
                Choose Plan
                <ArrowRight className="h-4 w-4" />
              </>
            )
          }
        </button>
      </div>
    </div>
  );
};

export default PriceCard;
