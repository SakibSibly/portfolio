import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nazmus Sakib Sibly - Competitive Programmer | Explorer',
  description: 'Portfolio of Nazmus Sakib Sibly - Motivated Learner, Competitive Programmer with 600+ problems solved',
  keywords: ['sakibsibly', 'Nazmus Sakib Sibly', 'competitive programmer', 'Motivated Learner', 'web developer', 'ICPC', 'Codeforces', 'portfolio', 'Nazmus Sibly', 'Sakib Sibly']
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
