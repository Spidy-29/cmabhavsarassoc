import { Navigation } from "@/components/custom/Navigation"
import { Footer } from "@/components/custom/Footer"
import { Button } from "@/components/ui/button"
import { services } from "@/data/services"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary/10 to-primary/5 py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary">
                  Professional Cost Accountants in Ahmedabad & Rajkot
                </h1>
                <p className="text-lg text-muted-foreground">
                  The Firm was set up by its founder partner CMA Ashish Bhavsar at Ahmedabad. 
                  To provide all type of service to our client at one place through qualified, 
                  motivated and dedicated young team. Our mission to be a part of client growth 
                  story through our professional excellence.
                </p>
                <div className="flex gap-4">
                  <Button asChild size="lg">
                    <Link href="/contact">Get Professional Consultation</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/services">View Our Services</Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                {/* Add your hero image here */}
                <Image src="/images/banner-2.jpg" alt="Professional Services Image" width={1000}height={1000} />
                {/* <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                  <p className="text-primary/50 text-lg">Professional Services Image</p>
                </div> */}
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-heading font-bold text-primary">
                  Our Mission
                </h2>
                <p className="text-muted-foreground">
                  To provide all type of service to our client at one place through qualified, 
                  motivated and dedicated young team. Our mission to be a part of client growth 
                  story through our professional excellence.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-heading font-bold text-primary">
                  Our Vision
                </h2>
                <p className="text-muted-foreground">
                  To become the most trusted and preferred professional service provider all over 
                  the globe with our integrity and intelligence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-primary mb-4">
                Our Professional Services
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The firm provides various industry-based services in order to build trust and 
                enhance values to clients irrespective of its size
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:border-primary/50 transition-colors"
                >
                  <div className="space-y-4">
                    <h3 className="font-heading text-xl font-semibold text-primary">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {service.description}
                    </p>
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                    >
                      Learn more
                      <svg
                        className="ml-1 h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Expertise */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-primary mb-4">
                Industry Expertise
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We have extensive experience serving clients across various industrial and service sectors
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-heading font-semibold text-primary mb-4">
                  Industrial Sector
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Textile, Terry Towel, Man Made Fiber, Filament and Denim</li>
                  <li>• Engineering Products (Machine Shop, Fabrication, Electrical)</li>
                  <li>• Foundry and Steel (Heavy and Precision Castings)</li>
                  <li>• Chemicals (Caustic Soda, Detergents, Dyes & Intermediates)</li>
                  <li>• Heavy Commercial Vehicles</li>
                  <li>• Lighting Industry</li>
                </ul>
              </div>
              
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-heading font-semibold text-primary mb-4">
                  Service Sector
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Electricity (Generation, Distribution, Customer Service)</li>
                  <li>• Telecommunications</li>
                  <li>• Ports and ports related activities</li>
                  <li>• Logistics</li>
                  <li>• Health Care</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-primary mb-4">
                Why Choose Ashish Bhavsar & Associates
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We are committed to providing exceptional service and value to our clients
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Expert Team",
                  description: "Our team consists of qualified Cost Accountants with extensive experience in various industries"
                },
                {
                  title: "Personalized Service", 
                  description: "We tailor our services to meet your specific business needs and provide dedicated support"
                },
                {
                  title: "Proven Track Record",
                  description: "Years of successful client relationships and positive outcomes across Gujarat and beyond"
                }
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="text-center p-6 rounded-lg bg-background border"
                >
                  <h3 className="font-heading text-xl font-semibold text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">
              Ready to Get Professional Support?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how our professional services can help your business 
              achieve compliance and operational excellence.
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Contact Us Today</Link>
              </Button>
              {/* <Button variant="outline" size="lg" asChild>
                <Link href="tel:+919924128804">Call: +91 99241 28804</Link>
              </Button> */}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}