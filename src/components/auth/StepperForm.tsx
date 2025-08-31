"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import { carpentarTradeTypeOptions, constructionTradeTypeOptions, decorationTradeTypeOptions, electricalTradeTypeOptions, hvacTradeTypeOptions, metalWorkTradeTypeOptions, outdoorTradeTypeOptions, plumbingTradeTypeOptions, propertyTradeTypeOptions, specialistTradeTypeOptions, tradeOptions, windowTradeTypeOptions } from "@/data/options"
import { SuccessToast } from "@/helper/ValidationHelper"
import { useRouter } from "next/navigation"
//import MapSelector from "@/components/Location/MapSelector"

// Dynamically import the map component to avoid SSR issues
const MapSelector = dynamic(() => import("@/components/Location/MapSelector"), { ssr: false })

interface FormData {
  name: string
  email: string
  password: string
  confirmPassword: string
  category: string
  subCategory: string
  rate: string;
  availability: string;
  type: string;
  employmentType: string;
  location: { lat: number; lng: number; address: string } | null
  skills: string[]
  experience: string
}



const StepperForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [subOptions, setSuboptions] = useState<{ label: string; value: string; }[]>([
    { "label": "General Builder", "value": "General Builder" },
    { "label": "Bricklayer", "value": "Bricklayer" },
    { "label": "Groundworker", "value": "Groundworker" },
    { "label": "Demolition Operative", "value": "Demolition Operative" },
    { "label": "Scaffolder", "value": "Scaffolder" },
    { "label": "Civil Engineer", "value": "Civil Engineer" },
    { "label": "Site Labourer", "value": "Site Labourer" },
    { "label": "Forklift Driver", "value": "Forklift Driver" },
    { "label": "Machine Operator (e.g., Dumper, Digger)", "value": "Machine Operator (e.g., Dumper, Digger)" }
  ]);

  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    category: "",
    subCategory: "",
    rate: "",
    availability: "",
    type: "",
    employmentType: "",
    location: null,
    skills: [],
    experience: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const totalSteps = 5

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {}

    switch (step) {
      case 1:
        if (!formData.name.trim()) newErrors.name = "Name is required"
        if (!formData.email.trim()) newErrors.email = "Email is required"
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"
        if (!formData.password) newErrors.password = "Password is required"
        else if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters"
        if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match"
        break
      case 2:
        if (!formData.category) newErrors.category = "Category is required"
        if (!formData.subCategory) newErrors.subCategory = "Sub-category is required"
        if (!formData.rate) newErrors.rate = "Rate is required"
        if (!formData.availability) newErrors.availability = "Availibility is required"
        if (!formData.type) newErrors.type = "Type is required"
        if (!formData.employmentType) newErrors.employmentType = "Employment Type is required"
        break
      case 3:
        if (!formData.location) newErrors.location = "Location is required"
        break
      case 4:
        if (formData.skills.length === 0) newErrors.skills = "At least one skill is required"
        if (!formData.experience.trim()) newErrors.experience = "Experience is required"
        break
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps))
    }
  }

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  const handleSubmit = () => {
    if (validateStep(currentStep)) {
      console.log("Form submitted:", formData)
      SuccessToast("Sign Up Success");
      router.push("/")
      //alert("Registration successful!")
    }
  }

  const addSkill = (skill: string) => {
    if (skill.trim() && !formData.skills.includes(skill.trim())) {
      setFormData((prev) => ({
        ...prev,
        skills: [...prev.skills, skill.trim()],
      }))
    }
  }

  const removeSkill = (skillToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((skill) => skill !== skillToRemove),
    }))
  }


  const rateOptions = [
  {
    label: "Hourly",
    value: "par_hour",
  },
  {
    label: "Per Day",
    value: "par_day",
  },
  {
    label: "Per Job/Project",
    value: "par_job",
  }
];


const typeOptions = [
  {
    label: "Full Time",
    value: "full_time", 
  },
  {
    label: "Part Time",
    value: "part_time", 
  },
  {
    label: "Gig",
    value: "gig", 
  },
  {
    label: "Evenings / Weekends",
    value: "evenings_weekneds",
  }
];

const employmentTypeOptions = [
  {
    label: "Self-employed",
    value: "Self-employed", 
  },
  {
    label: "Seeking Employment",
    value: "Seeking Employment", 
  },
  {
    label: "Both",
    value: "both", 
  }
];





  return (
    <>
      <div>
        {/* Stepper */}
        <div className="flex items-center justify-between mb-8">
          {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
            <div key={step} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
                  step < currentStep
                    ? "bg-accent text-accent-foreground"
                    : step === currentStep
                      ? "bg-primary text-white"
                      : "bg-muted text-muted-foreground"
                }`}
              >
                {step < currentStep ? "✓" : step}
              </div>
              {step < totalSteps && (
                <div
                  className={`w-full h-1 mx-2 transition-colors ${step < currentStep ? "bg-accent" : "bg-border"}`}
                />
              )}
            </div>
          ))}
        </div>
        {/* Form Card */}
        <div className="bg-card rounded-lg shadow-sm p-4">
          {/* Step 1: Basic Information */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-card-foreground mb-4">Basic Information</h2>

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-3 bg-input border border-gray-300 focus:border-blue-500 rounded-lg focus:outline-none transition-colors"
                  placeholder="Enter your full name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-3 bg-input border border-gray-300 focus:border-blue-500 rounded-lg focus:outline-none transition-colors"
                  placeholder="Enter your email address"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">Password</label>
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
                  className="w-full px-4 py-3 bg-input border border-gray-300 focus:border-blue-500 rounded-lg focus:outline-none transition-colors"
                  placeholder="Create a password"
                />
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">Confirm Password</label>
                <input
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData((prev) => ({ ...prev, confirmPassword: e.target.value }))}
                  className="w-full px-4 py-3 bg-input border border-gray-300 focus:border-blue-500 rounded-lg focus:outline-none transition-colors"
                  placeholder="Confirm your password"
                />
                {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
              </div>
            </div>
          )}

          {/* Step 2: Category Selection */}
          {currentStep === 2 && (
            <div className="space-y-6">
              {/* <h2 className="text-xl font-semibold text-card-foreground mb-4">Professional Category</h2> */}

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">Category</label>
                              <select
                                  value={formData.category}
                                  onChange={(e) => {
                                      const value = e.target.value;
                                      setFormData((prev) => ({ ...prev, category: value, subCategory: "" }))
                                      if (!value) {
                                          setSuboptions([]);
                                          return;
                                      }
                                      if (value === "Constructions & Groundworks") {
                                          setSuboptions(constructionTradeTypeOptions);
                                          return;
                                      }
                                      if (value === "Electrical & Renewable Energy") {
                                          setSuboptions(electricalTradeTypeOptions);
                                          return;
                                      }
                                      if (value === "Plumbing, Heating, Gas") {
                                          setSuboptions(plumbingTradeTypeOptions);
                                          return;
                                      }
                                      if (value === "HVAC, Ventilation & Refrigeration") {
                                          setSuboptions(hvacTradeTypeOptions);
                                          return;
                                      }
                                      if (value === "Carpentry & Wood Trades") {
                                          setSuboptions(carpentarTradeTypeOptions);
                                          return;
                                      }
                                      if (value === "Decoration & Finishing") {
                                          setSuboptions(decorationTradeTypeOptions);
                                          return;
                                      }
                                      if (value === "Metalwork & Fabrication") {
                                          setSuboptions(metalWorkTradeTypeOptions);
                                          return;
                                      }
                                      if (value === "Windows, Doors & Cladding") {
                                          setSuboptions(windowTradeTypeOptions);
                                          return;
                                      }
                                      if (value === "Property Maintenance & Multi-trade") {
                                          setSuboptions(propertyTradeTypeOptions);
                                          return;
                                      }
                                      if (value === "Outdoor & Landscaping") {
                                          setSuboptions(outdoorTradeTypeOptions);
                                          return;
                                      }
                                      if (value === "Specialist & Heritage Trades") {
                                          setSuboptions(specialistTradeTypeOptions);
                                          return;
                                      }
                                  }}
                  className="w-full px-4 py-3 bg-input border border-gray-300 focus:border-blue-500 rounded-lg focus:outline-none transition-colors"
                >
                  <option value="">Select Category</option>
                    {tradeOptions?.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
              </div>

              {/* {formData.category && ( */}
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Sub Category</label>
                  <select
                    value={formData.subCategory}
                    onChange={(e) => setFormData((prev) => ({ ...prev, subCategory: e.target.value }))}
                    disabled={subOptions.length===0}
                    className="w-full px-4 py-3 bg-input border border-gray-300 focus:border-blue-500 rounded-lg focus:outline-none disabled:bg-gray-300 transition-colors"
                  >
                    <option value="">Select sub-category</option>
                    {subOptions?.map((option, index) => (
                       <option key={index} value={option.value}>
                        {option.label}
                       </option>
                    ))}
                  </select>
                  {errors.subCategory && <p className="text-red-500 text-sm mt-1">{errors.subCategory}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Rate</label>
                  <select
                    value={formData.rate}
                    onChange={(e) => setFormData((prev) => ({ ...prev, rate: e.target.value }))}
                    className="w-full px-4 py-3 bg-input border border-gray-300 focus:border-blue-500 rounded-lg focus:outline-none disabled:bg-gray-300 transition-colors"
                  >
                    <option value="">Select Rate</option>
                    {rateOptions?.map((option, index) => (
                       <option key={index} value={option.value}>
                        {option.label}
                       </option>
                    ))}
                  </select>
                  {errors.rate && <p className="text-red-500 text-sm mt-1">{errors.rate}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Availability</label>
                  <input
                    value={formData.availability}
                    type="date"
                    onChange={(e) => setFormData((prev) => ({ ...prev, availability: e.target.value }))}
                    className="w-full px-4 py-3 bg-input border border-gray-300 focus:border-blue-500 rounded-lg focus:outline-none disabled:bg-gray-300 transition-colors"
                  /> 
                  {errors.availability && <p className="text-red-500 text-sm mt-1">{errors.availability}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Work Type</label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData((prev) => ({ ...prev, type: e.target.value }))}
                    className="w-full px-4 py-3 bg-input border border-gray-300 focus:border-blue-500 rounded-lg focus:outline-none disabled:bg-gray-300 transition-colors"
                  >
                    <option value="">Select Select</option>
                    {typeOptions?.map((option, index) => (
                       <option key={index} value={option.value}>
                        {option.label}
                       </option>
                    ))}
                  </select>
                  {errors.type && <p className="text-red-500 text-sm mt-1">{errors.type}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Employment Type</label>
                  <select
                    value={formData.employmentType}
                    onChange={(e) => setFormData((prev) => ({ ...prev, employmentType: e.target.value }))}
                    className="w-full px-4 py-3 bg-input border border-gray-300 focus:border-blue-500 rounded-lg focus:outline-none disabled:bg-gray-300 transition-colors"
                  >
                    <option value="">Select Select</option>
                    {employmentTypeOptions?.map((option, index) => (
                       <option key={index} value={option.value}>
                        {option.label}
                       </option>
                    ))}
                  </select>
                  {errors.employmentType && <p className="text-red-500 text-sm mt-1">{errors.employmentType}</p>}
                </div>
              {/* )} */}
            </div>
          )}

          {/* Step 3: Location */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-card-foreground mb-4">Location</h2>
              <p className="text-muted-foreground mb-4">Click on the map to select your location</p>

              <div className="h-96 border border-gray-300 focus:border-blue-500 rounded-lg overflow-hidden">
                <MapSelector
                  onLocationSelect={(location) => {
                    setFormData((prev) => ({ ...prev, location }))
                    setErrors((prev) => ({ ...prev, location: "" }))
                  }}
                  selectedLocation={formData.location}
                />
              </div>

              {formData.location && (
                <div className="p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground">Selected Location:</p>
                  <p className="font-medium">{formData.location.address}</p>
                  <p className="text-sm text-muted-foreground">
                    Lat: {formData.location.lat.toFixed(6)}, Lng: {formData.location.lng.toFixed(6)}
                  </p>
                </div>
              )}

              {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
            </div>
          )}

          {/* Step 4: Skills & Experience */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-card-foreground mb-4">Skills & Experience</h2>

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">Skills</label>
                <div className="flex gap-2 mb-3">
                  <input
                    type="text"
                    placeholder="Add a skill and press Enter"
                    className="flex-1 px-4 py-3 bg-input border border-gray-300 focus:border-blue-500 rounded-lg focus:outline-none transition-colors"
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault()
                        addSkill(e.currentTarget.value)
                        e.currentTarget.value = ""
                      }
                    }}
                  />
                  <button
                    type="button"
                    onClick={(e) => {
                      const input = e.currentTarget.previousElementSibling as HTMLInputElement
                      addSkill(input.value)
                      input.value = ""
                    }}
                    className="px-6 py-3 bg-primary text-white cursor-pointer rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Add
                  </button>
                </div>

                <div className="flex flex-wrap gap-2 mb-3">
                  {formData.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-2 px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm"
                    >
                      {skill}
                      <button
                        type="button"
                        onClick={() => removeSkill(skill)}
                        className="hover:bg-accent-foreground/20 cursor-pointer rounded-full p-1"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
                {errors.skills && <p className="text-red-500 text-sm mt-1">{errors.skills}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">Experience Level</label>
                <select
                  value={formData.experience}
                  onChange={(e) => setFormData((prev) => ({ ...prev, experience: e.target.value }))}
                  className="w-full px-4 py-3 bg-input border border-gray-300 focus:border-blue-500 rounded-lg focus:outline-none transition-colors"
                >
                  <option value="">Select your experience level</option>
                  <option value="entry">Entry Level (0-2 years)</option>
                  <option value="mid">Mid Level (3-5 years)</option>
                  <option value="senior">Senior Level (6-10 years)</option>
                  <option value="expert">Expert Level (10+ years)</option>
                </select>
                {errors.experience && <p className="text-red-500 text-sm mt-1">{errors.experience}</p>}
              </div>
            </div>
          )}

          {/* Step 5: Review */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-card-foreground mb-4">Review Your Information</h2>

              <div className="space-y-4">
                <div className="p-4 bg-muted rounded-lg">
                  <h3 className="font-medium text-card-foreground mb-2">Basic Information</h3>
                  <p>
                    <strong>Name:</strong> {formData.name}
                  </p>
                  <p>
                    <strong>Email:</strong> {formData.email}
                  </p>
                </div>

                <div className="p-4 bg-muted rounded-lg">
                  <p>
                    <strong>Category:</strong> {formData.category}
                  </p>
                  <p>
                    <strong>Sub-Category:</strong> {formData.subCategory}
                  </p>
                  <p>
                    <strong>Rate:</strong> {formData.rate}
                  </p>
                  <p>
                    <strong>Work Type:</strong> {formData.type}
                  </p>
                  <p>
                    <strong>Employment Type:</strong> {formData.employmentType}
                  </p>
                </div>

                <div className="p-4 bg-muted rounded-lg">
                  <h3 className="font-medium text-black mb-2">Location</h3>
                  <p>{formData.location?.address}</p>
                </div>

                <div className="p-4 bg-muted rounded-lg">
                  <h3 className="font-medium text-card-foreground mb-2">Skills & Experience</h3>
                  <p>
                    <strong>Skills:</strong> {formData.skills.join(", ")}
                  </p>
                  <p>
                    <strong>Experience:</strong> {formData.experience}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="px-6 py-3 bg-brand-color text-secondary-foreground rounded-lg cursor-pointer hover:bg-brand-color/90 text-white disabled:opacity-90 disabled:cursor-not-allowed transition-colors"
            >
              Back
            </button>

            {currentStep < totalSteps ? (
              <button
                type="button"
                onClick={nextStep}
                className="px-6 py-3 bg-primary text-white rounded-lg cursor-pointer hover:bg-primary/90 transition-colors"
              >
                Next
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="px-6 py-3 bg-primary text-white hover:bg-primary/90 cursor-pointer rounded-lg transition-colors"
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default StepperForm;
