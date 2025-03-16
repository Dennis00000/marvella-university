"use client"

import { lazy, Suspense } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Globe, Languages, Users, Award, Network } from "lucide-react"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { LoadingFallback } from "@/components/ui/loading-fallback"
import LazyImage from "@/components/lazy-image"
import JsonLd from "@/components/seo/json-ld"

// Lazy load non-critical components
const TestimonialSection = lazy(() => import("./sections/testimonial-section"))
const GlobalFeaturesSection = lazy(() => import("./sections/global-features-section"))

type HomePageProps = {
  dict: any
  locale: string
}

export default function HomePage({ dict, locale }: HomePageProps) {
  const homeDict = dict?.home || {
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

  const globalFeatures = [
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
  ]

  return (
    <>
      <JsonLd
        type="website"
        data={{
          name: "Marvella University - Home",
          description: "Fostering academic excellence, innovation, and inclusivity in a global learning environment",
        }}
      />

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/image/hero-background.jpg"
            alt="University Campus"
            fill
            className="object-cover brightness-50"
            priority
            sizes="100vw"
            quality={90}
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-center flex items-center justify-center h-full">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl mx-auto">
            <motion.h1
              variants={fadeIn}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
              style={{ willChange: "transform, opacity" }}
            >
              {homeDict.hero.title}
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-white/90 mb-10">
              {homeDict.hero.subtitle}
            </motion.p>
            <motion.div variants={fadeIn} className="flex justify-center">
              <Link href={`/${locale}/about`}>
                <ShimmerButton
                  background="rgb(10, 45, 141)"
                  shimmerColor="#ffffff"
                  className="font-medium text-base md:text-lg px-8 py-4"
                >
                  {homeDict.hero.cta}
                </ShimmerButton>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="container mx-auto px-4"
        >
          <motion.h2 variants={fadeIn} className="text-4xl font-bold text-center mb-16 text-black dark:text-white">
            {homeDict.facilities.title}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div variants={fadeIn} className="flex flex-col">
              <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                <LazyImage
                  src="/image/facilities/library.jpg"
                  alt="Library"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                  lowQualitySrc="/image/facilities/library-low.jpg"
                  fallbackSrc="/image/placeholder.jpg"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-black dark:text-white">
                {homeDict.facilities.library.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">{homeDict.facilities.library.description}</p>
            </motion.div>

            <motion.div variants={fadeIn} className="flex flex-col">
              <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                <LazyImage
                  src="/image/facilities/football.jpg"
                  alt="Football Field"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                  lowQualitySrc="/image/facilities/football-low.jpg"
                  fallbackSrc="/image/placeholder.jpg"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-black dark:text-white">
                {homeDict.facilities.football.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">{homeDict.facilities.football.description}</p>
            </motion.div>

            <motion.div variants={fadeIn} className="flex flex-col">
              <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                <LazyImage
                  src="/image/facilities/cafeteria.jpg"
                  alt="Cafeteria"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                  lowQualitySrc="/image/facilities/cafeteria-low.jpg"
                  fallbackSrc="/image/placeholder.jpg"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-black dark:text-white">{homeDict.facilities.food.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{homeDict.facilities.food.description}</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <Suspense fallback={<LoadingFallback message="Loading global campus features..." />}>
          <GlobalFeaturesSection
            title={homeDict.globalCampus.title}
            features={globalFeatures}
            ctaText={homeDict.globalCampus.cta}
            locale={locale}
          />
        </Suspense>
      </section>

      <section className="py-20">
        <Suspense fallback={<LoadingFallback message="Loading testimonials..." />}>
          <TestimonialSection testimonials={homeDict.testimonials} />
        </Suspense>
      </section>

      <section className="py-20 bg-blue-700 text-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="container mx-auto px-4 text-center"
        >
          <motion.h2 variants={fadeIn} className="text-4xl font-bold mb-8">
            {homeDict.cta.title}
          </motion.h2>
          <motion.h3 variants={fadeIn} className="text-2xl mb-8">
            {homeDict.cta.subtitle}
          </motion.h3>
          <motion.div variants={fadeIn} className="flex justify-center">
            <Link href={`/${locale}/contact`}>
              <ShimmerButton
                background="transparent"
                shimmerColor="#ffffff"
                className="border-2 border-white font-medium hover:bg-white/10"
              >
                {homeDict.cta.button}
              </ShimmerButton>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}

