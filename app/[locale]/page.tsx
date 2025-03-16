import { Metadata } from 'next'
import { getDictionary } from "@/i18n/server"
import HomePage from "@/components/home-page"

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  
  return {
    title: "Marvella University - Global Excellence in Education",
    description: "Discover Marvella University's world-class education, diverse campus life, and innovative programs designed for tomorrow's global leaders.",
    alternates: {
      canonical: `https://marvellauniversity.vercel.app/${locale}`,
      languages: {
        en: "https://marvellauniversity.vercel.app/en",
        es: "https://marvellauniversity.vercel.app/es",
        fr: "https://marvellauniversity.vercel.app/fr",
        de: "https://marvellauniversity.vercel.app/de",
        ru: "https://marvellauniversity.vercel.app/ru",
        lt: "https://marvellauniversity.vercel.app/lt",
      },
    },
  }
}

export default async function Home({
  params,
}: {
  params: { locale: string }
}) {
  // Await the params object before destructuring
  const { locale } = await params;
  
  try {
    const dict = await getDictionary(locale)
    return <HomePage dict={dict} locale={locale} />
  } catch (error) {
    console.error("Error rendering home page:", error)
    // Fallback to a simple page if there's an error
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to Marvella University</h1>
        <p className="text-xl">We are experiencing some technical difficulties. Please try again later.</p>
      </div>
    )
  }
}

