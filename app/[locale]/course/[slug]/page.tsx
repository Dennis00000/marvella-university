import { getDictionary } from "@/i18n/server"
import CourseDetailPage from "@/components/course-detail-page"

export default async function CourseDetail({
  params,
}: {
  params: { locale: string, slug: string }
}) {
  try {
    // Await the params object before destructuring
    const { locale, slug } = await params;
    const dict = await getDictionary(locale)
    return <CourseDetailPage dict={dict} locale={locale} slug={slug} />
  } catch (error) {
    console.error("Error rendering course detail page:", error)
    // Fallback to a simple page if there's an error
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold mb-4">Course Details</h1>
        <p className="text-xl">We are experiencing some technical difficulties. Please try again later.</p>
      </div>
    )
  }
}

