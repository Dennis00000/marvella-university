"use client"

import { useEffect } from "react"

export function LanguageTransitionScript() {
  useEffect(() => {
    // Script to handle language transitions smoothly
    const handleLanguageChange = () => {
      const loadingIndicator = document.getElementById("global-loading-indicator")
      if (loadingIndicator) {
        loadingIndicator.style.transform = "scaleX(0.3)"

        // Simulate progress
        setTimeout(() => {
          loadingIndicator.style.transform = "scaleX(0.6)"
        }, 200)

        setTimeout(() => {
          loadingIndicator.style.transform = "scaleX(0.8)"
        }, 400)
      }
    }

    // Listen for language change events
    window.addEventListener("beforeunload", handleLanguageChange)

    // Show completion when page loads
    const loadingIndicator = document.getElementById("global-loading-indicator")
    if (loadingIndicator) {
      loadingIndicator.style.transform = "scaleX(1)"

      setTimeout(() => {
        loadingIndicator.style.transform = "scaleX(0)"
      }, 500)
    }

    return () => {
      window.removeEventListener("beforeunload", handleLanguageChange)
    }
  }, [])

  return null
}

