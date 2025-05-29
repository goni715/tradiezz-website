"use client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center bg-white px-6 py-12 text-center">
        <div className="mt-">
          <Image
            src="/images/notfound.svg"
            alt="404 Illustration"
            width={600}
            height={500}
            className="max-w-md w-full h-[600px] mx-auto"
          />
        </div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-2 text-white bg-primary rounded-md font-medium transition duration-200"
        >
          <FaArrowLeft className="text-sm" />
          Back to Home
        </Link>
      </div>
    </>
  );
};

export default NotFoundPage;
