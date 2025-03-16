"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Users, Globe, Calendar, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function InternationalStudentNetworkPage() {
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

  const networkFeatures = [
    {
      title: "Cultural Student Organizations",
      description: "Join student-led groups representing diverse cultures and regions from around the world.",
      icon: <Users className="h-8 w-8 text-blue-700" />,
      examples: [
        "African Students Association",
        "Asian Cultural Society",
        "European Students Union",
        "Latin American Alliance",
        "Middle Eastern Cultural Club",
      ],
    },
    {
      title: "Global Events Calendar",
      description:
        "Participate in international celebrations, cultural festivals, and global awareness events throughout the year.",
      icon: <Calendar className="h-8 w-8 text-blue-700" />,
      examples: [
        "International Food Festival",
        "Global Music Night",
        "World Languages Fair",
        "International Film Series",
        "Cultural Fashion Show",
      ],
    },
    {
      title: "Virtual Exchange Platform",
      description:
        "Connect with students at partner universities worldwide through our digital collaboration platform.",
      icon: <Globe className="h-8 w-8 text-blue-700" />,
      examples: [
        "Virtual language exchange",
        "Cross-border project teams",
        "International discussion forums",
        "Global classroom connections",
        "Digital cultural showcases",
      ],
    },
  ]

  const testimonials = [
    {
      quote:
        "The International Student Network has been the highlight of my university experience. I've made friends from over 20 countries and gained insights into cultures I never would have encountered otherwise.",
      name: "Maria Rodriguez",
      origin: "Spain",
      year: "3rd Year, Business Administration",
    },
    {
      quote:
        "Through the network's virtual exchange platform, I collaborated with students from Tokyo, Nairobi, and São Paulo on a global sustainability project. These connections have shaped my worldview and career aspirations.",
      name: "David Chen",
      origin: "Canada",
      year: "4th Year, Environmental Science",
    },
    {
      quote:
        "As an international student, the network provided me with a sense of belonging from day one. The cultural events and support system made my transition to a new country so much smoother.",
      name: "Aisha Patel",
      origin: "India",
      year: "2nd Year, Computer Science",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=600&width=1920&text=International+Network"
            alt="International Student Network"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">International Student Network</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Build connections with peers globally through cultural events and academic collaborations
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
              Our International Community
            </motion.h2>

            <motion.p variants={fadeIn} className="text-lg mb-6">
              The International Student Network at Marvella University is a vibrant community that connects students
              from across the globe, fostering cross-cultural friendships, academic collaborations, and professional
              relationships that extend beyond graduation.
            </motion.p>

            <motion.p variants={fadeIn} className="text-lg mb-6">
              With students representing over 100 countries, our network celebrates cultural diversity while creating
              opportunities for meaningful exchange and mutual understanding. Through a variety of cultural events,
              collaborative projects, and digital platforms, we facilitate connections that enrich the educational
              experience and prepare students for success in a globalized world.
            </motion.p>

            <motion.p variants={fadeIn} className="text-lg mb-10">
              Whether you're an international student seeking a supportive community or a domestic student interested in
              global perspectives, the International Student Network offers countless ways to engage with peers from
              diverse backgrounds and expand your global network.
            </motion.p>

            <motion.div variants={fadeIn} className="relative h-80 w-full rounded-lg overflow-hidden mb-16">
              <Image
                src="/placeholder.svg?height=600&width=1200&text=International+Students"
                alt="International student community"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.h3 variants={fadeIn} className="text-2xl font-bold mb-6">
              Network Features
            </motion.h3>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {networkFeatures.map((feature, index) => (
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
                      {feature.icon}
                      <h4 className="text-xl font-bold">{feature.title}</h4>
                    </div>
                    <p className="text-gray-600 mb-6">{feature.description}</p>
                    <div>
                      <h5 className="font-semibold mb-2">Examples:</h5>
                      <ul className="space-y-2">
                        {feature.examples.map((example, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="h-2 w-2 rounded-full bg-blue-700 mr-2 mt-2"></div>
                            <span>{example}</span>
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
            <h3 className="text-2xl font-bold mb-6 text-center">Student Testimonials</h3>
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <MessageSquare className="h-6 w-6 text-blue-700 flex-shrink-0 mt-1" />
                    <div>
                      <p className="italic mb-4">"{testimonial.quote}"</p>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">
                          {testimonial.origin} • {testimonial.year}
                        </p>
                      </div>
                    </div>
                  </div>
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
            <h3 className="text-2xl font-bold mb-6">Join Our Global Community</h3>
            <p className="text-lg mb-8">
              Connect with students from around the world and build relationships that will enrich your university
              experience and beyond.
            </p>
            <Button asChild size="lg" className="bg-blue-700 hover:bg-blue-800">
              <Link href="/contact">Contact the International Student Office</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}

