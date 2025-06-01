"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

// Blog data
const blogs = [
  {
    id: 1,
    category: "Industry Insights",
    views: 10,
    title: "Top 10 Skills in Demand for Manufacturing Engineers in 2025",
    excerpt:
      "Discover the most sought-after skills that manufacturing employers are looking for in today's competitive job market.",
    author: "Michael Chen",
    date: "May 15, 2025",
    image: "/placeholder.svg?height=400&width=600",
    slug: "/blog/top-10-skills",
  },
  {
    id: 2,
    category: "Career & Skills",
    views: 10,
    title: "How AI is Revolutionizing Engineering Job Recruitment",
    excerpt:
      "Artificial intelligence is changing how companies find and hire top engineering talent. Learn how AI is transforming the recruitment landscape.",
    author: "Sarah Johnson",
    date: "May 10, 2025",
    image: "/placeholder.svg?height=400&width=600",
    slug: "/blog/ai-revolutionizing-recruitment",
  },
  {
    id: 3,
    category: "Mindset & Growth",
    views: 10,
    title: "Sustainable Manufacturing: Jobs of the Future",
    excerpt:
      "Explore how the push for sustainability is creating new roles and opportunities in the manufacturing industry.",
    author: "David Rodriguez",
    date: "May 5, 2025",
    image: "/placeholder.svg?height=400&width=600",
    slug: "/blog/sustainable-manufacturing",
  },
  {
    id: 4,
    category: "Technology Trends",
    views: 8,
    title: "The Rise of Digital Twins in Modern Engineering",
    excerpt: "How virtual replicas are transforming product development, testing, and maintenance across industries.",
    author: "Lisa Wong",
    date: "May 2, 2025",
    image: "/placeholder.svg?height=400&width=600",
    slug: "/blog/digital-twins",
  },
  {
    id: 5,
    category: "Industry Insights",
    views: 12,
    title: "Supply Chain Resilience: Lessons from Global Disruptions",
    excerpt:
      "Key strategies manufacturing companies are implementing to build more robust and adaptable supply chains.",
    author: "James Peterson",
    date: "April 28, 2025",
    image: "/placeholder.svg?height=400&width=600",
    slug: "/blog/supply-chain-resilience",
  },
]

// Color mapping for categories
const categoryColors: Record<string, string> = {
  "Industry Insights": "bg-emerald-100 text-emerald-800",
  "Career & Skills": "bg-sky-100 text-sky-800",
  "Mindset & Growth": "bg-amber-100 text-amber-800",
  "Technology Trends": "bg-purple-100 text-purple-800",
}

export default function RecentBlogs() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [width, setWidth] = useState(0)
  const carousel = useRef<HTMLDivElement>(null)

  // For mobile detection
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      if (carousel.current) {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === blogs.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? blogs.length - 1 : prev - 1))
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  const cardHoverVariants = {
    rest: { scale: 1, y: 0 },
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  }

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div className="flex justify-between items-center mb-12" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 relative">
            Recent Blogs
            <span className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-emerald-500 to-sky-500"></span>
          </h2>

          {!isMobile && (
            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
                aria-label="Previous slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
                aria-label="Next slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          )}
        </motion.div>

        {/* Mobile view - single card with pagination */}
        {isMobile && (
          <div className="relative">
            <motion.div className="overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="w-full"
              >
                <BlogCard blog={blogs[activeIndex]} />
              </motion.div>

              <div className="flex justify-center mt-6 gap-2">
                {blogs.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex ? "bg-emerald-500 w-6" : "bg-gray-300"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        )}

        {/* Desktop view - horizontal scrolling cards */}
        {!isMobile && (
          <motion.div className="overflow-hidden cursor-grab" ref={carousel} whileTap={{ cursor: "grabbing" }}>
            <motion.div
              className="flex gap-6"
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              animate={{ x: -activeIndex * (300 + 24) }} // Card width + gap
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {blogs.map((blog) => (
                <motion.div
                  key={blog.id}
                  className="min-w-[300px] md:min-w-[350px] lg:min-w-[380px]"
                  variants={itemVariants}
                  initial="rest"
                  whileHover="hover"
                >
                  <BlogCard blog={blog} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}

function BlogCard({ blog }: { blog: (typeof blogs)[0] }) {
  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-lg h-full flex flex-col"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={blog.image || "/placeholder.svg"}
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 w-full p-4 flex justify-between items-center">
          <span className={`text-xs font-medium px-3 py-1 rounded-full ${categoryColors[blog.category]}`}>
            {blog.category}
          </span>
          <div className="flex items-center text-white text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1"
            >
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            {blog.views}
          </div>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 line-clamp-2 text-gray-900">{blog.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">{blog.excerpt}</p>

        <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
          <div className="text-xs text-gray-500">
            <span className="font-medium text-gray-700">{blog.author}</span> • {blog.date}
          </div>
          <Link
            href={blog.slug}
            className="text-sm font-medium text-emerald-600 hover:text-emerald-700 flex items-center group"
          >
            Read more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1 transition-transform group-hover:translate-x-1"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
