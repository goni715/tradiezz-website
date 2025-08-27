"use client";

import HeroForm from "./HeroForm";
import { motion } from 'framer-motion';


const HeroSection = () => {
  return (
   <>
   <section className="min-h-[calc(100vh-80px)] w-full overflow-hidden">
     <motion.div  initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }} className="relative min-h-[calc(100vh-80px)] w-full bg-[url('/images/hero.png')] bg-center bg-no-repeat bg-cover flex items-center justify-center px-4">
      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgba(17,24,39,0.7)] z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-white max-w-4xl w-full text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
          Get On Site. Get the Site Covered.
        </h1>
        <p className="text-base md:text-lg font-medium mb-8">
          {/* Each month, more than 3 million job seekers turn to{" "}
          <span className="font-bold">website</span> in their search for work,
          making over <span className="font-bold">140.00 applications</span>{" "}
          every single day. */}
          Whether you&apos;re picking up tools or picking a team, Tradieez connects skilled workers with the jobs that need them, fast.
        </p>
        <HeroForm />
      </div>
    </motion.div>
   </section>
   </>
  );
};

export default HeroSection;
