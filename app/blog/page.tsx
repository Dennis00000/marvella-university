"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function BlogPage() {
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

  const blogPosts = [
    {
      title: "Programs For 2024",
      date: "March 10, 2024",
      excerpt:
        "Discover Marvel, where academic excellence meets innovation and inclusivity. With a legacy of fostering critical thinking and intellectual growth, we empower our students to tackle tomorrow's challenges with confidence.",
      image: "/placeholder.svg?height=400&width=800",
    },
    {
      title: "Campus Life at Marvel University",
      date: "February 25, 2024",
      excerpt:
        "Experience the vibrant community and diverse opportunities that make Marvella University a unique place to learn and grow. From student clubs to cultural events, there's something for everyone.",
      image: "/placeholder.svg?height=400&width=800",
    },
    {
      title: "Research Breakthroughs",
      date: "February 15, 2024",
      excerpt:
        "Our faculty and students continue to push the boundaries of knowledge with groundbreaking research across disciplines. Learn about our latest discoveries and innovations.",
      image: "/placeholder.svg?height=400&width=800",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=600&width=1920"
            alt="Blog"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Blog</h1>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-1 gap-12 max-w-4xl mx-auto">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="border-b pb-12 last:border-b-0"
              >
                <div className="relative h-64 md:h-80 mb-6 overflow-hidden rounded-lg">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
                <p className="text-gray-500 mb-4">{post.date}</p>
                <p className="text-gray-700 mb-6">{post.excerpt}</p>
                <p className="mb-6">
                  Our renowned faculty, state-of-the-art facilities, and vibrant community create an inspiring
                  environment for personal and professional development.
                </p>
                <p className="mb-6">
                  Committed to serving society through education and research, we invite you to join us on a journey of
                  knowledge, discovery, and impact. Welcome to Marvel University.
                </p>

                {/* Comment Section */}
                {index === 0 && (
                  <div className="mt-12 border p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-6">Leave a comment</h3>
                    <form className="space-y-4">
                      <Input type="text" placeholder="Enter Name" className="bg-gray-100" />
                      <Input type="email" placeholder="Enter email" className="bg-gray-100" />
                      <Textarea placeholder="Your Comment" className="bg-gray-100 min-h-[120px]" />
                      <Button className="bg-blue-700 hover:bg-blue-800">POST COMMENT</Button>
                    </form>
                  </div>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

