import { Navigation } from "@/components/custom/Navigation"
import { Button } from "@/components/ui/button"
import { services } from "@/data/services"
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 to-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary">
                Your Trusted Partner in Financial Excellence
              </h1>
              <p className="text-lg text-muted-foreground">
                We provide comprehensive financial services to help your business grow and succeed. 
                Our team of experienced professionals is dedicated to delivering excellence in every aspect of our work.
              </p>
              <div className="flex gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              {/* Add your hero image here */}
              <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                <p className="text-primary/50 text-lg">Hero Image Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">
              Our Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer a comprehensive range of financial services to meet your business needs
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
                  <p className="text-muted-foreground">
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

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">
              Why Choose Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We are committed to providing exceptional service and value to our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Team",
                description: "Our team consists of qualified professionals with extensive experience"
              },
              {
                title: "Personalized Service",
                description: "We tailor our services to meet your specific business needs"
              },
              {
                title: "Proven Track Record",
                description: "Years of successful client relationships and positive outcomes"
              }
            ].map((feature) => (
              <div
                key={feature.title}
                className="text-center p-6 rounded-lg bg-background"
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
    </main>
  )
}