"use client"

import { Navigation } from "@/components/custom/Navigation"
import { Footer } from "@/components/custom/Footer"
import { ContactForm } from "@/components/custom/ContactForm"
import { companyInfo } from "@/data/company"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

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
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Contact Form */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl sm:text-2xl font-heading text-primary">
                      Quick Inquiry
                    </CardTitle>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Send us your requirements and we&apos;ll get back to you with professional advice
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ContactForm />
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-6 sm:space-y-8">
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
                {/* <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-heading text-primary">
                      Connect With Us
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex space-x-4">
                      {companyInfo.social.linkedin && (
                        <Link
                          href={companyInfo.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 transition-colors"
                        >
                          LinkedIn
                        </Link>
                      )}
                      {companyInfo.social.twitter && (
                        <Link
                          href={companyInfo.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 transition-colors"
                        >
                          Twitter
                        </Link>
                      )}
                      {companyInfo.social.facebook && (
                        <Link
                          href={companyInfo.social.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 transition-colors"
                        >
                          Facebook
                        </Link>
                      )}
                    </div>
                  </CardContent>
                </Card> */}
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
            
            <div className="bg-background p-2 rounded-lg text-center">
              <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center">
              <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229.50064131313437!2d72.533021737455!3d23.02339546053513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84db5bc4ad8d%3A0x79a10d0dd0319345!2sAshish%20Bhavsar%20%26%20Associates!5e0!3m2!1sen!2sin!4v1754228117650!5m2!1sen!2sin" 
              width="100%" 
              title="Ashish Bhavsar & Associates Location - Ahmedabad"
              height="100%" 
              style={{border:0}} 
              allowFullScreen 
              loading="lazy"
               referrerPolicy="no-referrer-when-downgrade"></iframe>
                 
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
              We&apos;re here to help your business achieve compliance and growth.
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href={`tel:${companyInfo.contact.mobile}`}
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Call Now: {companyInfo.contact.mobile}
              </Link>
              <Link
                href={`mailto:${companyInfo.contact.email}`}
                className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary/10 transition-colors"
              >
                Email: {companyInfo.contact.email}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}