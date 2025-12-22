import type React from "react";
import { CgSpinnerTwo } from "react-icons/cg"

type TProps = {
    isLoading: boolean;
    loadingTitle?: string;
    children: React.ReactNode;
    className?: string;
}

const SubmitButton = ({ isLoading, loadingTitle = "Processing...", children, className="" }: TProps) => {
    return (
        <>
            <button
                type="submit"
                className={`w-full ${className} flex justify-center items-center gap-x-2 bg-primary hover:bg-primary/80 cursor-pointer text-white py-2 disabled:cursor-not-allowed rounded-md font-semibold transition-colors duration-100`}
            >
                {isLoading ? (
                    <>
                        <CgSpinnerTwo className="animate-spin" fontSize={16} />
                        {loadingTitle}
                    </>
                ) : (
                    <>
                        {children}
                    </>
                )}
            </button>
        </>
    )
}

export default SubmitButton;