"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

type AboutPageProps = {
  dict: any
  locale: string
}

export default function AboutPage({ dict, locale }: AboutPageProps) {
  const aboutDict = dict?.about || {
    hero: { title: "About Us" },
    main: {
      title: "We are the world's best university",
      description: "At Marvella's, we are dedicated to fostering academic excellence, innovation, and inclusivity.",
      cta: "EXPLORE NOW",
    },
    content: {
      title: "About Us",
      p1: "At Marvella's, we are dedicated to fostering academic excellence, innovation, and inclusivity.",
      p2: "With a rich history of nurturing intellectual curiosity and fostering critical thinking skills, we prepare our students to tackle the challenges of tomorrow with confidence.",
      p3: "Our distinguished faculty, cutting-edge research facilities, and vibrant community create an environment where students can thrive academically, personally, and professionally.",
      p4: "Committed to serving society through education, research, and community engagement, we strive to empower individuals to reach their full potential and make a positive impact on the world.",
      p5: "Join us at Marvella and be part of a dynamic community dedicated to knowledge, discovery, and transformation.",
    },
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

  return (
    <>
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/image/about-hero.jpg" alt="About Us" fill className="object-cover brightness-50" priority />
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{aboutDict.hero.title}</h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <motion.h2 variants={fadeIn} className="text-4xl font-bold mb-6 text-black dark:text-white">
                {aboutDict.main.title}
              </motion.h2>
              <motion.p variants={fadeIn} className="mb-4 text-black dark:text-white">
                {aboutDict.main.description}
              </motion.p>
              <motion.div variants={fadeIn} className="mt-8">
                <Button asChild size="lg" className="bg-blue-700 hover:bg-blue-800">
                  <Link href={`/${locale}/course`}>{aboutDict.main.cta}</Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-lg overflow-hidden"
            >
              <Image src="/image/about-content.jpg" alt="Students" fill className="object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2 variants={fadeIn} className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">
              {aboutDict.content.title}
            </motion.h2>

            <motion.p variants={fadeIn} className="mb-6 text-lg text-black dark:text-white">
              {aboutDict.content.p1}
            </motion.p>

            <motion.p variants={fadeIn} className="mb-6 text-lg text-black dark:text-white">
              {aboutDict.content.p2}
            </motion.p>

            <motion.p variants={fadeIn} className="mb-6 text-lg text-black dark:text-white">
              {aboutDict.content.p3}
            </motion.p>

            <motion.p variants={fadeIn} className="mb-6 text-lg text-black dark:text-white">
              {aboutDict.content.p4}
            </motion.p>

            <motion.p variants={fadeIn} className="text-lg text-black dark:text-white">
              {aboutDict.content.p5}
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  )
}

