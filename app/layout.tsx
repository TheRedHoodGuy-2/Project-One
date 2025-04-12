import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "Vote for Priscilla - D Block Hall Senator Campaign",
  description: "Join Priscilla's campaign for D Block Hall Senator and win ₦3,000!",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'