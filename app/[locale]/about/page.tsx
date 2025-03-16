import { Metadata } from 'next'
import { getDictionary } from "@/i18n/server"
import AboutPage from "@/components/about-page"

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  
  return {
    title: "About Marvella University | Our History and Mission",
    description: "Learn about Marvella University's rich history, academic mission, distinguished faculty, and commitment to global education excellence.",
    openGraph: {
      title: "About Marvella University",
      description: "Learn about our history, mission, and vision for the future of education",
      url: `https://marvellauniversity.vercel.app/${locale}/about`,
    },
    alternates: {
      canonical: `https://marvellauniversity.vercel.app/${locale}/about`,
    },
  }
}

export default async function About({
  params,
}: {
  params: { locale: string }
}) {
  try {
    const { locale } = await params;
    const dict = await getDictionary(locale)
    return <AboutPage dict={dict} locale={locale} />
  } catch (error) {
    console.error("Error rendering about page:", error)
    // Fallback to a simple page if there's an error
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold mb-4">About Marvella University</h1>
        <p className="text-xl">We are experiencing some technical difficulties. Please try again later.</p>
      </div>
    )
  }
}

