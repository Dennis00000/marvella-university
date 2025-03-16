"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState, useCallback } from "react"

type LocaleContextType = {
  locale: string
  setLocale: (locale: string) => void
  isChangingLocale: boolean
}

const LocaleContext = createContext<LocaleContextType>({
  locale: "en",
  setLocale: () => {},
  isChangingLocale: false,
})

export function LocaleProvider({
  children,
  initialLocale,
}: {
  children: React.ReactNode
  initialLocale: string
}) {
  const [locale, setLocaleState] = useState(initialLocale || "en")
  const [isChangingLocale, setIsChangingLocale] = useState(false)

  // Memoize the setLocale function to prevent unnecessary re-renders
  const setLocale = useCallback(
    (newLocale: string) => {
      if (newLocale !== locale) {
        setLocaleState(newLocale)
        setIsChangingLocale(true)

        // Trigger loading indicator
        const loadingIndicator = document.getElementById("global-loading-indicator")
        if (loadingIndicator) {
          loadingIndicator.style.transform = "scaleX(0.3)"

          setTimeout(() => {
            loadingIndicator.style.transform = "scaleX(0.6)"
          }, 200)
        }
      }
    },
    [locale],
  )

  useEffect(() => {
    if (locale !== initialLocale && locale && isChangingLocale) {
      // Add a small delay to allow React to finish any pending updates
      const timer = setTimeout(() => {
        const currentPath = window.location.pathname
        const newPath = currentPath.replace(/^\/[a-z]{2}(?:\/|$)/, `/${locale}/`)
        window.location.href = newPath || `/${locale}`
      }, 50)

      return () => clearTimeout(timer)
    }
  }, [locale, initialLocale, isChangingLocale])

  return <LocaleContext.Provider value={{ locale, setLocale, isChangingLocale }}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider")
  }
  return context
}

