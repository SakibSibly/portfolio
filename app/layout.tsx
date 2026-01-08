import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nazmus Sakib Sibly - Competitive Programmer | Explorer',
  description: 'Portfolio of Nazmus Sakib Sibly - Software Engineer, Competitive Programmer with 600+ problems solved',
  keywords: ['Nazmus Sakib Sibly', 'competitive programmer', 'software engineer', 'web developer', 'ICPC', 'Codeforces'],
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
