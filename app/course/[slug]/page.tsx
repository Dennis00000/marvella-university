"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, BookOpen, Calendar, GraduationCap, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { courses } from "../page"

export default function CourseDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [course, setCourse] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const slug = params.slug
    const foundCourse = courses.find((c) => c.id === slug)

    if (foundCourse) {
      setCourse(foundCourse)
    } else {
      // Redirect to courses page if course not found
      router.push("/course")
    }

    setLoading(false)
  }, [params.slug, router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    )
  }

  if (!course) {
    return null // Will redirect via the useEffect
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=500&width=1920"
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

      {/* Course Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Button asChild variant="ghost" className="mb-6">
              <Link href="/course" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Courses
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <h2 className="text-3xl font-bold mb-6">Program Overview</h2>
                <p className="text-gray-700 mb-8 text-lg leading-relaxed">{course.fullDescription}</p>

                <h3 className="text-2xl font-bold mb-4">Key Modules</h3>
                <ul className="grid md:grid-cols-2 gap-3 mb-8">
                  {course.keyModules.map((module: string, index: number) => (
                    <li key={index} className="flex items-center">
                      <BookOpen className="h-5 w-5 text-blue-700 mr-2" />
                      <span>{module}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-2xl font-bold mb-4">Career Opportunities</h3>
                <ul className="grid md:grid-cols-2 gap-3 mb-8">
                  {course.careers.map((career: string, index: number) => (
                    <li key={index} className="flex items-center">
                      <GraduationCap className="h-5 w-5 text-blue-700 mr-2" />
                      <span>{career}</span>
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
                <Card className="sticky top-24">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Program Details</h3>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center">
                        <GraduationCap className="h-5 w-5 text-blue-700 mr-3" />
                        <div>
                          <p className="text-sm text-gray-500">Level</p>
                          <p className="font-medium">{course.level}</p>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <Calendar className="h-5 w-5 text-blue-700 mr-3" />
                        <div>
                          <p className="text-sm text-gray-500">Duration</p>
                          <p className="font-medium">{course.duration}</p>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <Users className="h-5 w-5 text-blue-700 mr-3" />
                        <div>
                          <p className="text-sm text-gray-500">Class Size</p>
                          <p className="font-medium">25 Students</p>
                        </div>
                      </div>
                    </div>

                    <Button asChild className="w-full bg-blue-700 hover:bg-blue-800">
                      <Link href="/contact">Apply Now</Link>
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

