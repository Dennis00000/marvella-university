"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export const courses = [
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
    careers: ["Counselor", "Research Assistant", "Human Resources Specialist", "Social Worker", "Education Specialist"],
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

export default function CoursePage() {
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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet turpis nulla, eleifend faucibus est sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus. Donec sit.",
    },
    {
      title: "Degree",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet turpis nulla, eleifend faucibus est sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus. Donec sit.",
    },
    {
      title: "Post Graduation",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet turpis nulla, eleifend faucibus est sollicitudin ut. Maecenas ut venenatis ex, et dapibus purus. Donec sit.",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=600&width=1920"
            alt="Our Courses"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Courses</h1>
        </div>
      </section>

      {/* Course Types */}
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
              Courses We Offer
            </motion.h2>
            <motion.p variants={fadeIn} className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
                <Card className="h-full bg-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{type.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{type.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Courses */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeIn} className="text-4xl font-bold mb-4">
              Available Programs
            </motion.h2>
            <motion.p variants={fadeIn} className="text-gray-600">
              Discover our comprehensive range of academic programs
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
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle>{course.title}</CardTitle>
                    <CardDescription>
                      {course.level} • {course.duration}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{course.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild size="sm" className="w-full bg-blue-700 hover:bg-blue-800">
                      <Link href={`/course/${course.id}`}>Learn More</Link>
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
            Enroll For Our Various Online Courses
          </motion.h2>
          <motion.h3 variants={fadeIn} className="text-2xl mb-8">
            Anywhere From The World
          </motion.h3>
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

