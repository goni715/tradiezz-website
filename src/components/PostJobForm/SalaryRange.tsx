"use client"

import type React from "react"

import { useState } from "react"

const SalaryRange = () => {
  const [minPrice, setMinPrice] = useState(50)
  const [maxPrice, setMaxPrice] = useState(2500)
  const [minValue, setMinValue] = useState(50)
  const [maxValue, setMaxValue] = useState(2500)

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxValue - 1)
    setMinValue(value)
    setMinPrice(value)
  }

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minValue + 1)
    setMaxValue(value)
    setMaxPrice(value)
  }

  const handleMinInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value.replace(/[^0-9]/g, ""))
    if (value < maxPrice) {
      setMinPrice(value)
      setMinValue(value)
    }
  }

  const handleMaxInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value.replace(/[^0-9]/g, ""))
    if (value > minPrice) {
      setMaxPrice(value)
      setMaxValue(value)
    }
  }

  return (
    <>
      <div className="w">
        <h1 className="text-lg text-foreground mb-2 text-left">Remuneration</h1>

        <div className="relative mb-6">
          {/* Custom dual range slider */}
          <div className="relative">
            {/* Background track */}
            <div className="h-2 bg-gray-300 rounded-full"></div>

            {/* Active track between handles */}
            <div
              className="absolute h-2 bg-sky-400 rounded-full top-0"
              style={{
                left: `${((minValue - 0) / (5000 - 0)) * 100}%`,
                width: `${((maxValue - minValue) / (5000 - 0)) * 100}%`,
              }}
            ></div>

            {/* Min range input */}
            <input
              type="range"
              min="0"
              max="5000"
              value={minValue}
              onChange={handleMinChange}
              className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer z-[1] 
                [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 
                [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-sky-500 [&::-webkit-slider-thumb]:cursor-pointer 
                [&::-webkit-slider-thumb]:border-0 [&::-webkit-slider-thumb]:shadow-md
                [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:rounded-full 
                [&::-moz-range-thumb]:bg-sky-500 [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-0 
                [&::-moz-range-thumb]:shadow-md"
            />

            {/* Max range input */}
            <input
              type="range"
              min="0"
              max="5000"
              value={maxValue}
              onChange={handleMaxChange}
              className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer z-[2]
                [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 
                [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-sky-500 [&::-webkit-slider-thumb]:cursor-pointer 
                [&::-webkit-slider-thumb]:border-0 [&::-webkit-slider-thumb]:shadow-md
                [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:rounded-full 
                [&::-moz-range-thumb]:bg-sky-500 [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-0 
                [&::-moz-range-thumb]:shadow-md"
            />
          </div>
        </div>

        {/* Price input boxes */}
        <div className="flex gap-6">
          <div className="flex-1">
            <input
              type="text"
              value={`£${minPrice}`}
              onChange={handleMinInputChange}
              className="w-full px-4 py-3 text-lg font-medium text-gray-700 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:border-sky-400"
            />
          </div>
          <div className="flex-1">
            <input
              type="text"
              value={`£${maxPrice}`}
              onChange={handleMaxInputChange}
              className="w-full px-4 py-3 text-lg font-medium text-gray-700 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:border-sky-400"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default SalaryRange;