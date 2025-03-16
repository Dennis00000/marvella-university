import { getDictionary } from "@/i18n/server"
import InternationalStudentNetworkPage from "@/components/international-student-network-page"

export default async function InternationalStudentNetwork({
  params,
}: {
  params: { locale: string }
}) {
  try {
    const { locale } = await params;
    const dict = await getDictionary(locale)
    return <InternationalStudentNetworkPage dict={dict} locale={locale} />
  } catch (error) {
    console.error("Error rendering international student network page:", error)
    // Fallback to a simple page if there's an error
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold mb-4">International Student Network</h1>
        <p className="text-xl">We are experiencing some technical difficulties. Please try again later.</p>
      </div>
    )
  }
}

