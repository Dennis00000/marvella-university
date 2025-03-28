"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Award, Users, Globe, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

type LeadershipDevelopmentPageProps = {
  dict: any
  locale: string
}

export default function LeadershipDevelopmentPage({ dict, locale }: LeadershipDevelopmentPageProps) {
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

  const leadershipPrograms = [
    {
      title: "Global Leadership Certificate",
      description:
        "A comprehensive program developing cross-cultural leadership skills through coursework, workshops, and international experiences.",
      icon: <Award className="h-8 w-8 text-blue-700" />,
      duration: "1 year",
      format: "Hybrid (online and in-person)",
    },
    {
      title: "International Leadership Summit",
      description:
        "Annual gathering of student leaders from partner universities worldwide to address global challenges.",
      icon: <Users className="h-8 w-8 text-blue-700" />,
      duration: "1 week",
      format: "In-person, rotating global locations",
    },
    {
      title: "Cross-Cultural Leadership Mentorship",
      description: "One-on-one mentoring with international business leaders, diplomats, and social entrepreneurs.",
      icon: <Globe className="h-8 w-8 text-blue-700" />,
      duration: "6 months",
      format: "Virtual meetings with optional in-person components",
    },
  ]

  const upcomingEvents = [
    {
      title: "Leadership in a Digital World",
      date: "September 15-16, 2024",
      location: "Virtual Conference",
      description: "Explore how technology is reshaping leadership across cultures and industries.",
    },
    {
      title: "Women in Global Leadership",
      date: "October 10, 2024",
      location: "London Campus",
      description: "A symposium celebrating women's leadership contributions worldwide.",
    },
    {
      title: "Sustainable Leadership Workshop",
      date: "November 5-7, 2024",
      location: "Singapore Campus",
      description: "Develop leadership strategies for environmental and social sustainability.",
    },
  ]

  return (
    <>
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/image/global-campus/leadership-hero.jpg"
            alt="Leadership Development"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Leadership Development</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Develop cross-cultural communication and adaptability skills through global leadership programs
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
              Global Leadership Development
            </motion.h2>

            <motion.p variants={fadeIn} className="text-black dark:text-white text-lg mb-6">
              At Marvella University, we believe that effective leadership in today&apos;s interconnected world requires
              a global mindset, cultural intelligence, and adaptability. Our Leadership Development programs are
              designed to nurture these qualities in students, preparing them to lead diverse teams and organizations
              across cultural and geographical boundaries.
            </motion.p>

            <motion.p variants={fadeIn} className="text-gray-900 dark:text-white text-lg mb-6">
              Through a combination of academic coursework, experiential learning, international experiences, and
              mentorship opportunities, we help students develop the skills, knowledge, and perspectives needed to
              navigate complex global challenges and inspire positive change in diverse contexts.
            </motion.p>

            <motion.p variants={fadeIn} className="text-gray-900 dark:text-white text-lg mb-10">
              Whether you aspire to lead in business, government, education, or non-profit sectors, our leadership
              programs will equip you with the cross-cultural competencies and ethical foundations essential for
              effective global leadership.
            </motion.p>

            <motion.div variants={fadeIn} className="relative h-80 w-full rounded-lg overflow-hidden mb-16">
              <Image
                src="/image/global-campus/leadership-content.jpg"
                alt="Leadership development programs"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.h3 variants={fadeIn} className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Our Leadership Programs
            </motion.h3>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {leadershipPrograms.map((program, index) => (
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
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 text-blue-700 dark:text-blue-400 mr-2 flex-shrink-0" />
                        <span className="font-medium text-gray-900 dark:text-white">Duration:</span>
                        <span className="text-black dark:text-white">{program.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Globe className="h-4 w-4 text-blue-700 dark:text-blue-400 mr-2 flex-shrink-0" />
                        <span className="font-medium text-gray-900 dark:text-white">Format:</span>
                        <span className="ml-2 text-gray-900 dark:text-white">{program.format}</span>
                      </div>
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
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
              Upcoming Leadership Events
            </h3>
            <div className="space-y-6">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg border border-blue-100 dark:border-blue-800"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">{event.title}</h4>
                    <div className="flex items-center mt-2 md:mt-0">
                      <Calendar className="h-4 w-4 text-blue-700 dark:text-blue-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-900 dark:text-white">{event.date}</span>
                    </div>
                  </div>
                  <p className="text-gray-900 dark:text-white mb-2">{event.description}</p>
                  <div className="flex items-center">
                    <Globe className="h-4 w-4 text-blue-700 dark:text-blue-400 mr-2 flex-shrink-0" />
                    <span className="text-gray-900 dark:text-white">{event.location}</span>
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
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Develop Your Global Leadership Skills
            </h3>
            <p className="text-lg mb-8 text-gray-900 dark:text-white">
              Join our leadership programs and events to build the cross-cultural competencies needed for success in
              today&apos;s interconnected world.
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

