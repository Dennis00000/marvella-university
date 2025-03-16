import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Marvella University",
  description: "Fostering academic excellence, innovation, and inclusivity",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {/* Add a global loading indicator */}
          <div
            id="global-loading-indicator"
            className="fixed top-0 left-0 w-full h-1 bg-blue-600 transform scale-x-0 origin-left transition-transform duration-300 z-50"
          ></div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

import "./globals.css"



import './globals.css'