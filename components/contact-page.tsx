"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, Linkedin } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { z } from "zod"

type ContactPageProps = {
  dict: any
  locale: string
}

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

export default function ContactPage({ dict, locale }: ContactPageProps) {
  const contactDict = dict?.contact || {
    hero: { title: "Contact Us" },
    info: {
      building: { title: "Main Building", description: "London, England" },
      phone: { title: "+37061912346", description: "Monday to Saturday 10 Am to 6:30 Pm" },
      email: { title: "dennisopoola@gmail.com", description: "Email us your query" },
      linkedin: { title: "linkedin.com/in/do24", description: "Connect with us on LinkedIn" },
    },
    form: {
      name: "Enter your name",
      email: "Enter email address",
      subject: "Enter your subject",
      message: "Message",
      button: "Send Message",
    },
  }

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      formSchema.parse(formData)

      setErrors({})

      setIsSubmitting(true)

      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
        variant: "default",
      })

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {}
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message
          }
        })
        setErrors(newErrors)
      } else {
        toast({
          title: "Error sending message",
          description: "Please try again later.",
          variant: "destructive",
        })
      }
    } finally {
      setIsSubmitting(false)
    }
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

  return (
    <>
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/image/contact-hero.jpg" alt="Contact Us" fill className="object-cover brightness-50" priority />
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{contactDict.hero.title}</h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-8 flex flex-col items-center justify-center"
            >
              <motion.div variants={fadeIn} className="flex items-center space-x-8">
                <a href="tel:+37061912346" className="group">
                  <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-full group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                    <Phone className="h-6 w-6 text-blue-700 dark:text-blue-400" />
                  </div>
                </a>

                <a href="mailto:dennisopoola@gmail.com" className="group">
                  <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-full group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                    <Mail className="h-6 w-6 text-blue-700 dark:text-blue-400" />
                  </div>
                </a>

                <a href="http://www.linkedin.com/in/do24" target="_blank" rel="noopener noreferrer" className="group">
                  <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-full group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                    <Linkedin className="h-6 w-6 text-blue-700 dark:text-blue-400" />
                  </div>
                </a>
              </motion.div>

              <motion.div variants={fadeIn} className="text-center mt-6">
                <h3 className="text-xl font-bold mb-2 text-black dark:text-white">Contact Us</h3>
                <p className="text-black dark:text-white">We're here to help with any questions you may have</p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    placeholder={contactDict.form.name}
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 ${
                      errors.name ? "border-red-500" : ""
                    }`}
                    aria-invalid={errors.name ? "true" : "false"}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-sm text-red-500">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <Input
                    type="email"
                    placeholder={contactDict.form.email}
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 ${
                      errors.email ? "border-red-500" : ""
                    }`}
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-red-500">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <Input
                    type="text"
                    placeholder={contactDict.form.subject}
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 ${
                      errors.subject ? "border-red-500" : ""
                    }`}
                    aria-invalid={errors.subject ? "true" : "false"}
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                  />
                  {errors.subject && (
                    <p id="subject-error" className="mt-1 text-sm text-red-500">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <Textarea
                    placeholder={contactDict.form.message}
                    className={`min-h-[150px] bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 ${
                      errors.message ? "border-red-500" : ""
                    }`}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    aria-invalid={errors.message ? "true" : "false"}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-sm text-red-500">
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="bg-blue-700 hover:bg-blue-800 text-white font-medium"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : contactDict.form.button}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="h-[500px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.47340002653!2d-0.24168120642536509!3d51.52855824164916!2m3!1f0!2f3!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1647541416292!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Marvella University Location"
        ></iframe>
      </section>
    </>
  )
}

