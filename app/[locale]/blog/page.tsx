import { Metadata } from 'next'
import { getDictionary } from "@/i18n/server"
import BlogPage from "@/components/blog-page"

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  
  return {
    title: "Marvella University Blog | Latest News and Insights",
    description: "Stay updated with the latest news, research breakthroughs, campus events, and educational insights from Marvella University.",
    openGraph: {
      title: "Marvella University Blog",
      description: "Latest news, events, and insights from our global campus",
      url: `https://marvellauniversity.vercel.app/${locale}/blog`,
      type: "website",
    },
    alternates: {
      canonical: `https://marvellauniversity.vercel.app/${locale}/blog`,
    },
  }
}

export default async function Blog({
  params,
}: {
  params: { locale: string }
}) {
  try {
    // Await the params object before destructuring
    const { locale } = await params;
    const dict = await getDictionary(locale)
    return <BlogPage dict={dict} locale={locale} />
  } catch (error) {
    console.error("Error rendering blog page:", error)
    // Fallback to a simple page if there's an error
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold mb-4">Blog at Marvella University</h1>
        <p className="text-xl">We are experiencing some technical difficulties. Please try again later.</p>
      </div>
    )
  }
}

