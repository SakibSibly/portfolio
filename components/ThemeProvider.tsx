'use client'

import * as React from 'react'

type Theme = 'dark' | 'light'

type ThemeProviderProps = {
  children: React.ReactNode
  attribute?: string
  defaultTheme?: Theme
  enableSystem?: boolean
  disableTransitionOnChange?: boolean
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeProviderContext = React.createContext<ThemeProviderState | undefined>(undefined)

export function ThemeProvider({
  children,
  attribute = 'class',
  defaultTheme = 'light',
  enableSystem = false,
  disableTransitionOnChange = false,
  ...props
}: ThemeProviderProps) {
  const [theme, setThemeState] = React.useState<Theme>(defaultTheme)

  React.useEffect(() => {
    const root = window.document.documentElement
    const storedTheme = localStorage.getItem('theme') as Theme | null
    
    if (storedTheme) {
      setThemeState(storedTheme)
      root.classList.remove('light', 'dark')
      root.classList.add(storedTheme)
    } else {
      root.classList.add(defaultTheme)
    }
  }, [defaultTheme])

  const setTheme = React.useCallback((newTheme: Theme) => {
    const root = window.document.documentElement

    if (disableTransitionOnChange) {
      root.classList.add('[&_*]:!transition-none')
      window.setTimeout(() => {
        root.classList.remove('[&_*]:!transition-none')
      }, 0)
    }

    root.classList.remove('light', 'dark')
    root.classList.add(newTheme)
    setThemeState(newTheme)
    localStorage.setItem('theme', newTheme)
  }, [disableTransitionOnChange])

  const value = React.useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme, setTheme]
  )

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = React.useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider')

  return context
}
