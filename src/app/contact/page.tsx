"use client"

import { Navigation } from "@/components/custom/Navigation"
import { Footer } from "@/components/custom/Footer"
import { ContactForm } from "@/components/custom/ContactForm"
import { companyInfo } from "@/data/company"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
                Contact Us
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get in touch with our team of expert Cost Accountants for professional consultation 
                and services across Gujarat
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl font-heading text-primary">
                      Quick Inquiry
                    </CardTitle>
                    <p className="text-muted-foreground">
                      Send us your requirements and we'll get back to you with professional advice
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ContactForm />
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Head Office */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-heading text-primary">
                      Head Office - Ahmedabad
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium text-primary mb-1">Address</h4>
                      <p className="text-muted-foreground">
                        {companyInfo.address.street}<br />
                        {companyInfo.address.city}, {companyInfo.address.state} {companyInfo.address.zip}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-primary mb-1">Contact</h4>
                      <p className="text-muted-foreground">
                        Office: {companyInfo.contact.phone}<br />
                        Mobile: {companyInfo.contact.mobile}<br />
                        Email: {companyInfo.contact.email}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Branch Office */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-heading text-primary">
                      Branch Office - Rajkot
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium text-primary mb-1">Address</h4>
                      <p className="text-muted-foreground">
                        {companyInfo.branch.street}<br />
                        {companyInfo.branch.city}, {companyInfo.branch.state} {companyInfo.branch.zip}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Contact Persons */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-heading text-primary">
                      Contact Persons
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">CMA Ashish Bhavsar</span>
                      <span className="font-medium">+91 99241 28804</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">CMA Sagar Kapadiya</span>
                      <span className="font-medium">+91 91737 40983</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">CMA Rajesh Vamja</span>
                      <span className="font-medium">+91 93282 28933</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Business Hours */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-heading text-primary">
                      Business Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday</span>
                      <span className="font-medium">{companyInfo.businessHours.weekdays}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday</span>
                      <span className="font-medium">{companyInfo.businessHours.saturday}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="font-medium">{companyInfo.businessHours.sunday}</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Media */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-heading text-primary">
                      Connect With Us
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex space-x-4">
                      {companyInfo.social.linkedin && (
                        <a
                          href={companyInfo.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 transition-colors"
                        >
                          LinkedIn
                        </a>
                      )}
                      {companyInfo.social.twitter && (
                        <a
                          href={companyInfo.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 transition-colors"
                        >
                          Twitter
                        </a>
                      )}
                      {companyInfo.social.facebook && (
                        <a
                          href={companyInfo.social.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 transition-colors"
                        >
                          Facebook
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-heading font-bold text-primary mb-4">
                Find Our Offices
              </h2>
              <p className="text-muted-foreground">
                We are conveniently located in prime business areas of Ahmedabad and Rajkot
              </p>
            </div>
            
            <div className="bg-background p-8 rounded-lg text-center">
              <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">
                  Interactive Map - Please integrate Google Maps here<br />
                  Showing locations: Ahmedabad HO & Rajkot Branch
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">
              Ready to Get Professional Assistance?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us today for expert cost accounting, audit, and business advisory services. 
              We're here to help your business achieve compliance and growth.
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href={`tel:${companyInfo.contact.mobile}`}
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Call Now: {companyInfo.contact.mobile}
              </a>
              <a
                href={`mailto:${companyInfo.contact.email}`}
                className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary/10 transition-colors"
              >
                Email: {companyInfo.contact.email}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}