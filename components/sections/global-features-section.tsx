"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import type { ReactNode } from "react"

type GlobalFeaturesSectionProps = {
  title: string
  features: {
    title: string
    description: string
    icon: ReactNode
    link: string
  }[]
  ctaText: string
  locale: string
}

export default function GlobalFeaturesSection({ title, features, ctaText, locale }: GlobalFeaturesSectionProps) {
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
      <motion.h2 variants={fadeIn} className="text-4xl font-bold text-center mb-8 text-black dark:text-white">
        {title}
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
          >
            <div className="h-full p-6 flex flex-col">
              <div className="flex items-center gap-4 pb-2">
                {feature.icon}
                <h3 className="text-lg font-semibold text-black dark:text-white">{feature.title}</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div variants={fadeIn} className="flex justify-center">
        <Link href={`/${locale}/global-campus`}>
          <ShimmerButton background="rgba(29, 78, 216, 1)" shimmerColor="#ffffff" className="font-medium">
            {ctaText}
          </ShimmerButton>
        </Link>
      </motion.div>
    </motion.div>
  )
}

