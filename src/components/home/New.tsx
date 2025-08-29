"use client";
import React from 'react';
import { motion } from 'framer-motion';

function New() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Candidate Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Become a Candidate</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Start your job search today! Create a profile, explore job opportunities, and connect with
                top employers. Let us help you find the right fit for your skills and goals.
              </p>
              <button className="inline-flex items-center cursor-pointer px-6 py-3 bg-brand-color text-white font-medium rounded-lg transition-colors duration-200">
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
            className="bg-teal-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Become an Employer</h2>
              <p className="text-teal-100 mb-6 leading-relaxed">
                Find the perfect candidates for your team. Post job listings, review applications, and
                connect with skilled professionals ready to contribute to your business success.
              </p>
              <button className="inline-flex cursor-pointer items-center px-6 py-3 bg-white text-teal-800 font-medium rounded-lg hover:bg-teal-50 transition-colors duration-200">
                Register Now
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Popular Categories */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Popular Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              >
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">{category.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">{category.title}</h3>
                    <p className="text-sm text-blue-600">{category.positions} Open positions</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const categories = [
  { title: 'Water Supply', positions: '357', icon: '🚰' },
  { title: 'Kitchen Setup', positions: '313', icon: '🔍' },
  { title: 'Gas Connection', positions: '297', icon: '🔥' },
  { title: 'Masonry', positions: '247', icon: '🏗️' },
  { title: 'Water Supply', positions: '356', icon: '🚰' },
  { title: 'Kitchen Setup', positions: '312', icon: '🔍' },
  { title: 'Gas Connection', positions: '298', icon: '🔥' },
  { title: 'Masonry', positions: '248', icon: '🏗️' },
];

export default New;