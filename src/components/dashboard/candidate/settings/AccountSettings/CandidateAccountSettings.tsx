"use client"
import ChangePasswordForm from "./ChangePasswordForm"
import DeleteCandidateAccount from "./DeleteCandidateAccount"
import ContactForm from "./ContactForm"
import PrivacySettings from "./PrivacySettings"

const CandidateAccountSettings =() => {
 

  return (
    <div className="container max-w-3xl">
      <div className="space-y-8">
       
       <ContactForm/>

        {/* Notification Section */}
        {/* <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Notification</h2>
          <div className="space-y-3">
            <div className="flex items-start space-x-2">
              <input type="checkbox" id="notify-shortlisted" className="mt-1" defaultChecked />
              <label htmlFor="notify-shortlisted" className="text-sm text-gray-700">
                Notify me when employers shortlisted me
              </label>
            </div>

            <div className="flex items-start space-x-2">
              <input type="checkbox" id="notify-saved" className="mt-1" />
              <label htmlFor="notify-saved" className="text-sm text-gray-700">
                Notify me when employers saved my profile
              </label>
            </div>

            <div className="flex items-start space-x-2">
              <input type="checkbox" id="notify-expire" className="mt-1" />
              <label htmlFor="notify-expire" className="text-sm text-gray-700">
                Notify me when my applied jobs are expire
              </label>
            </div>

            <div className="flex items-start space-x-2">
              <input type="checkbox" id="notify-rejected" className="mt-1" defaultChecked />
              <label htmlFor="notify-rejected" className="text-sm text-gray-700">
                Notify me when employers rejected me
              </label>
            </div>

            <div className="flex items-start space-x-2">
              <input type="checkbox" id="notify-alerts" className="mt-1" />
              <label htmlFor="notify-alerts" className="text-sm text-gray-700">
                Notify me when I have up to 5 job alerts
              </label>
            </div>
          </div>
        </div> */}

        {/* Job Alerts Section */}
        {/* <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Job Alerts</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                Role
              </label>
              <div className="relative">
                <FileText className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <input
                  id="role"
                  type="text"
                  placeholder="Your job roles"
                  className="w-full pl-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <input
                  id="location"
                  type="text"
                  placeholder="City, state, country name"
                  className="w-full pl-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          <div className="mt-4">
            <button className="px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Save Changes
            </button>
          </div>
        </div> */}

        {/* Privacy Settings */}
        <PrivacySettings/>
        
       
       <ChangePasswordForm/>

       <DeleteCandidateAccount/>
      </div>
    </div>
  )
}

export default CandidateAccountSettings;
