"use client"

import { Component, type ErrorInfo, type ReactNode } from "react"
import { Button } from "@/components/ui/button"

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="min-h-[400px] flex flex-col items-center justify-center p-6 text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Something went wrong</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We apologize for the inconvenience. Please try again later.
            </p>
            <Button
              onClick={() => this.setState({ hasError: false, error: null })}
              className="bg-blue-700 hover:bg-blue-800 text-white"
            >
              Try again
            </Button>
          </div>
        )
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary

