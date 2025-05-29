"use client"

import type React from "react"
import { useState } from "react"
import WorkExperienceCard from "./WorkExperienceCard"
import AddWorkExperienceModal from "@/components/modal/AddWorkExperienceModal"
import { X } from "lucide-react"

export interface TWorkExperience {
  id: string
  job_title: string
  company_name: string
  location: string
  from_date: string
  to_date?: string
  current?: boolean
  details: string
}

const WorkExperienceForm = () =>{
  const [experiences, setExperiences] = useState<TWorkExperience[]>([
    {
      id: "1",
      job_title: "Backend Developer",
      company_name: "Tech Solutions Ltd.",
      location: "San Francisco",
      from_date: "2021-01-01",
      to_date: "",
      current: true,
      details: "Worked on microservices architecture and Node.js APIs.",
    },
  ])

  const [showForm, setShowForm] = useState(false)
  const [currentExperience, setCurrentExperience] = useState<TWorkExperience>({
    id: "",
    job_title: "",
    company_name: "",
    location: "",
    from_date: "",
    to_date: "",
    current: false,
    details: "",
  })
  const [isEditing, setIsEditing] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setCurrentExperience((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target
    setCurrentExperience((prev) => ({
      ...prev,
      current: checked,
      to_date: checked ? "" : prev.to_date,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (isEditing) {
      setExperiences((prev) => prev.map((exp) => (exp.id === currentExperience.id ? currentExperience : exp)))
    } else {
      const newExperience = {
        ...currentExperience,
        id: Date.now().toString(),
      }
      setExperiences((prev) => [...prev, newExperience])
    }

    resetForm()
  }

  const resetForm = () => {
    setCurrentExperience({
      id: "",
      job_title: "",
      company_name: "",
      location: "",
      from_date: "",
      to_date: "",
      current: false,
      details: "",
    })
    setShowForm(false)
    setIsEditing(false)
  }

  // const editExperience = (experience: TWorkExperience) => {
  //   setCurrentExperience(experience)
  //   setIsEditing(true)
  //   setShowForm(true)
  // }

  // const deleteExperience = (id: string) => {
  //   setExperiences((prev) => prev.filter((exp) => exp.id !== id))
  // }

  return (
    <div className="space-y-6 py-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Previous Work Experience</h2>
      </div>

      {/* List of experiences */}
      <div className="space-y-4">
        {experiences.map((experience, index) => (
          <WorkExperienceCard experience={experience} key={index}/>
        ))}
      </div>

      <AddWorkExperienceModal/>

      {/* Add experience button */}
      {/* {!showForm && (
        <button
          type="button"
          className="w-full py-2 border border-dashed cursor-pointer rounded-md flex items-center justify-center text-gray-500 hover:text-gray-700 hover:border-gray-300"
          onClick={() => setShowForm(true)}
        >
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Work Experience
        </button>
      )} */}

      {/* Experience form */}
      {showForm && (
        <div className="border rounded-md shadow-sm">
          <div className="bg-gray-50 p-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">{isEditing ? "Edit Work Experience" : "Add Work Experience"}</h3>
              <button
                type="button"
                className="p-1 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100"
                onClick={resetForm}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </button>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="p-4 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="job_title" className="block text-sm font-medium text-gray-700">
                    Job Title
                  </label>
                  <input
                    id="job_title"
                    name="job_title"
                    type="text"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={currentExperience.job_title}
                    onChange={handleInputChange}
                    placeholder="e.g. Software Engineer"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company_name" className="block text-sm font-medium text-gray-700">
                    Company Name
                  </label>
                  <input
                    id="company_name"
                    name="company_name"
                    type="text"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={currentExperience.company_name}
                    onChange={handleInputChange}
                    placeholder="e.g. Tech Solutions Ltd."
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                  Location
                </label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={currentExperience.location}
                  onChange={handleInputChange}
                  placeholder="e.g. San Francisco, CA"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="from_date" className="block text-sm font-medium text-gray-700">
                    Start Date
                  </label>
                  <input
                    id="from_date"
                    name="from_date"
                    type="date"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={currentExperience.from_date}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="to_date"
                    className={`block text-sm font-medium ${
                      currentExperience.current ? "text-gray-400" : "text-gray-700"
                    }`}
                  >
                    End Date
                  </label>
                  <input
                    id="to_date"
                    name="to_date"
                    type="date"
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none ${
                      currentExperience.current
                        ? "bg-gray-100 text-gray-400"
                        : "focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    }`}
                    value={currentExperience.to_date}
                    onChange={handleInputChange}
                    disabled={currentExperience.current}
                    required={!currentExperience.current}
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="current"
                  checked={currentExperience.current}
                  onChange={handleCheckboxChange}
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="current" className="text-sm text-gray-700">
                  I currently work here
                </label>
              </div>

              <div className="space-y-2">
                <label htmlFor="details" className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  id="details"
                  name="details"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={currentExperience.details}
                  onChange={handleInputChange}
                  placeholder="Describe your responsibilities and achievements"
                  rows={4}
                />
              </div>
            </div>
            <div className="bg-gray-50 p-4 flex justify-end space-x-2">
              <button
                type="button"
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                onClick={resetForm}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {isEditing ? "Update" : "Save"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}


export default WorkExperienceForm;