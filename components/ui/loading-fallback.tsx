import { Loader2 } from "lucide-react"

interface LoadingFallbackProps {
  message?: string
  className?: string
}

export function LoadingFallback({ message = "Loading...", className = "" }: LoadingFallbackProps) {
  return (
    <div className={`flex flex-col items-center justify-center p-8 ${className}`}>
      <Loader2 className="h-8 w-8 animate-spin text-blue-700 dark:text-blue-400 mb-4" />
      <p className="text-gray-700 dark:text-gray-300 text-center">{message}</p>
    </div>
  )
}

