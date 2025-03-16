import { getDictionary } from "@/i18n/server"
import LeadershipDevelopmentPage from "@/components/leadership-development-page"

export default async function LeadershipDevelopment({
  params,
}: {
  params: { locale: string }
}) {
  try {
    // Await the params object before destructuring
    const { locale } = await params;
    const dict = await getDictionary(locale)
    return <LeadershipDevelopmentPage dict={dict} locale={locale} />
  } catch (error) {
    console.error("Error rendering leadership development page:", error)
    // Fallback to a simple page if there's an error
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold mb-4">Leadership Development</h1>
        <p className="text-xl">We are experiencing some technical difficulties. Please try again later.</p>
      </div>
    )
  }
}

