'use client'

import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const shouldDark = stored ? stored === 'dark' : prefersDark
    document.documentElement.classList.toggle('dark', shouldDark)
    setIsDark(shouldDark)
  }, [])

  const toggleTheme = () => {
    const html = document.documentElement
    const nextIsDark = !isDark
    html.classList.toggle('dark', nextIsDark)
    localStorage.setItem('theme', nextIsDark ? 'dark' : 'light')
    setIsDark(nextIsDark)
  }

  if (!mounted) return null

  return (
    <button
      onClick={toggleTheme}
      className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
      aria-label="Toggle dark mode"
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  )
}
