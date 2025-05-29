"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronDown, Grid, List } from "lucide-react"

export default function FilterWithDropdown() {
  const [sortBy, setSortBy] = useState("Latest")
  const [perPage, setPerPage] = useState("12 per page")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false)
  const [perPageDropdownOpen, setPerPageDropdownOpen] = useState(false)

  const sortRef = useRef<HTMLDivElement>(null)
  const perPageRef = useRef<HTMLDivElement>(null)

  const sortOptions = ["Latest", "Oldest"]
  const perPageOptions = ["12 per page", "24 per page", "36 per page", "48 per page"]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setSortDropdownOpen(false)
      }
      if (perPageRef.current && !perPageRef.current.contains(event.target as Node)) {
        setPerPageDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 py-4 px-4 bg-white">
      <div className="w-full sm:w-auto" ref={sortRef}>
        <div className="relative inline-block w-full sm:w-auto">
          <button
            className="flex items-center justify-between w-full sm:w-40 px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
            onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
          >
            <span>{sortBy}</span>
            <ChevronDown className="w-4 h-4 ml-2" />
          </button>

          {sortDropdownOpen && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
              <ul className="py-1 overflow-auto text-sm max-h-60">
                {sortOptions.map((option) => (
                  <li
                    key={option}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setSortBy(option)
                      setSortDropdownOpen(false)
                    }}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="w-full sm:w-auto" ref={perPageRef}>
        <div className="relative inline-block w-full sm:w-auto">
          <button
            className="flex items-center justify-between w-full sm:w-40 px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
            onClick={() => setPerPageDropdownOpen(!perPageDropdownOpen)}
          >
            <span>{perPage}</span>
            <ChevronDown className="w-4 h-4 ml-2" />
          </button>

          {perPageDropdownOpen && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
              <ul className="py-1 overflow-auto text-sm max-h-60">
                {perPageOptions.map((option) => (
                  <li
                    key={option}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setPerPage(option)
                      setPerPageDropdownOpen(false)
                    }}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <button
          className={`p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 ${
            viewMode === "grid" ? "bg-gray-100 text-gray-900" : "text-gray-500 hover:bg-gray-50"
          }`}
          onClick={() => setViewMode("grid")}
          aria-label="Grid view"
        >
          <Grid className="w-5 h-5" />
        </button>
        <button
          className={`p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 ${
            viewMode === "list" ? "bg-gray-100 text-gray-900" : "text-gray-500 hover:bg-gray-50"
          }`}
          onClick={() => setViewMode("list")}
          aria-label="List view"
        >
          <List className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
