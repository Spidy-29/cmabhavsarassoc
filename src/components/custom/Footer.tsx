import Link from "next/link"
import { companyInfo } from "@/data/company"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-semibold text-primary">
              {companyInfo.name}
            </h3>
            <p className="text-muted-foreground text-sm">
              {companyInfo.description}
            </p>
            <div className="flex space-x-4">
              {companyInfo.social.linkedin && (
                <Link
                  href={companyInfo.social.linkedin}
                  className="text-muted-foreground hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </Link>
              )}
              {companyInfo.social.twitter && (
                <Link
                  href={companyInfo.social.twitter}
                  className="text-muted-foreground hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </Link>
              )}
            </div>
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
          <div className="space-y-4">
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
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-primary">Contact Info</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>{companyInfo.address.street}</p>
              <p>{companyInfo.address.city}, {companyInfo.address.state} {companyInfo.address.zip}</p>
              <p>Phone: {companyInfo.contact.phone}</p>
              <p>Email: {companyInfo.contact.email}</p>
            </div>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p><strong>Business Hours:</strong></p>
              <p>Mon-Fri: {companyInfo.businessHours.weekdays}</p>
              <p>Saturday: {companyInfo.businessHours.saturday}</p>
              <p>Sunday: {companyInfo.businessHours.sunday}</p>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 {companyInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}