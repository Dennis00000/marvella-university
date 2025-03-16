import { Metadata } from 'next'
import { getDictionary } from "@/i18n/server"
import GlobalCampusPage from "@/components/global-campus-page"

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  
  return {
    title: "Global Campus | International Programs at Marvella University",
    description: "Experience Marvella University's global campus with international exchange programs, multicultural events, and worldwide research collaborations.",
    openGraph: {
      title: "Global Campus at Marvella University",
      description: "Our international programs, exchanges, and multicultural initiatives",
      url: `https://marvellauniversity.vercel.app/${locale}/global-campus`,
    },
    alternates: {
      canonical: `https://marvellauniversity.vercel.app/${locale}/global-campus`,
    },
  }
}

export default async function GlobalCampus({
  params,
}: {
  params: { locale: string }
}) {
  try {
    const { locale } = await params;
    const dict = await getDictionary(locale)
    return <GlobalCampusPage dict={dict} locale={locale} />
  } catch (error) {
    console.error("Error rendering global campus page:", error)
    // Fallback to a simple page if there's an error
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold mb-4">Global Campus at Marvella University</h1>
        <p className="text-xl">We are experiencing some technical difficulties. Please try again later.</p>
      </div>
    )
  }
}

