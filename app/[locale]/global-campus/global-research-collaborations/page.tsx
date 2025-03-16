import { getDictionary } from "@/i18n/server"
import GlobalResearchCollaborationsPage from "@/components/global-research-collaborations-page"

export default async function GlobalResearchCollaborations({
  params,
}: {
  params: { locale: string }
}) {
  try {
    const { locale } = await params;
    const dict = await getDictionary(locale)
    return <GlobalResearchCollaborationsPage dict={dict} locale={locale} />
  } catch (error) {
    console.error("Error rendering global research collaborations page:", error)
    // Fallback to a simple page if there's an error
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold mb-4">Global Research Collaborations</h1>
        <p className="text-xl">We are experiencing some technical difficulties. Please try again later.</p>
      </div>
    )
  }
}

