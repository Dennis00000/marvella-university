import { getDictionary } from "@/i18n/server"
import MultilingualSupportPage from "@/components/multilingual-support-page"

export default async function MultilingualSupport({
  params,
}: {
  params: { locale: string }
}) {
  try {
    // Await the params object before destructuring
    const { locale } = await params;
    const dict = await getDictionary(locale)
    return <MultilingualSupportPage dict={dict} locale={locale} />
  } catch (error) {
    console.error("Error rendering multilingual support page:", error)
    // Fallback to a simple page if there's an error
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold mb-4">Multilingual Support</h1>
        <p className="text-xl">We are experiencing some technical difficulties. Please try again later.</p>
      </div>
    )
  }
}

