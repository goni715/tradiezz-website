"use client"

import { useState, useRef, useEffect } from "react"
import { motion, Variants } from "framer-motion"
import { IBlog } from "@/types/blog.type"
import RecentBlogCard from "./RecentBlogCard"

type TProps = {
  blogs: IBlog[]
}

const RecentBlogs = ({ blogs }: TProps) => {
  const [mounted, setMounted] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [width, setWidth] = useState(0)
  const carousel = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleResize = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      
      if (carousel.current) {
        setWidth(
          carousel.current.scrollWidth - carousel.current.offsetWidth
        )
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [blogs.length])

  const nextSlide = () =>
    setActiveIndex((prev) => (prev === blogs.length - 1 ? 0 : prev + 1))

  const prevSlide = () =>
    setActiveIndex((prev) => (prev === 0 ? blogs.length - 1 : prev - 1))

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  }

  // PREVENT HYDRATION ERROR: 
  // Return a shell with the same height/structure so the layout doesn't "jump"
  if (!mounted) {
    return <section className="max-w-7xl mx-auto py-12 px-4 bg-gray-50 min-h-[600px]" />
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
        {/* Header */}
        <motion.div
          className="flex justify-between items-center mb-12"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-bold text-gray-900 relative">
            Recent Blogs
            <span className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-emerald-500 to-sky-500" />
          </h2>

          {!isMobile && (
            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
              >
                ←
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
              >
                →
              </button>
            </div>
          )}
        </motion.div>

        {/* Carousel Logic */}
        <motion.div
          ref={carousel}
          className="overflow-hidden cursor-grab active:cursor-grabbing"
        >
          <motion.div
            className="flex gap-6"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            animate={{ x: isMobile ? 0 : -activeIndex * (350 + 24) }} 
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {blogs?.map((blog, i) => (
              <motion.div
                key={blog._id || i}
                className="min-w-[300px] md:min-w-[350px] lg:min-w-[380px]"
                variants={itemVariants}
              >
                <RecentBlogCard blog={blog} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default RecentBlogs