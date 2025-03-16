import "server-only"
import { locales } from "@/middleware"

// Cache for dictionaries to improve performance
const dictionaryCache: Record<string, any> = {}

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default).catch(() => ({})),
  ru: () => import("./dictionaries/ru.json").then((module) => module.default).catch(() => ({})),
  lt: () => import("./dictionaries/lt.json").then((module) => module.default).catch(() => ({})),
  es: () => import("./dictionaries/es.json").then((module) => module.default).catch(() => ({})),
  fr: () => import("./dictionaries/fr.json").then((module) => module.default).catch(() => ({})),
  de: () => import("./dictionaries/de.json").then((module) => module.default).catch(() => ({})),
}

// Preload all dictionaries at startup for faster switching
export const preloadDictionaries = async () => {
  const loadPromises = locales.map(async (locale) => {
    if (!dictionaryCache[locale]) {
      try {
        const dictionary = await dictionaries[locale as keyof typeof dictionaries]()
        dictionaryCache[locale] = dictionary
      } catch (error) {
        console.error(`Failed to preload dictionary for ${locale}:`, error)
        dictionaryCache[locale] = {}
      }
    }
  })

  await Promise.all(loadPromises)
  console.log("All dictionaries preloaded successfully")
}

export const getDictionary = async (locale: string) => {
  try {
    // Check if we have a cached version first
    if (dictionaryCache[locale]) {
      return dictionaryCache[locale]
    }

    // If locale is invalid, fall back to English
    if (!locale || !locales.includes(locale as any)) {
      console.log(`Falling back to English for invalid locale: ${locale}`)
      const enDict = await dictionaries.en()
      dictionaryCache["en"] = enDict
      return enDict
    }

    // Load the requested dictionary
    const dictionary = await dictionaries[locale as keyof typeof dictionaries]()

    // Cache the dictionary for future use
    dictionaryCache[locale] = dictionary

    return dictionary
  } catch (error) {
    console.error(`Failed to load dictionary for locale ${locale}:`, error)
    // Return empty object as fallback
    return {}
  }
}

