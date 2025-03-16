"use client"

import { useEffect, useState } from "react"
import { useLocale } from "@/i18n/client"
import { motion, AnimatePresence } from "framer-motion"

export function LocaleChangeIndicator() {
  const { isChangingLocale } = useLocale()
  const [showIndicator, setShowIndicator] = useState(false)

  useEffect(() => {
    if (isChangingLocale) {
      setShowIndicator(true)
    } else {
      // Add a delay before hiding the indicator to ensure smooth transitions
      const timer = setTimeout(() => {
        setShowIndicator(false)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [isChangingLocale])

  return (
    <AnimatePresence>
      {showIndicator && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
          aria-live="polite"
          aria-atomic="true"
        >
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <div
              className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"
              role="status"
              aria-label="Loading"
            ></div>
            <p className="text-gray-900 dark:text-white text-lg font-medium">Changing language...</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

