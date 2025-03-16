"use client"

import { usePathname } from "next/navigation"

type JsonLdProps = {
  type: "university" | "course" | "article" | "organization" | "website"
  data?: Record<string, any>
}

export default function JsonLd({ type, data = {} }: JsonLdProps) {
  const pathname = usePathname()
  const baseUrl = "https://marvellauniversity.vercel.app"
  const currentUrl = `${baseUrl}${pathname}`

  let jsonLd = {}

  switch (type) {
    case "university":
      jsonLd = {
        "@context": "https://schema.org",
        "@type": "CollegeOrUniversity",
        name: "Marvella University",
        url: baseUrl,
        logo: "https://marvellauniversity.vercel.app/icons/icon-512x512.png",
        sameAs: [
          "https://facebook.com/marvellauniversity",
          "https://twitter.com/marvellauni",
          "https://instagram.com/marvellauniversity",
          "https://linkedin.com/school/marvellauniversity"
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "123 University Avenue",
          addressLocality: "Marvella City",
          addressRegion: "MC",
          postalCode: "12345",
          addressCountry: "US"
        },
        telephone: "+1-123-456-7890",
        email: "admissions@marvellauniversity.edu",
        description: "Fostering academic excellence, innovation, and inclusivity in a global learning environment",
        ...data,
      }
      break
    case "course":
      jsonLd = {
        "@context": "https://schema.org",
        "@type": "Course",
        name: data.title || "University Course",
        description: data.description || "Course at Marvella University",
        provider: {
          "@type": "CollegeOrUniversity",
          name: "Marvella University",
          sameAs: baseUrl,
        },
        url: currentUrl,
        ...data,
      }
      break
    case "article":
      jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: data.title || "University Article",
        description: data.description || "Article from Marvella University",
        image: data.image || `${baseUrl}/image/blog-hero.jpg`,
        datePublished: data.date || new Date().toISOString(),
        author: {
          "@type": "Organization",
          name: "Marvella University",
        },
        publisher: {
          "@type": "Organization",
          name: "Marvella University",
          logo: {
            "@type": "ImageObject",
            url: `${baseUrl}/logo.png`,
          },
        },
        url: currentUrl,
        ...data,
      }
      break
    case "organization":
      jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Marvella University",
        url: baseUrl,
        logo: `${baseUrl}/logo.png`,
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+37061912346",
          email: "dennisopoola@gmail.com",
          contactType: "customer service",
        },
        sameAs: ["https://www.linkedin.com/in/do24"],
        ...data,
      }
      break
    case "website":
    default:
      jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: data?.name || "Marvella University",
        url: baseUrl,
        description: data?.description || "Fostering academic excellence, innovation, and inclusivity in a global learning environment",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://marvellauniversity.vercel.app/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        },
        ...data,
      }
      break
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

