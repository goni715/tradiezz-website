import { ChevronLeft, ChevronRight, MapPin } from "lucide-react"

export default function RelatedJobs() {
  const jobs = [
    {
      id: 1,
      company: "Freepik",
      logo: "f",
      logoColor: "bg-blue-600",
      location: "China",
      title: "Water Supply",
      type: "Full Time",
      salary: "$10K-$15K",
      featured: true,
    },
    {
      id: 2,
      company: "Instagram",
      logo: "ig",
      logoColor: "bg-gradient-to-tr from-purple-600 to-pink-500",
      location: "Australia",
      title: "Water Supply",
      type: "Contract Base",
      salary: "$50K-$80K",
    },
    {
      id: 3,
      company: "Upwork",
      logo: "Up",
      logoColor: "bg-green-500",
      location: "France",
      title: "Water Supply",
      type: "Full Time",
      salary: "$35K-$40K",
    },
    {
      id: 4,
      company: "Facebook",
      logo: "f",
      logoColor: "bg-blue-600",
      location: "United Kingdom of Great Britain",
      title: "Water Supply",
      type: "Part Time",
      salary: "$15K-$20K",
    },
    {
      id: 5,
      company: "Microsoft",
      logo: "MS",
      logoColor: "bg-gray-200",
      location: "Australia",
      title: "Water Supply",
      type: "Full Time",
      salary: "$40K-$50K",
    },
    {
      id: 6,
      company: "Youtube",
      logo: "YT",
      logoColor: "bg-red-600",
      location: "Germany",
      title: "Water Supply",
      type: "Part Time",
      salary: "$20K-$25K",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Related Jobs</h2>
        <div className="flex space-x-2">
          <button className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer">
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>
          <button className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer">
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <div key={job.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-start mb-4">
              <div
                className={`w-10 h-10 ${job.logoColor} text-white flex items-center justify-center rounded-md mr-3 flex-shrink-0`}
              >
                <span className="font-bold">{job.logo}</span>
              </div>
              <div>
                <div className="flex items-center">
                  <h3 className="font-medium text-gray-900">{job.company}</h3>
                  {job.featured && (
                    <span className="ml-2 px-2 py-0.5 text-xs bg-red-100 text-red-500 rounded">Featured</span>
                  )}
                </div>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{job.location}</span>
                </div>
              </div>
            </div>
            <h4 className="text-lg font-medium text-gray-900 mb-2">{job.title}</h4>
            <div className="flex items-center text-sm text-gray-500">
              <span>{job.type}</span>
              <span className="mx-2">•</span>
              <span>{job.salary}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
