'use client'

import SendEmployerMessageModal from '@/components/modal/message/SendEmployerMessageModal'
import { Mail, MessageSquare, Globe, Linkedin, Facebook, Instagram } from 'lucide-react'
import Image from 'next/image'

interface EmployerData {
  userId: string
  fullName: string
  email: string
  phone: string
  profileImg: string
  socialMedia: {
    website: string
    facebook: string
    linkedin: string
    instagram: string
  }
  ratings: number
  totalReviews: number
}

const employerData: EmployerData = {
  userId: '69492c2f0bc815ccd23c4447',
  fullName: 'Goni Dev',
  email: 'gonidev715@gmail.com',
  phone: '02012345678',
  profileImg: '',
  socialMedia: {
    website: '',
    facebook: '',
    linkedin: '',
    instagram: '',
  },
  ratings: 0,
  totalReviews: 0,
}

const EmployerDetailsPage = () => {
 
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Profile Section */}
          <div className="px-6 pt-6 pb-6">
            {/* Profile Avatar and Basic Info */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4 mb-6">
              <div className="shrink-0 mb-4 sm:mb-0">
                <div className="w-32 h-32 rounded-lg bg-linear-to-br from-blue-400 to-indigo-500 border-4 border-transparent shadow-lg flex items-center justify-center">
                  {employerData.profileImg ? (
                    <Image
                      src={employerData.profileImg || "/placeholder.svg"}
                      alt={employerData.fullName}
                      className="w-full h-full object-cover rounded-lg"
                      height={400}
                      width={400}
                    />
                  ) : (
                    <span className="text-4xl font-bold text-white">
                      {employerData.fullName
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 mb-1">
                  {employerData.fullName}
                </h1>
                <p className="text-gray-600 mb-4">Employer</p>

                {/* Rating Section */}
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-yellow-500">
                      {employerData.ratings.toFixed(1)}
                    </span>
                    <span className="text-gray-600 ml-2">
                      ({employerData.totalReviews} reviews)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <SendEmployerMessageModal partnerId={employerData.userId}/>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 pb-8 border-b border-gray-200">
              <div>
                <h3 className="text-sm font-semibold text-gray-600 uppercase mb-2">
                  Email
                </h3>
                <a
                  href={`mailto:${employerData.email}`}
                  className="text-lg text-blue-600 hover:underline"
                >
                  {employerData.email}
                </a>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-600 uppercase mb-2">
                  Phone
                </h3>
                <a
                  href={`tel:${employerData.phone}`}
                  className="text-lg text-blue-600 hover:underline"
                >
                  {employerData.phone}
                </a>
              </div>
            </div>

            {/* Social Media Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-600 uppercase mb-4">
                Connect
              </h3>
              <div className="flex flex-wrap gap-4">
                {employerData.socialMedia.website && (
                  <a
                    href={employerData.socialMedia.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-600 transition duration-200"
                    title="Website"
                  >
                    <Globe size={20} />
                  </a>
                )}

                {employerData.socialMedia.linkedin && (
                  <a
                    href={employerData.socialMedia.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-600 transition duration-200"
                    title="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                )}

                {employerData.socialMedia.facebook && (
                  <a
                    href={employerData.socialMedia.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-600 transition duration-200"
                    title="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                )}

                {employerData.socialMedia.instagram && (
                  <a
                    href={employerData.socialMedia.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-600 transition duration-200"
                    title="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                )}

                {!employerData.socialMedia.website &&
                  !employerData.socialMedia.linkedin &&
                  !employerData.socialMedia.facebook &&
                  !employerData.socialMedia.instagram && (
                    <p className="text-gray-400 italic">No social media links added</p>
                  )}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Card */}
        <div className="mt-6 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">About</h2>
          <p className="text-gray-600 leading-relaxed">
            This is the profile of {employerData.fullName}, an employer on our platform. Connect with them to explore
            opportunities and learn more about their organization.
          </p>
        </div>
      </div>
    </div>
  )
}

export default EmployerDetailsPage;