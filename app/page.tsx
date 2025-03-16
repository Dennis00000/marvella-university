import { redirect } from "next/navigation"
import { defaultLocale } from "@/middleware"
import { preloadDictionaries } from "@/i18n/server"

// Preload dictionaries at startup
preloadDictionaries()

export default function Home() {
  // Redirect from the root to the default locale
  redirect(`/${defaultLocale}`)
}

