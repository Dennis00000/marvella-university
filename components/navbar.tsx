"use client"

import { useState, useEffect, useMemo, lazy, Suspense } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { ThemeToggle } from "./theme-toggle"
import { LanguageToggle } from "./language-toggle"
import { useLocale } from "@/i18n/client"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useDebounceCallback } from "@/hooks/use-debounce"

// Lazy load components that aren't needed immediately
const MobileMenu = lazy(() => import("./mobile-menu"))

type NavbarProps = {
  locale: string
  dict: any
}

export default function Navbar({ locale, dict }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { isChangingLocale } = useLocale()
  const pathname = usePathname()

  const navLinks = useMemo(() => {
    if (!dict?.navbar) {
      return [
        { name: "HOME", href: `/${locale}` },
        { name: "ABOUT", href: `/${locale}/about` },
        { name: "COURSES", href: `/${locale}/course` },
        { name: "GLOBAL CAMPUS", href: `/${locale}/global-campus` },
        { name: "BLOG", href: `/${locale}/blog` },
        { name: "CONTACT", href: `/${locale}/contact` },
      ]
    }

    return [
      { name: dict.navbar.home, href: `/${locale}` },
      { name: dict.navbar.about, href: `/${locale}/about` },
      { name: dict.navbar.courses, href: `/${locale}/course` },
      { name: dict.navbar.globalCampus, href: `/${locale}/global-campus` },
      { name: dict.navbar.blog, href: `/${locale}/blog` },
      { name: dict.navbar.contact, href: `/${locale}/contact` },
    ]
  }, [dict, locale])

  // Debounced scroll handler for better performance
  const handleScroll = useDebounceCallback(() => {
    if (window.scrollY > 50) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }, 10)

  useEffect(() => {
    setMounted(true)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [mobileMenuOpen])

  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="relative h-10 w-20"></div>
          <div className="flex items-center space-x-4"></div>
        </div>
      </header>
    )
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-black/80 backdrop-blur-md shadow-md" : "bg-black/50 backdrop-blur-sm"
        }`}
        style={{ willChange: "transform" }}
      >
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <Link href={`/${locale}`} className="flex items-center" aria-label="Marvella University Home">
            <span className="text-white font-bold text-2xl">Marvella</span>
          </Link>

          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-white hover:text-blue-400 transition-colors duration-300 text-sm font-medium ${
                  isChangingLocale ? "pointer-events-none opacity-70" : ""
                } ${pathname === link.href ? "text-blue-400" : ""}`}
              >
                {link.name}
              </Link>
            ))}
            <LanguageToggle />
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-blue-400"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </div>
        </div>
      </motion.header>

      {mobileMenuOpen && (
        <Suspense fallback={<div className="fixed inset-0 z-50 bg-black/50 md:hidden"></div>}>
          <MobileMenu
            isOpen={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
            navLinks={navLinks}
            pathname={pathname}
          />
        </Suspense>
      )}
    </>
  )
}

