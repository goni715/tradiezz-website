import React from 'react'
import EmployerTabs from './EmployerTabs'

const EmployerSettings = () => {
  return (
    <>
      <main className="flex-1 overflow-auto p-4 md:p-6 lg:p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">
            Profile
          </h1>
          <EmployerTabs/>
        </div>
      </main>
    </>
  )
}

export default EmployerSettings