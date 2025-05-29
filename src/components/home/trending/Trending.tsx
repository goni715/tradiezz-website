"use client"

import { FaLaptopCode } from "react-icons/fa";

const trendingData = [
  {
    label: "Engineering Careers",
    icon: <FaLaptopCode />,
    bgColor: "transparent",
    textColor: "black",
    border: true,
    hoverColor: null,
  },
  {
    label: "Skilled Trades Careers",
    icon: <FaLaptopCode />,
    bgColor: "green-500",
    textColor: "white",
    border: false,
    hoverColor: "green-600",
  },
  {
    label: "Retail & Sales Careers",
    icon: <FaLaptopCode />,
    bgColor: "yellow-500",
    textColor: "white",
    border: false,
    hoverColor: "yellow-600",
  },
  {
    label: "Manufacturing Careers",
    icon: <FaLaptopCode />,
    bgColor: "red-500",
    textColor: "white",
    border: false,
    hoverColor: "red-600",
  },
  {
    label: "Engineering Careers",
    icon: <FaLaptopCode />,
    bgColor: "blue-500",
    textColor: "white",
    border: false,
    hoverColor: "blue-600",
  },
  {
    label: "Engineering Careers",
    icon: <FaLaptopCode />,
    bgColor: "green-500",
    textColor: "white",
    border: false,
    hoverColor: "green-600",
  },
];






const Trending = () => {
  return (
    <>
      <section className="py-16 text-center px-4">
        <div className="max-w-7xl mx-auto px:2 sm:px-4">
          <h2 className="text-4xl font-semibold mb-6 text-primary">
            Trending Career Fields
          </h2>
          <p className="md:text-lg text-gray-800 mb-12 text-justify">
            Explore the career opportunities that are booming right now. From
            technology and engineering to skilled trades — these
            fields offer exciting roles, excellent growth, and bright
            futures.Whether youre just starting your journey or looking for a
            fresh start, discover industries that are shaping tomorrows world.
            Stay updated, stay ahead. Your dream career is waiting for you!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {trendingData?.map((item, index) => (
              <button
                key={index}
                className="flex items-center justify-center text-black p-4 rounded-xl border transition"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Trending;
