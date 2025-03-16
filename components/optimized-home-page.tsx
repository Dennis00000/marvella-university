"use client"

import { useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Globe, Languages, Users, Award, Network } from "lucide-react"
import { Button } from "@/components/ui/button"

type HomePageProps = {
  dict: any
  locale: string
}

export default function OptimizedHomePage({ dict, locale }: HomePageProps) {
  // Memoize the dictionary values to prevent unnecessary re-renders
  const homeDict = useMemo(() => {
    // Default values if dictionary is missing
    const defaults = {
      hero: {
        title: "We are the world's best university",
        subtitle: "At Marvella's, we are dedicated to fostering academic excellence, innovation, and inclusivity.",
        cta: "EXPLORE NOW",
      },
      facilities: {
        title: "Our Facilities",
        library: {
          title: "Library",
          description: "Welcome to our library, your gateway to boundless knowledge and exploration.",
        },
        football: {
          title: "Football",
          description: "Experience the thrill of the game with our football program at Marvella University.",
        },
        food: {
          title: "Tasty and Healthy Food",
          description: "Savor the flavors of community and convenience at our cafeteria.",
        },
      },
      globalCampus: {
        title: "Our Global Campus",
        cta: "Explore Global Campus",
        features: {
          crossCultural: {
            title: "Cross-Cultural Exchange",
            description: "Immerse yourself in diverse perspectives through global study programs.",
          },
          multilingual: {
            title: "Multilingual Support",
            description: "Access language classes and cultural orientation sessions.",
          },
          research: {
            title: "Global Research Collaborations",
            description: "Collaborate on groundbreaking projects with scholars worldwide.",
          },
          leadership: {
            title: "Leadership Development",
            description: "Develop cross-cultural communication and adaptability skills.",
          },
          network: {
            title: "International Student Network",
            description: "Build connections with peers globally through cultural events.",
          },
        },
      },
      testimonials: {
        title: "What Our Student Says",
        testimonial1: "The cafeteria at Marvella University is my go-to spot between classes!",
        testimonial2: "I'm constantly impressed by the quality of food at our cafeteria.",
      },
      cta: {
        title: "Join Our Global Community",
        subtitle: "Anywhere From The World",
        button: "CONTACT US",
      },
    }

    // If dict is missing, return defaults
    if (!dict || !dict.home) return defaults

    // Merge with defaults to ensure all properties exist
    return {
      hero: { ...defaults.hero, ...dict.home.hero },
      facilities: {
        ...defaults.facilities,
        ...dict.home.facilities,
        library: { ...defaults.facilities.library, ...dict.home.facilities?.library },
        football: { ...defaults.facilities.football, ...dict.home.facilities?.football },
        food: { ...defaults.facilities.food, ...dict.home.facilities?.food },
      },
      globalCampus: {
        ...defaults.globalCampus,
        ...dict.home.globalCampus,
        features: {
          ...defaults.globalCampus.features,
          ...dict.home.globalCampus?.features,
          crossCultural: {
            ...defaults.globalCampus.features.crossCultural,
            ...dict.home.globalCampus?.features?.crossCultural,
          },
          multilingual: {
            ...defaults.globalCampus.features.multilingual,
            ...dict.home.globalCampus?.features?.multilingual,
          },
          research: { ...defaults.globalCampus.features.research, ...dict.home.globalCampus?.features?.research },
          leadership: { ...defaults.globalCampus.features.leadership, ...dict.home.globalCampus?.features?.leadership },
          network: { ...defaults.globalCampus.features.network, ...dict.home.globalCampus?.features?.network },
        },
      },
      testimonials: { ...defaults.testimonials, ...dict.home.testimonials },
      cta: { ...defaults.cta, ...dict.home.cta },
    }
  }, [dict])

  // Memoize the global features to prevent unnecessary re-renders
  const globalFeatures = useMemo(
    () => [
      {
        title: homeDict.globalCampus.features.crossCultural.title,
        description: homeDict.globalCampus.features.crossCultural.description,
        icon: <Globe className="h-6 w-6 text-blue-700" />,
        link: `/${locale}/global-campus/cross-cultural-exchange`,
      },
      {
        title: homeDict.globalCampus.features.multilingual.title,
        description: homeDict.globalCampus.features.multilingual.description,
        icon: <Languages className="h-6 w-6 text-blue-700" />,
        link: `/${locale}/global-campus/multilingual-support`,
      },
      {
        title: homeDict.globalCampus.features.research.title,
        description: homeDict.globalCampus.features.research.description,
        icon: <Users className="h-6 w-6 text-blue-700" />,
        link: `/${locale}/global-campus/global-research-collaborations`,
      },
      {
        title: homeDict.globalCampus.features.leadership.title,
        description: homeDict.globalCampus.features.leadership.description,
        icon: <Award className="h-6 w-6 text-blue-700" />,
        link: `/${locale}/global-campus/leadership-development`,
      },
      {
        title: homeDict.globalCampus.features.network.title,
        description: homeDict.globalCampus.features.network.description,
        icon: <Network className="h-6 w-6 text-blue-700" />,
        link: `/${locale}/global-campus/international-student-network`,
      },
    ],
    [homeDict, locale],
  )

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
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="University Campus"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl mx-auto">
            <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-bold text-white mb-6">
              {homeDict.hero.title}
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-white/90 mb-8">
              {homeDict.hero.subtitle}
            </motion.p>
            <motion.div variants={fadeIn}>
              <Button asChild size="lg" className="bg-blue-700 hover:bg-blue-800">
                <Link href={`/${locale}/about`}>{homeDict.hero.cta}</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Rest of the component remains the same, but uses homeDict and globalFeatures */}
      {/* ... */}
    </>
  )
}

