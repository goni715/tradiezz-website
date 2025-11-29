"use client"
import { useState, useRef, useEffect } from "react"
import { motion, Variants } from "framer-motion"
import { IBlog } from "@/types/blog.type"
import RecentBlogCard from "./RecentBlogCard"

type TProps = {
  blogs: IBlog[]
}

const RecentBlogs = ({ blogs }: TProps) => {
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

 const itemVariants: Variants = {
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


  return (
    <section className="max-w-7xl mx-auto py-12 px-4 bg-gray-50">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div className="flex justify-between items-center mb-12" variants={itemVariants}>
          <h2 className="text-3xl md:text-3xl font-bold text-gray-900 relative">
            Recent Blogs
            <span className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-emerald-500 to-sky-500"></span>
          </h2>

          {!isMobile && (
            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-white shadow-md cursor-pointer hover:bg-gray-50 transition-colors"
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
                className="p-2 rounded-full cursor-pointer bg-white shadow-md hover:bg-gray-50 transition-colors"
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
                <RecentBlogCard blog={blogs[activeIndex]} />
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
              {blogs.map((blog, i) => (
                <motion.div
                  key={i}
                  className="min-w-[300px] md:min-w-[350px] lg:min-w-[380px]"
                  variants={itemVariants}
                  initial="rest"
                  whileHover="hover"
                >
                  <RecentBlogCard blog={blog} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}




export default RecentBlogs;
