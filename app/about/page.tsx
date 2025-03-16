"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
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
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=600&width=1920"
            alt="About Us"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About Us</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <motion.h2 variants={fadeIn} className="text-4xl font-bold mb-6">
                We are the world&apos;s best university
              </motion.h2>
              <motion.p variants={fadeIn} className="mb-4">
                At Marvella&apos;s, we are dedicated to fostering academic excellence, innovation, and inclusivity.
              </motion.p>
              <motion.div variants={fadeIn} className="mt-8">
                <Button asChild size="lg" className="bg-blue-700 hover:bg-blue-800">
                  <Link href="/course">EXPLORE NOW</Link>
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
              <Image src="/placeholder.svg?height=800&width=600" alt="Students" fill className="object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2 variants={fadeIn} className="text-4xl font-bold mb-12">
              About Us
            </motion.h2>

            <motion.p variants={fadeIn} className="mb-6 text-lg">
              At Marvella&apos;s, we are dedicated to fostering academic excellence, innovation, and inclusivity.
            </motion.p>

            <motion.p variants={fadeIn} className="mb-6 text-lg">
              With a rich history of nurturing intellectual curiosity and fostering critical thinking skills, we prepare
              our students to tackle the challenges of tomorrow with confidence.
            </motion.p>

            <motion.p variants={fadeIn} className="mb-6 text-lg">
              Our distinguished faculty, cutting-edge research facilities, and vibrant community create an environment
              where students can thrive academically, personally, and professionally.
            </motion.p>

            <motion.p variants={fadeIn} className="mb-6 text-lg">
              Committed to serving society through education, research, and community engagement, we strive to empower
              individuals to reach their full potential and make a positive impact on the world.
            </motion.p>

            <motion.p variants={fadeIn} className="text-lg">
              Join us at Marvella and be part of a dynamic community dedicated to knowledge, discovery, and
              transformation.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  )
}

