"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, BookOpen, Calendar, GraduationCap, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

type CourseDetailPageProps = {
  dict: any
  locale: string
  slug: string
}

export default function CourseDetailPage({ dict, locale, slug }: CourseDetailPageProps) {
  const router = useRouter()
  const [course, setCourse] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  const commonDict = dict?.common || {
    backTo: "Back to",
    applyNow: "Apply Now",
    contactUs: "Contact Us",
  }

  const courseDict = dict?.courses || {
    hero: { title: "Course Details" },
  }

  const courses = [
    {
      id: "computer-science",
      title: "Computer Science",
      level: "Undergraduate",
      duration: "4 years",
      description: "Explore the fundamentals of computing, algorithms, and software development.",
      fullDescription:
        "Our Computer Science program provides a comprehensive foundation in computing principles, algorithms, software development, and system architecture. Students will gain hands-on experience with cutting-edge technologies while developing critical thinking and problem-solving skills essential for success in the rapidly evolving tech industry.",
      careers: ["Software Developer", "Systems Analyst", "Data Scientist", "AI Specialist", "Web Developer"],
      keyModules: [
        "Programming Fundamentals",
        "Data Structures & Algorithms",
        "Database Systems",
        "Computer Networks",
        "Artificial Intelligence",
        "Software Engineering",
      ],
    },
    {
      id: "business-administration",
      title: "Business Administration",
      level: "Undergraduate",
      duration: "3 years",
      description: "Develop essential skills in management, marketing, and entrepreneurship.",
      fullDescription:
        "The Business Administration program equips students with a solid understanding of business principles, management strategies, and organizational behavior. Through case studies, group projects, and internships, students develop the analytical and leadership skills needed to thrive in today's competitive business environment.",
      careers: [
        "Business Analyst",
        "Marketing Manager",
        "Human Resources Specialist",
        "Operations Manager",
        "Entrepreneur",
      ],
      keyModules: [
        "Principles of Management",
        "Marketing Fundamentals",
        "Financial Accounting",
        "Business Ethics",
        "Organizational Behavior",
        "Strategic Management",
      ],
    },
    {
      id: "psychology",
      title: "Psychology",
      level: "Undergraduate",
      duration: "3 years",
      description: "Understand human behavior, cognition, and mental processes.",
      fullDescription:
        "Our Psychology program offers a scientific approach to understanding human behavior, cognition, and mental processes. Students will explore various psychological theories, research methods, and therapeutic approaches while developing critical thinking and analytical skills. The program provides a strong foundation for careers in mental health, education, and human services.",
      careers: [
        "Counselor",
        "Research Assistant",
        "Human Resources Specialist",
        "Social Worker",
        "Education Specialist",
      ],
      keyModules: [
        "Introduction to Psychology",
        "Cognitive Psychology",
        "Developmental Psychology",
        "Social Psychology",
        "Abnormal Psychology",
        "Research Methods",
      ],
    },
    {
      id: "data-science",
      title: "Data Science",
      level: "Graduate",
      duration: "2 years",
      description: "Master the art of extracting insights from complex data sets.",
      fullDescription:
        "The Data Science program combines statistics, programming, and domain expertise to extract meaningful insights from complex data. Students will learn to collect, analyze, and interpret large datasets using advanced computational methods and visualization techniques. The program prepares graduates for careers at the forefront of the data revolution.",
      careers: [
        "Data Scientist",
        "Data Analyst",
        "Machine Learning Engineer",
        "Business Intelligence Specialist",
        "Research Scientist",
      ],
      keyModules: [
        "Statistical Methods",
        "Machine Learning",
        "Data Mining",
        "Big Data Technologies",
        "Data Visualization",
        "Predictive Analytics",
      ],
    },
    {
      id: "artificial-intelligence",
      title: "Artificial Intelligence",
      level: "Graduate",
      duration: "2 years",
      description: "Learn to build intelligent systems and machine learning models.",
      fullDescription:
        "Our Artificial Intelligence program focuses on developing systems that can perform tasks that typically require human intelligence. Students will explore machine learning, neural networks, natural language processing, and computer vision while working on real-world AI applications. The program prepares graduates to lead innovation in this rapidly evolving field.",
      careers: [
        "AI Engineer",
        "Machine Learning Specialist",
        "NLP Engineer",
        "Computer Vision Engineer",
        "AI Research Scientist",
      ],
      keyModules: [
        "Machine Learning",
        "Deep Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Reinforcement Learning",
        "AI Ethics",
      ],
    },
    {
      id: "international-relations",
      title: "International Relations",
      level: "Graduate",
      duration: "2 years",
      description: "Analyze global politics, diplomacy, and international organizations.",
      fullDescription:
        "The International Relations program examines the complex interactions between nations, international organizations, and non-state actors. Students will analyze global political systems, diplomatic relations, international law, and security issues while developing critical thinking and communication skills. The program prepares graduates for careers in diplomacy, policy analysis, and global governance.",
      careers: [
        "Diplomat",
        "Policy Analyst",
        "International Development Specialist",
        "NGO Manager",
        "Political Risk Analyst",
      ],
      keyModules: [
        "International Politics",
        "Diplomatic History",
        "International Law",
        "Global Security",
        "International Organizations",
        "Foreign Policy Analysis",
      ],
    },
  ]

  useEffect(() => {
    const foundCourse = courses.find((c) => c.id === slug)

    if (foundCourse) {
      setCourse(foundCourse)
    } else {
      router.push(`/${locale}/course`)
    }

    setLoading(false)
  }, [slug, router, locale])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-medium text-gray-800">Loading...</p>
      </div>
    )
  }

  if (!course) {
    return null
  }

  return (
    <>
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/image/courses-hero.jpg"
            alt={course.title}
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{course.title}</h1>
          <p className="text-xl text-white/90">
            {course.level} • {course.duration}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Button asChild variant="ghost" className="mb-6 text-gray-800 hover:text-blue-700 hover:bg-blue-50">
              <Link href={`/${locale}/course`} className="flex items-center">
                <ArrowLeft className="mr-2 h-5 w-5" /> {commonDict.backTo} {courseDict.hero?.title || "Courses"}
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">Program Overview</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg leading-relaxed">
                  {course.fullDescription}
                </p>

                <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">Key Modules</h3>
                <ul className="grid md:grid-cols-2 gap-3 mb-8">
                  {course.keyModules.map((module: string, index: number) => (
                    <li key={index} className="flex items-center">
                      <BookOpen className="h-5 w-5 text-blue-700 dark:text-blue-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{module}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">Career Opportunities</h3>
                <ul className="grid md:grid-cols-2 gap-3 mb-8">
                  {course.careers.map((career: string, index: number) => (
                    <li key={index} className="flex items-center">
                      <GraduationCap className="h-5 w-5 text-blue-700 dark:text-blue-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{career}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="sticky top-24 border-blue-100 dark:border-blue-800 shadow-md bg-white dark:bg-gray-800">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Program Details</h3>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center">
                        <GraduationCap className="h-5 w-5 text-blue-700 dark:text-blue-400 mr-3 flex-shrink-0" />
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Level</p>
                          <p className="font-medium text-gray-900 dark:text-white">{course.level}</p>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <Calendar className="h-5 w-5 text-blue-700 dark:text-blue-400 mr-3 flex-shrink-0" />
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Duration</p>
                          <p className="font-medium text-gray-900 dark:text-white">{course.duration}</p>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <Users className="h-5 w-5 text-blue-700 dark:text-blue-400 mr-3 flex-shrink-0" />
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Class Size</p>
                          <p className="font-medium text-gray-900 dark:text-white">25 Students</p>
                        </div>
                      </div>
                    </div>

                    <Button asChild className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium">
                      <Link href={`/${locale}/contact`}>{commonDict.applyNow}</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

