"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

type CoursePageProps = {
  dict: any
  locale: string
}

export default function CoursePage({ dict, locale }: CoursePageProps) {
  const courseDict = dict?.courses || {
    hero: { title: "Our Courses" },
    types: {
      title: "Courses We Offer",
      description:
        "Discover our comprehensive range of academic programs designed to meet diverse educational needs and career aspirations. From foundational certificates to advanced postgraduate studies, Marvella University provides quality education at every level.",
    },
    programs: {
      title: "Available Programs",
      description: "Discover our comprehensive range of academic programs",
      learnMore: "Learn More",
    },
    cta: {
      title: "Enroll For Our Various Online Courses",
      subtitle: "Anywhere From The World",
      button: "CONTACT US",
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

  const courseTypes = [
    {
      title: "Intermediate",
      description:
        "Our intermediate programs offer specialized certificates and diplomas designed to build practical skills in specific fields. These programs typically range from 6 months to 2 years and provide focused training that prepares students for entry-level positions or serves as stepping stones to more advanced degrees.",
    },
    {
      title: "Degree",
      description:
        "Our undergraduate degree programs provide a comprehensive education combining theoretical knowledge with practical applications. These 3-4 year programs offer a solid foundation in your chosen field, with opportunities for specialization, internships, and research projects. Our degrees are internationally recognized and designed to prepare graduates for successful careers or further academic pursuits.",
    },
    {
      title: "Post Graduation",
      description:
        "Our postgraduate programs are designed for those seeking advanced expertise and specialization. These programs include Master's degrees, PhDs, and professional certifications that deepen your knowledge, enhance research capabilities, and develop leadership skills. With a focus on innovation and critical thinking, our postgraduate studies prepare you for leadership roles, academic careers, or specialized professional positions.",
    },
  ]

  const courses = [
    {
      id: "computer-science",
      title: "Computer Science",
      level: "Undergraduate",
      duration: "4 years",
      description: "Explore the fundamentals of computing, algorithms, and software development.",
    },
    {
      id: "business-administration",
      title: "Business Administration",
      level: "Undergraduate",
      duration: "3 years",
      description: "Develop essential skills in management, marketing, and entrepreneurship.",
    },
    {
      id: "psychology",
      title: "Psychology",
      level: "Undergraduate",
      duration: "3 years",
      description: "Understand human behavior, cognition, and mental processes.",
    },
    {
      id: "data-science",
      title: "Data Science",
      level: "Graduate",
      duration: "2 years",
      description: "Master the art of extracting insights from complex data sets.",
    },
    {
      id: "artificial-intelligence",
      title: "Artificial Intelligence",
      level: "Graduate",
      duration: "2 years",
      description: "Learn to build intelligent systems and machine learning models.",
    },
    {
      id: "international-relations",
      title: "International Relations",
      level: "Graduate",
      duration: "2 years",
      description: "Analyze global politics, diplomacy, and international organizations.",
    },
  ]

  return (
    <>
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/image/courses-hero.jpg" alt="Our Courses" fill className="object-cover brightness-50" priority />
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{courseDict.hero.title}</h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeIn} className="text-4xl font-bold mb-4 text-black dark:text-white">
              {courseDict.types.title}
            </motion.h2>
            <motion.p variants={fadeIn} className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              {courseDict.types.description}
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {courseTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300 border-blue-100 dark:border-blue-900">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl text-black dark:text-white">{type.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 dark:text-gray-300">{type.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeIn} className="text-4xl font-bold mb-4 text-black dark:text-white">
              {courseDict.programs.title}
            </motion.h2>
            <motion.p variants={fadeIn} className="text-gray-700 dark:text-gray-300">
              {courseDict.programs.description}
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-blue-100 dark:border-blue-900 bg-white dark:bg-gray-800">
                  <CardHeader>
                    <CardTitle className="text-black dark:text-white">{course.title}</CardTitle>
                    <CardDescription className="text-gray-700 dark:text-gray-300">
                      {course.level} • {course.duration}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 dark:text-gray-300">{course.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild size="sm" className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium">
                      <Link href={`/${locale}/course/${course.id}`}>
                        {courseDict.programs.learnMore || "Learn More"}
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-700 text-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="container mx-auto px-4 text-center"
        >
          <motion.h2 variants={fadeIn} className="text-4xl font-bold mb-8">
            {courseDict.cta.title}
          </motion.h2>
          <motion.h3 variants={fadeIn} className="text-2xl mb-8">
            {courseDict.cta.subtitle}
          </motion.h3>
          <motion.div variants={fadeIn}>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-600 font-medium"
            >
              <Link href={`/${locale}/contact`}>{courseDict.cta.button}</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}

