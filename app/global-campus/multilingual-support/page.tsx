"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Languages, MessageSquare, BookOpen, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function MultilingualSupportPage() {
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

  const supportServices = [
    {
      title: "Language Classes",
      description: "Comprehensive language courses in over 20 languages, from beginner to advanced levels.",
      icon: <BookOpen className="h-8 w-8 text-blue-700" />,
      features: ["Small class sizes", "Native-speaking instructors", "Conversation practice", "Cultural context"],
    },
    {
      title: "Cultural Orientation",
      description: "Sessions designed to help international students adapt to campus life and local customs.",
      icon: <Users className="h-8 w-8 text-blue-700" />,
      features: ["Campus navigation", "Local customs", "Academic expectations", "Social integration"],
    },
    {
      title: "Multilingual Advisors",
      description: "Academic and personal advisors who speak multiple languages to assist international students.",
      icon: <MessageSquare className="h-8 w-8 text-blue-700" />,
      features: ["Academic guidance", "Personal support", "Cultural adjustment", "Resource connection"],
    },
  ]

  const languages = [
    "English",
    "Spanish",
    "French",
    "German",
    "Russian",
    "Mandarin",
    "Japanese",
    "Arabic",
    "Portuguese",
    "Italian",
    "Korean",
    "Hindi",
    "Turkish",
    "Dutch",
    "Swedish",
    "Polish",
    "Greek",
    "Hebrew",
    "Thai",
    "Vietnamese",
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=600&width=1920&text=Multilingual+Support"
            alt="Multilingual Support"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Multilingual Support</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Access language classes and cultural orientation sessions, with advisors fluent in multiple languages
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Button asChild variant="ghost" className="mb-6">
              <Link href="/global-campus" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Global Campus
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
            <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-6">
              Our Multilingual Support Services
            </motion.h2>

            <motion.p variants={fadeIn} className="text-lg mb-6">
              At Marvella University, we celebrate linguistic diversity and are committed to supporting students from
              all language backgrounds. Our comprehensive multilingual support services ensure that language is never a
              barrier to academic success or campus integration.
            </motion.p>

            <motion.p variants={fadeIn} className="text-lg mb-6">
              Our team of language specialists and cultural advisors work together to create a supportive environment
              where students can thrive regardless of their native language. From intensive language courses to
              one-on-one tutoring and cultural orientation sessions, we provide the resources needed for effective
              communication and cultural adaptation.
            </motion.p>

            <motion.p variants={fadeIn} className="text-lg mb-10">
              Whether you're looking to improve your English proficiency, maintain fluency in your native language, or
              learn an entirely new language, our multilingual support services are designed to meet your needs and
              enhance your global education experience.
            </motion.p>

            <motion.div variants={fadeIn} className="relative h-80 w-full rounded-lg overflow-hidden mb-16">
              <Image
                src="/placeholder.svg?height=600&width=1200&text=Language+Support"
                alt="Multilingual support services"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.h3 variants={fadeIn} className="text-2xl font-bold mb-6">
              Support Services We Offer
            </motion.h3>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {supportServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      {service.icon}
                      <h4 className="text-xl font-bold">{service.title}</h4>
                    </div>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <div>
                      <h5 className="font-semibold mb-2">Key Features:</h5>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <div className="h-2 w-2 rounded-full bg-blue-700 mr-2"></div>
                            <span>{feature}</span>
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
            className="max-w-4xl mx-auto mb-16"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Languages We Support</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {languages.map((language, index) => (
                <div key={index} className="bg-gray-50 p-3 rounded-md text-center hover:bg-blue-50 transition-colors">
                  <Languages className="h-5 w-5 text-blue-700 mx-auto mb-2" />
                  <span>{language}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h3 className="text-2xl font-bold mb-6">Need Language Support?</h3>
            <p className="text-lg mb-8">
              Our multilingual team is ready to assist you with language learning, cultural adaptation, and academic
              success.
            </p>
            <Button asChild size="lg" className="bg-blue-700 hover:bg-blue-800">
              <Link href="/contact">Contact Our Language Support Team</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}

