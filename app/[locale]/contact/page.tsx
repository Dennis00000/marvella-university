import { getDictionary } from "@/i18n/server"
import ContactPage from "@/components/contact-page"

export default async function Contact({
  params,
}: {
  params: { locale: string }
}) {
  // Await the params object before destructuring
  const { locale } = await params;

  try {
    const dict = await getDictionary(locale)
    return <ContactPage dict={dict} locale={locale} />
  } catch (error) {
    console.error("Error rendering contact page:", error)
    // Fallback to a simple page if there's an error
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold mb-4">Contact Marvella University</h1>
        <p className="text-xl">We are experiencing some technical difficulties. Please try again later.</p>
      </div>
    )
  }
}

