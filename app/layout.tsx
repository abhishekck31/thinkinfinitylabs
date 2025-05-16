import type React from "react"
import "@/app/globals.css"
import { JetBrains_Mono, Space_Mono } from "next/font/google"

const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })
const spaceMono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-space" })

export const metadata = {
  title: "Thinkfinitylabs - Electronics & IoT Automation Solutions",
  description:
    "Thinkfinitylabs specializes in electronics and IoT automation solutions for businesses. Build your dream product with us.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${mono.variable} ${spaceMono.variable} font-mono bg-white`}>{children}</body>
    </html>
  )
}
