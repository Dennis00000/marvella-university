import { type NextRequest, NextResponse } from "next/server"
import { match as matchLocale } from "@formatjs/intl-localematcher"
import Negotiator from "negotiator"

// List of all supported locales
export const locales = ["en", "ru", "lt", "es", "fr", "de"]

// Default locale
export const defaultLocale = "en"

// Use a cache for negotiated locales to improve performance
const localeCache = new Map<string, string>()

// Get the preferred locale from request headers
function getLocale(request: NextRequest): string {
  try {
    // Create a cache key from the Accept-Language header
    const acceptLanguage = request.headers.get("accept-language") || ""
    const cacheKey = acceptLanguage

    // Check if we have a cached result
    if (localeCache.has(cacheKey)) {
      return localeCache.get(cacheKey)!
    }

    const negotiatorHeaders: Record<string, string> = {}
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

    // Use negotiator and intl-localematcher to get the best locale
    let languages = new Negotiator({ headers: negotiatorHeaders }).languages()
    // Ensure languages is an array of strings
    if (!languages || languages.length === 0) {
      languages = [defaultLocale]
    }

    const locale = matchLocale(languages, locales, defaultLocale)

    // Cache the result
    localeCache.set(cacheKey, locale)

    return locale
  } catch (error) {
    console.error("Error matching locale:", error)
    return defaultLocale
  }
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Skip for assets, api routes, etc.
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes("/favicon.ico") ||
    pathname.includes(".") ||
    pathname.startsWith("/icons") ||
    pathname.startsWith("/images")
  ) {
    return NextResponse.next()
  }

  // Check if the pathname already has a locale
  const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)

  if (pathnameHasLocale) return NextResponse.next()

  // Redirect if there is no locale
  const locale = getLocale(request)

  // Create new URL for redirect
  const newUrl = new URL(`/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`, request.url)

  // Preserve query parameters
  request.nextUrl.searchParams.forEach((value, key) => {
    newUrl.searchParams.set(key, value)
  })

  return NextResponse.redirect(newUrl)
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\.).*)"],
}

