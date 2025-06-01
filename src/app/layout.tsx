import type { Metadata } from "next"
import { Open_Sans, Titillium_Web } from "next/font/google"
import "./globals.css"

const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-sans" })
const titillium = Titillium_Web({ 
  weight: ['200', '300', '400', '600', '700', '900'],
  subsets: ["latin"],
  variable: "--font-heading"
})

export const metadata: Metadata = {
  title: "CMA Bhavsar & Associates",
  description: "Professional Chartered Accountants",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${titillium.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}