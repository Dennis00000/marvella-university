"use client"

import { Mail, Phone, Linkedin } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Link from "next/link"

type FooterProps = {
  dict: any
}

export default function Footer({ dict }: FooterProps) {
  const copyright = dict?.footer?.copyright || "© All Rights Reserved"
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Marvella University</h3>
            <p className="text-sm text-gray-300 mb-4">
              Fostering academic excellence, innovation, and inclusivity in a global learning environment.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/en/about" className="text-sm text-gray-300 hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/en/course" className="text-sm text-gray-300 hover:text-blue-400 transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/en/global-campus" className="text-sm text-gray-300 hover:text-blue-400 transition-colors">
                  Global Campus
                </Link>
              </li>
              <li>
                <Link href="/en/contact" className="text-sm text-gray-300 hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact Icons - Now positioned on the right side */}
          <div className="flex flex-row items-center md:items-end justify-center md:justify-end space-x-6">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="mailto:dennisopoola@gmail.com"
                    className="hover:text-blue-500 transition-colors duration-300"
                    aria-label="Email: dennisopoola@gmail.com"
                  >
                    <Mail size={24} />
                  </a>
                </TooltipTrigger>
                <TooltipContent className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700">
                  <p>dennisopoola@gmail.com</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="tel:+37061912346"
                    className="hover:text-blue-500 transition-colors duration-300"
                    aria-label="Phone: +37061912346"
                  >
                    <Phone size={24} />
                  </a>
                </TooltipTrigger>
                <TooltipContent className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700">
                  <p>+37061912346</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="http://www.linkedin.com/in/do24"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500 transition-colors duration-300"
                    aria-label="LinkedIn: linkedin.com/in/do24"
                  >
                    <Linkedin size={24} />
                  </a>
                </TooltipTrigger>
                <TooltipContent className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700">
                  <p>linkedin.com/in/do24</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 flex justify-between items-center">
          <p className="text-xs">
            {copyright} {year}
          </p>
          <p className="text-xs text-gray-400">Marvella University</p>
        </div>
      </div>
    </footer>
  )
}

