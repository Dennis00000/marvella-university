import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { LocaleProvider } from "@/i18n/client"
import { getDictionary, preloadDictionaries } from "@/i18n/server"
import { LocaleChangeIndicator } from "@/components/locale-change-indicator"
import { LanguageTransitionScript } from "@/components/language-transition-script"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"
import { LoadingFallback } from "@/components/ui/loading-fallback"
import ErrorBoundary from "@/components/error-boundary"
import JsonLd from "@/components/seo/json-ld"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"], display: "swap" })

preloadDictionaries()

export const metadata: Metadata = {
  metadataBase: new URL("https://marvellauniversity.vercel.app"),
  title: {
    default: "Marvella University",
    template: "%s | Marvella University",
  },
  description: "Fostering academic excellence, innovation, and inclusivity in a global learning environment",
  keywords: ["university", "education", "global campus", "academic excellence", "higher education", "international students"],
  openGraph: {
    title: "Marvella University",
    description: "Fostering academic excellence, innovation, and inclusivity in a global learning environment",
    url: "https://marvellauniversity.vercel.app",
    siteName: "Marvella University",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/image/hero-background.jpg",
        width: 1920,
        height: 1080,
        alt: "Marvella University Campus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marvella University",
    description: "Fostering academic excellence, innovation, and inclusivity in a global learning environment",
    images: ["/image/hero-background.jpg"],
    creator: "@marvellauni",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add these when you have them
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: "https://marvellauniversity.vercel.app",
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

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  // Await the params object before destructuring
  const { locale } = await params;
  
  let dict
  try {
    dict = await getDictionary(locale)
  } catch (error) {
    console.error("Failed to load dictionary:", error)
    dict = {}
  }

  return (
    <html lang={locale} className="light" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#1d4ed8" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {/* Add a global loading indicator */}
          <div
            id="global-loading-indicator"
            className="fixed top-0 left-0 w-full h-1 bg-blue-600 transform scale-x-0 origin-left transition-transform duration-300 z-50"
          ></div>
          <LocaleProvider initialLocale={locale}>
            <LanguageTransitionScript />
            <ErrorBoundary>
              <Suspense fallback={<LoadingFallback message="Loading navigation..." className="py-4" />}>
                <Navbar locale={locale} dict={dict} />
              </Suspense>
            </ErrorBoundary>
            <LocaleChangeIndicator />
            <main className="min-h-screen">
              <ErrorBoundary>{children}</ErrorBoundary>
            </main>
            <ErrorBoundary>
              <Footer dict={dict} />
            </ErrorBoundary>
            <Toaster />
          </LocaleProvider>
        </ThemeProvider>
        <JsonLd type="university" />
      </body>
    </html>
  )
}

