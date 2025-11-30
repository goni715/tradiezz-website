import type React from "react";
import { Button } from "../ui/button";



type TProps = {
    isLoading: boolean;
    onClick: ()=> void;
    children: React.ReactNode;
    loadingTitle?: string;
    disabled?: boolean;
    className?: string;
}

const CustomButton = ({ isLoading, loadingTitle="Processing...", onClick, children, disabled, className='w-full' }: TProps) => {
    return (
        <>
          <Button
              type="button"
              onClick={onClick}
              disabled={disabled}
              className={`${className} flex justify-center items-center gap-x-2 bg-primary hover:bg-primary/80 cursor-pointer text-white py-2 rounded-md font-semibold transition-colors duration-100`}
          >
              {isLoading ? (
                  <div className="flex items-center space-x-2">
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                      <span>{loadingTitle}</span>
                  </div>
              ) : (
                  <>
                    {children}
                  </>
              )}
          </Button>
        </>
    )
}

export default CustomButton