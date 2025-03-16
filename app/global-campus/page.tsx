"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Languages, Users, Award, Network } from "lucide-react"

export default function GlobalCampusPage() {
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

  const globalFeatures = [
    {
      title: "Cross-Cultural Exchange",
      description:
        "Immerse yourself in diverse perspectives through global study programs and international internships.",
      icon: <Globe className="h-8 w-8 text-blue-700" />,
      image: "/placeholder.svg?height=400&width=600&text=Cultural+Exchange",
      link: "/global-campus/cross-cultural-exchange",
    },
    {
      title: "Multilingual Support",
      description:
        "Access language classes and cultural orientation sessions, with advisors fluent in multiple languages.",
      icon: <Languages className="h-8 w-8 text-blue-700" />,
      image: "/placeholder.svg?height=400&width=600&text=Language+Support",
      link: "/global-campus/multilingual-support",
    },
    {
      title: "Global Research Collaborations",
      description: "Collaborate on groundbreaking projects with scholars worldwide, driving innovation in your field.",
      icon: <Users className="h-8 w-8 text-blue-700" />,
      image: "/placeholder.svg?height=400&width=600&text=Research+Collaboration",
      link: "/global-campus/global-research-collaborations",
    },
    {
      title: "Leadership Development",
      description: "Develop cross-cultural communication and adaptability skills through global leadership programs.",
      icon: <Award className="h-8 w-8 text-blue-700" />,
      image: "/placeholder.svg?height=400&width=600&text=Leadership",
      link: "/global-campus/leadership-development",
    },
    {
      title: "International Student Network",
      description: "Build connections with peers globally through cultural events and academic collaborations.",
      icon: <Network className="h-8 w-8 text-blue-700" />,
      image: "/placeholder.svg?height=400&width=600&text=Global+Network",
      link: "/global-campus/international-student-network",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=600&width=1920&text=Global+Campus"
            alt="Global Campus"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Global Campus</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Experience education without borders through our international programs and global network
          </p>
        </div>
      </section>

      {/* Global Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeIn} className="text-4xl font-bold mb-4">
              Global Campus Features
            </motion.h2>
            <motion.p variants={fadeIn} className="text-gray-600 max-w-3xl mx-auto">
              At Marvella University, we're committed to providing a truly global educational experience that prepares
              students for success in an interconnected world.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {globalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col">
                  <div className="relative h-48 w-full">
                    <Image
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      {feature.icon}
                      <CardTitle>{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white"
                    >
                      <Link href={feature.link}>Learn More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-700 text-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="container mx-auto px-4 text-center"
        >
          <motion.h2 variants={fadeIn} className="text-4xl font-bold mb-8">
            Join Our Global Community
          </motion.h2>
          <motion.p variants={fadeIn} className="text-xl mb-8 max-w-3xl mx-auto">
            Experience education that transcends borders and prepares you for success in a global context
          </motion.p>
          <motion.div variants={fadeIn}>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-600"
            >
              <Link href="/contact">CONTACT US</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}

