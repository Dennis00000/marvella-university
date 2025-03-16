"use client"

import Link from "next/link"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageToggle } from "./language-toggle"
import { ThemeToggle } from "./theme-toggle"
import { motion } from "framer-motion"

type MobileMenuProps = {
  isOpen: boolean
  onClose: () => void
  navLinks: { name: string; href: string }[]
  pathname: string
}

export default function MobileMenu({ isOpen, onClose, navLinks, pathname }: MobileMenuProps) {
  return (
    <div className="fixed inset-0 z-50 bg-black/50 md:hidden" onClick={onClose}>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="fixed right-0 top-0 h-full w-[250px] bg-white dark:bg-gray-900 shadow-xl p-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end">
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-400 h-6 w-6 p-0"
            onClick={onClose}
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Close menu</span>
          </Button>
        </div>

        <nav className="flex flex-col gap-4 mt-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-black dark:text-white hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-300 text-base font-medium py-2 ${
                pathname === link.href ? "text-blue-700 dark:text-blue-400" : ""
              }`}
              onClick={onClose}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-4 mt-6 border-t pt-6 border-gray-200 dark:border-gray-700">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </nav>
      </motion.div>
    </div>
  )
}

