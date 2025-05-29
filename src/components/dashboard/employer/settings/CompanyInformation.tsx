"use client";

import { useState } from "react"
import Image from "next/image"

const CompanyInformation = () => {
  const [logo, setLogo] = useState<File | null>(null)
  const [banner, setBanner] = useState<File | null>(null)
  const [logoPreview, setLogoPreview] = useState<string | null>(null)
  const [bannerPreview, setBannerPreview] = useState<string | null>(null)

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setLogo(file)
      setLogoPreview(URL.createObjectURL(file))
    }
  }

  const handleBannerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setBanner(file)
      setBannerPreview(URL.createObjectURL(file))
    }
  }

  const handleRemoveLogo = () => {
    setLogo(null)
    setLogoPreview(null)
  }

  const handleRemoveBanner = () => {
    setBanner(null)
    setBannerPreview(null)
  }

  return (
    <div className="max-w-4xl mx-auto bg-white p-4 md:p-6">
      <div className="mb-8">
        <h2 className="text-xl font-medium mb-4">Logo & Banner Image</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Logo Upload */}
          <div className="col-span-1">
            <p className="text-sm mb-2">Upload Logo</p>
            <div className="relative">
              <div className="bg-slate-400 max-h-[200px] w-full aspect-square rounded-md overflow-hidden">
                {logoPreview ? (
                  <Image src={logoPreview || "/placeholder.svg"} alt="Logo preview" fill className="object-cover h-full" />
                ) : (
                  <label htmlFor="logo-upload" className="flex items-center justify-center h-full cursor-pointer">
                    <span className="sr-only">Upload logo</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </label>
                )}
                <input id="logo-upload" type="file" accept="image/*" className="hidden" onChange={handleLogoChange} />
              </div>
              {logo && (
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-xs text-gray-500">{(logo.size / (1024 * 1024)).toFixed(1)} MB</span>
                  <div className="space-x-2">
                    <button onClick={handleRemoveLogo} className="text-xs text-blue-600 hover:underline">
                      Remove
                    </button>
                    <label htmlFor="logo-upload" className="text-xs text-blue-600 hover:underline cursor-pointer">
                      Replace
                    </label>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Banner Upload */}
          <div className="col-span-1 md:col-span-2">
            <p className="text-sm mb-2">Banner Image</p>
            <div className="relative">
              <div className="bg-slate-400 h-[200px] w-full aspect-[2/1] rounded-md overflow-hidden">
                {bannerPreview ? (
                  <Image src={bannerPreview || "/placeholder.svg"} alt="Banner preview" fill className="object-cover h-full" />
                ) : (
                  <label htmlFor="banner-upload" className="flex items-center justify-center h-full cursor-pointer">
                    <span className="sr-only">Upload banner</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </label>
                )}
                <input
                  id="banner-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleBannerChange}
                />
              </div>
              {banner && (
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-xs text-gray-500">{(banner.size / (1024 * 1024)).toFixed(1)} MB</span>
                  <div className="space-x-2">
                    <button onClick={handleRemoveBanner} className="text-xs text-blue-600 hover:underline">
                      Remove
                    </button>
                    <label htmlFor="banner-upload" className="text-xs text-blue-600 hover:underline cursor-pointer">
                      Replace
                    </label>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Company Name */}
      <div className="mb-6">
        <label htmlFor="company-name" className="block text-sm font-medium mb-2">
          Company name
        </label>
        <input
          type="text"
          id="company-name"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Company Details */}
      <div className="mb-6">
        <label htmlFor="company-details" className="block text-sm font-medium mb-2">
          Company Details
        </label>
        <div className="border border-gray-300 rounded-md overflow-hidden">
          <textarea
            id="company-details"
            rows={3}
            placeholder="Write down about your company here. Let the candidate know who we are..."
            className="w-full p-3 focus:outline-none"
          ></textarea>
        </div>
      </div>

      {/* Save Button */}
      <div>
        <button
          type="button"
          className="px-4 py-2 bg-primary hover:bg-[#2b4773] text-white font-medium rounded-md focus:outline-non"
        >
          Save Changes
        </button>
      </div>
    </div>
  )
}

export default CompanyInformation;
