"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const RegisterSection = () => {
  const router = useRouter();
  return (
    <>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Candidate Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">I Need Work</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Looking for your next opportunity? Build your profile in minutes, explore job listings, and connect directly with employers who value your skills. Whether it’s short-term gigs or long-term positions, Tradieez helps you take control of your career.
              </p>
              <button onClick={()=> router.push('/register')} className="inline-flex items-center cursor-pointer px-6 py-3 bg-brand-color text-white font-medium rounded-lg transition-colors duration-200">
                Register Now
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.div>

          {/* Employer Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-brand-color rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="p-8">
              <h2 className="text-2xl font-bold text-black mb-4">I&apos;m Hiring</h2>
              <p className="text-black mb-6 leading-relaxed">
                Find the perfect candidates for your team. Post job listings, review applications, and
                connect with skilled professionals ready to contribute to your business success.
              </p>
              <button onClick={()=> router.push('/register')} className="inline-flex cursor-pointer items-center px-6 py-3 bg-white text-teal-800 font-medium rounded-lg hover:bg-teal-50 transition-colors duration-200">
                Register Now
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}



export default RegisterSection;