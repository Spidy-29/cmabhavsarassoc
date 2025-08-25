import type { Metadata } from "next"
import { Open_Sans, Titillium_Web } from "next/font/google"
import "./globals.css"
import { Analytics } from '@vercel/analytics/next';
import { Toaster } from "@/components/ui/toaster";


const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-sans" })
const titillium = Titillium_Web({ 
  weight: ['200', '300', '400', '600', '700', '900'],
  subsets: ["latin"],
  variable: "--font-heading"
})

export const metadata: Metadata = {
  title: "CMA Bhavsar Associates | Cost Accountants & Tax Consultants in Ahmedabad",
  description: "CMA Bhavsar Associates specializes in cost accounting, taxation, GST, auditing, and business advisory services. Trusted advisors for business finances, compliance, and growth in Ahmedabad, Gujarat.",
  keywords: "cost accountants, tax consultants, GST, auditing, financial advisory, business registration, Ahmedabad, Gujarat, CMA Bhavsar Associates",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.cmabhavsarassoc.in/",
  },
  icons: {
    icon: "/images/logo.svg",
  },
  openGraph: {
    title: "CMA Bhavsar Associates | Cost Accountants & Tax Consultants in Ahmedabad",
    description: "CMA Bhavsar Associates specializes in cost accounting, taxation, GST, auditing, and business advisory services. Trusted advisors for business finances, compliance, and growth in Ahmedabad, Gujarat.",
    type: "website",
    url: "https://www.cmabhavsarassoc.in/",
    siteName: "CMA Bhavsar Associates",
  },
  twitter: {
    card: "summary_large_image",
    title: "CMA Bhavsar Associates | Cost Accountants & Tax Consultants in Ahmedabad",
    description: "CMA Bhavsar Associates specializes in cost accounting, taxation, GST, auditing, and business advisory services. Trusted advisors for business finances, compliance, and growth in Ahmedabad, Gujarat.",
  },
  authors: [{ name: "CMA Bhavsar Associates" }],
  creator: "CMA Bhavsar Associates",
  publisher: "CMA Bhavsar Associates",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}