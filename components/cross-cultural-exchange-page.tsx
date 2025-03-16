"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Globe, Users, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

type CrossCulturalExchangePageProps = {
  dict: any
  locale: string
}

export default function CrossCulturalExchangePage({ dict, locale }: CrossCulturalExchangePageProps) {
  const commonDict = dict?.common || {
    backTo: "Back to",
    contactUs: "Contact Us",
  }

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

  const programs = [
    {
      title: "Study Abroad Program",
      description: "Spend a semester or full academic year at one of our partner institutions across the globe.",
      icon: <Globe className="h-8 w-8 text-blue-700" />,
      locations: ["Europe", "Asia", "North America", "South America", "Africa", "Australia"],
    },
    {
      title: "International Internships",
      description: "Gain valuable work experience through our global network of corporate and non-profit partners.",
      icon: <Users className="h-8 w-8 text-blue-700" />,
      locations: ["London", "Tokyo", "New York", "Berlin", "Singapore", "Sydney"],
    },
    {
      title: "Cultural Exchange Events",
      description: "Participate in on-campus events celebrating diverse cultures, traditions, and perspectives.",
      icon: <MapPin className="h-8 w-8 text-blue-700" />,
      locations: ["Campus-wide", "Virtual", "Community outreach"],
    },
  ]

  return (
    <>
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/image/global-campus/cross-cultural-hero.jpg"
            alt="Cross-Cultural Exchange"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Cross-Cultural Exchange</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Immerse yourself in diverse perspectives through global study programs and international internships
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Button
              asChild
              variant="ghost"
              className="mb-6 text-gray-800 dark:text-white hover:text-blue-700 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30"
            >
              <Link href={`/${locale}/global-campus`} className="flex items-center">
                <ArrowLeft className="mr-2 h-5 w-5" /> {commonDict.backTo} Global Campus
              </Link>
            </Button>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto mb-16"
          >
            <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-6 text-black dark:text-white">
              About Our Cross-Cultural Exchange Programs
            </motion.h2>

            <motion.p variants={fadeIn} className="text-black dark:text-white text-lg mb-6">
              At Marvella University, we believe that exposure to diverse cultures and perspectives is essential for
              developing global citizens. Our Cross-Cultural Exchange programs provide students with immersive
              experiences that broaden horizons and foster international understanding.
            </motion.p>

            <motion.p variants={fadeIn} className="text-gray-900 dark:text-white text-lg mb-6">
              Through partnerships with leading institutions worldwide, we offer a variety of opportunities for students
              to engage with different cultures, languages, and educational approaches. These experiences not only
              enhance academic learning but also develop crucial soft skills like adaptability, cultural sensitivity,
              and global communication.
            </motion.p>

            <motion.p variants={fadeIn} className="text-gray-900 dark:text-white text-lg mb-10">
              Whether through semester-long study abroad programs, international internships, or on-campus cultural
              events, our students gain the global perspective necessary to thrive in an interconnected world.
            </motion.p>

            <motion.div variants={fadeIn} className="relative h-80 w-full rounded-lg overflow-hidden mb-16">
              <Image
                src="/image/global-campus/cross-cultural-content.jpg"
                alt="Students participating in exchange programs"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.h3 variants={fadeIn} className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Our Exchange Programs
            </motion.h3>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-blue-100 dark:border-blue-900 bg-white dark:bg-gray-800">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      {program.icon}
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">{program.title}</h4>
                    </div>
                    <p className="text-black dark:text-white mb-6">{program.description}</p>
                    <div>
                      <h5 className="font-semibold mb-2 text-gray-900 dark:text-white">Available Locations:</h5>
                      <ul className="grid grid-cols-2 gap-2">
                        {program.locations.map((location, idx) => (
                          <li key={idx} className="flex items-center">
                            <MapPin className="h-4 w-4 text-blue-700 dark:text-blue-400 mr-2 flex-shrink-0" />
                            <span className="text-sm text-black dark:text-white">{location}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Ready to Expand Your Horizons?</h3>
            <p className="text-lg mb-8 text-gray-900 dark:text-white">
              Join our Cross-Cultural Exchange programs and embark on a transformative journey that will shape your
              academic, professional, and personal growth.
            </p>
            <Button asChild size="lg" className="bg-blue-700 hover:bg-blue-800 text-white font-medium">
              <Link href={`/${locale}/contact`}>{commonDict.contactUs}</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}

