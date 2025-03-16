import { Metadata } from 'next'
import { getDictionary } from "@/i18n/server"
import CoursePage from "@/components/course-page"

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  
  return {
    title: "Academic Programs | Marvella University Courses",
    description: "Explore Marvella University's diverse range of undergraduate, graduate, and professional programs designed to prepare students for global success.",
    openGraph: {
      title: "Academic Programs at Marvella University",
      description: "Discover our comprehensive range of courses and programs",
      url: `https://marvellauniversity.vercel.app/${locale}/course`,
    },
    alternates: {
      canonical: `https://marvellauniversity.vercel.app/${locale}/course`,
    },
  }
}

export default async function Course({
  params,
}: {
  params: { locale: string }
}) {
  try {
    // Await the params object before destructuring
    const { locale } = await params;
    const dict = await getDictionary(locale)
    return <CoursePage dict={dict} locale={locale} />
  } catch (error) {
    console.error("Error rendering course page:", error)
    // Fallback to a simple page if there's an error
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold mb-4">Courses at Marvella University</h1>
        <p className="text-xl">We are experiencing some technical difficulties. Please try again later.</p>
      </div>
    )
  }
}

