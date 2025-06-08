"use client"

import { useEffect, useState } from "react"

/**
 * A hook that returns true if the screen size is less than the breakpoint (768px by default)
 */
export function useIsMobile(breakpoint = 768): boolean {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < breakpoint : false
  )

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < breakpoint)
    }

    // Run on mount
    checkMobile()

    // Add resize listener
    window.addEventListener("resize", checkMobile)

    // Clean up
    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [breakpoint])

  return isMobile
} 