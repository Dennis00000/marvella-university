"use client"

import { useState, useEffect } from "react"
import Image, { ImageProps } from "next/image"

interface LazyImageProps extends Omit<ImageProps, "src"> {
  src: string
  lowQualitySrc?: string
  fallbackSrc?: string
}

export default function LazyImage({
  src,
  lowQualitySrc,
  fallbackSrc = "/image/placeholder.jpg", // Default fallback image
  alt,
  ...props
}: LazyImageProps) {
  const [imageSrc, setImageSrc] = useState(lowQualitySrc || src)
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    // If we don't have a low quality src or it failed to load, use the main src
    if (!lowQualitySrc || hasError) {
      setImageSrc(src)
      return
    }

    // Preload the high quality image
    const img = new window.Image()
    img.src = src
    img.onload = () => {
      setImageSrc(src)
      setIsLoaded(true)
    }
    img.onerror = () => {
      console.error(`Failed to load image: ${src}`)
      setHasError(true)
      setImageSrc(fallbackSrc)
    }
  }, [src, lowQualitySrc, hasError, fallbackSrc])

  return (
    <Image
      {...props}
      src={hasError ? fallbackSrc : imageSrc}
      alt={alt}
      className={`${props.className || ""} ${isLoaded ? "blur-0" : "blur-sm"}`}
      onError={() => {
        console.error(`Error loading image: ${imageSrc}`)
        setHasError(true)
        setImageSrc(fallbackSrc)
      }}
    />
  )
}

