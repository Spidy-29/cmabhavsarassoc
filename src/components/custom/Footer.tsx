import Link from "next/link"
import { companyInfo } from "@/data/company"


export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-start">
          {/* Company Info */}
          <div className="space-y-4 w-full">
            <h3 className="text-base sm:text-lg font-heading font-semibold text-primary">
              {companyInfo.name}
            </h3>
            <p className="text-sm text-muted-foreground">
              {companyInfo.description}
            </p>
          </div>


          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-primary">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                Home
              </Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
                About Us
              </Link>
              <Link href="/services" className="text-sm text-muted-foreground hover:text-primary">
                Services
              </Link>
              <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary">
                Blog
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                Contact
              </Link>
            </nav>
          </div>


          {/* Services */}
          {/* <div className="space-y-4">
            <h4 className="text-sm font-medium text-primary">Services</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/services/audit-assurance" className="text-sm text-muted-foreground hover:text-primary">
                Audit & Assurance
              </Link>
              <Link href="/services/tax-services" className="text-sm text-muted-foreground hover:text-primary">
                Tax Services
              </Link>
              <Link href="/services/business-advisory" className="text-sm text-muted-foreground hover:text-primary">
                Business Advisory
              </Link>
              <Link href="/services/accounting" className="text-sm text-muted-foreground hover:text-primary">
                Accounting Services
              </Link>
            </nav>
          </div> */}


          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-primary">Contact Info</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>{companyInfo.address.street}</p>
              <p>{companyInfo.address.city}, {companyInfo.address.state} {companyInfo.address.zip}</p>
              <p>Email: {companyInfo.contact.email}</p>
            </div>
          </div>


          {/* Business Hours */}
          <div className="space-y-4">
            <div className="space-y-1 text-sm text-muted-foreground">
              <p><strong>Business Hours:</strong></p>
              <p>Mon-Fri: {companyInfo.businessHours.weekdays}</p>
              <p>Saturday: {companyInfo.businessHours.saturday}</p>
              <p>Sunday: {companyInfo.businessHours.sunday}</p>
            </div>
          </div>
        </div>


        <div className="border-t mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 {companyInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
