"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Star } from "lucide-react"

type TestimonialSectionProps = {
  testimonials: {
    title: string
    testimonial1: string
    testimonial2: string
  }
}

export default function TestimonialSection({ testimonials }: TestimonialSectionProps) {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="container mx-auto px-4"
    >
      <motion.h2 variants={fadeIn} className="text-4xl font-bold text-center mb-16 text-black dark:text-white">
        {testimonials.title}
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          variants={fadeIn}
          className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg flex gap-4 border border-gray-100 dark:border-gray-700"
        >
          <div className="flex-shrink-0">
            <div className="relative h-16 w-16 rounded-full overflow-hidden">
              <Image src="/image/testimonials/student1.jpg" alt="Student" fill className="object-cover" />
            </div>
          </div>
          <div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">"{testimonials.testimonial1}"</p>
            <div className="flex">
              {[1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
              <Star className="h-5 w-5 fill-gray-300 text-gray-300 dark:fill-gray-600 dark:text-gray-600" />
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn}
          className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg flex gap-4 border border-gray-100 dark:border-gray-700"
        >
          <div className="flex-shrink-0">
            <div className="relative h-16 w-16 rounded-full overflow-hidden">
              <Image src="/image/testimonials/student2.jpg" alt="Student" fill className="object-cover" />
            </div>
          </div>
          <div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">"{testimonials.testimonial2}"</p>
            <div className="flex">
              {[1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
              <Star
                className="h-5 w-5 fill-gray-300 text-yellow-400 dark:fill-gray-600 dark:text-yellow-400"
                strokeWidth={1}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

