"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Users, Microscope, Globe, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function GlobalResearchCollaborationsPage() {
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

  const researchAreas = [
    {
      title: "Climate Change & Sustainability",
      description:
        "Collaborative research on environmental challenges and sustainable solutions across global ecosystems.",
      icon: <Globe className="h-8 w-8 text-blue-700" />,
      partners: ["Oxford University", "University of Tokyo", "Stanford University", "ETH Zurich"],
    },
    {
      title: "Medical & Health Sciences",
      description: "Cross-border research initiatives addressing global health challenges and medical innovations.",
      icon: <Microscope className="h-8 w-8 text-blue-700" />,
      partners: [
        "Johns Hopkins University",
        "Karolinska Institute",
        "University of Melbourne",
        "Seoul National University",
      ],
    },
    {
      title: "Technology & Innovation",
      description: "Multinational projects exploring emerging technologies and their applications across societies.",
      icon: <BookOpen className="h-8 w-8 text-blue-700" />,
      partners: ["MIT", "Technical University of Munich", "Tsinghua University", "Indian Institute of Technology"],
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=600&width=1920&text=Global+Research"
            alt="Global Research Collaborations"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Global Research Collaborations</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Collaborate on groundbreaking projects with scholars worldwide, driving innovation in your field
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
              Our Global Research Network
            </motion.h2>

            <motion.p variants={fadeIn} className="text-lg mb-6">
              At Marvella University, we believe that the most significant research challenges of our time require
              collaborative, cross-border approaches. Our Global Research Collaborations program connects our faculty
              and students with leading researchers and institutions worldwide to tackle complex global issues.
            </motion.p>

            <motion.p variants={fadeIn} className="text-lg mb-6">
              Through joint research initiatives, international conferences, and shared resources, we create
              opportunities for scholars to exchange ideas, methodologies, and findings across cultural and geographical
              boundaries. These collaborations not only advance knowledge in various fields but also provide our
              students with invaluable exposure to diverse research perspectives and approaches.
            </motion.p>

            <motion.p variants={fadeIn} className="text-lg mb-10">
              Whether you're an undergraduate seeking research experience, a graduate student developing your thesis, or
              a faculty member looking to expand your research network, our Global Research Collaborations program
              offers pathways to engage with the international academic community and contribute to groundbreaking
              discoveries.
            </motion.p>

            <motion.div variants={fadeIn} className="relative h-80 w-full rounded-lg overflow-hidden mb-16">
              <Image
                src="/placeholder.svg?height=600&width=1200&text=Global+Research"
                alt="Global research collaborations"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.h3 variants={fadeIn} className="text-2xl font-bold mb-6">
              Key Research Areas
            </motion.h3>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {researchAreas.map((area, index) => (
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
                      {area.icon}
                      <h4 className="text-xl font-bold">{area.title}</h4>
                    </div>
                    <p className="text-gray-600 mb-6">{area.description}</p>
                    <div>
                      <h5 className="font-semibold mb-2">Key Partners:</h5>
                      <ul className="space-y-2">
                        {area.partners.map((partner, idx) => (
                          <li key={idx} className="flex items-center">
                            <Users className="h-4 w-4 text-blue-700 mr-2" />
                            <span>{partner}</span>
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
            <h3 className="text-2xl font-bold mb-6 text-center">Research Opportunities</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-4">For Students</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-blue-700 mr-2 mt-2"></div>
                    <span>International research internships</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-blue-700 mr-2 mt-2"></div>
                    <span>Cross-border research projects</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-blue-700 mr-2 mt-2"></div>
                    <span>Global research conferences</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-blue-700 mr-2 mt-2"></div>
                    <span>Research exchange programs</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-4">For Faculty</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-blue-700 mr-2 mt-2"></div>
                    <span>Joint research funding opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-blue-700 mr-2 mt-2"></div>
                    <span>Visiting researcher positions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-blue-700 mr-2 mt-2"></div>
                    <span>International publication collaborations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-blue-700 mr-2 mt-2"></div>
                    <span>Global research symposiums</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h3 className="text-2xl font-bold mb-6">Ready to Join Our Global Research Community?</h3>
            <p className="text-lg mb-8">
              Explore opportunities to collaborate with researchers worldwide and contribute to groundbreaking
              discoveries.
            </p>
            <Button asChild size="lg" className="bg-blue-700 hover:bg-blue-800">
              <Link href="/contact">Contact Our Research Office</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}

