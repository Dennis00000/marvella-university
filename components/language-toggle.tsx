"use client"

import { useState, useEffect, useMemo } from "react"
import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLocale } from "@/i18n/client"

type Language = {
  code: string
  name: string
  flag: string
}

const languages: Language[] = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "ru", name: "Russian", flag: "🇷🇺" },
  { code: "lt", name: "Lithuanian", flag: "🇱🇹" },
  { code: "es", name: "Spanish", flag: "🇪🇸" },
  { code: "fr", name: "French", flag: "🇫🇷" },
  { code: "de", name: "German", flag: "🇩🇪" },
]

export function LanguageToggle() {
  const { locale, setLocale, isChangingLocale } = useLocale()
  const [mounted, setMounted] = useState(false)

  // Memoize the current language to prevent unnecessary re-renders
  const currentLanguage = useMemo(() => languages.find((lang) => lang.code === locale) || languages[0], [locale])

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleLanguageChange = (language: Language) => {
    if (isChangingLocale || language.code === locale) return
    setLocale(language.code)
  }

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="h-8 w-8">
        <Globe className="h-[1rem] w-[1rem]" />
        <span className="sr-only">Change language</span>
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-6 w-6 text-current p-0" disabled={isChangingLocale}>
          <Globe className="h-3.5 w-3.5" />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language)}
            className={currentLanguage.code === language.code ? "bg-muted" : ""}
            disabled={isChangingLocale}
          >
            <span className="mr-2">{language.flag}</span>
            {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

