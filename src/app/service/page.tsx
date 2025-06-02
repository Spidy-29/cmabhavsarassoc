import { Navigation } from "@/components/custom/Navigation"
import { Footer } from "@/components/custom/Footer"
import { services } from "@/data/services"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
                Professional Cost Accounting Services
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The firm provides various industry-based services in order to build trust and 
                enhance values to clients irrespective of its size. Some of the areas in which 
                we are specialized are as under.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={service.id} className="group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary">{index + 1}</span>
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-heading text-primary">
                          {service.title}
                        </CardTitle>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium text-primary mb-3">Key Services:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start text-muted-foreground">
                            <svg
                              className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-4">
                      <Button asChild>
                        <Link href={`/contact`}>
                          Get Consultation
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
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
                The Firm has experienced to provide best services from small to large companies 
                across various industrial and service sectors
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Industrial Sector */}
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl font-heading text-primary flex items-center gap-2">
                    <span className="text-3xl">🏭</span>
                    Industrial Sector
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    The Firm has experience to provide best services from small to large companies 
                    in industrial sectors:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Textile, Terry Towel, Man Made Fiber, Filament and Denim (Composite Units, Process Houses, Denims, Draw Twisting Units, Texturizing Units, POY Plants)</li>
                    <li>• Engineering Products (Machine Shop, Fabrication, Electrical and Assembly oriented), Bearings, Monoblock Pumps, Monoset Pumps, Submersible pumps, Induction Furnaces, Diesel Engines, Barge, Tug Boats, Air Conditioners, VC Coolers Auto Component Parts etc.</li>
                    <li>• Foundry and Steel (Heavy and Precision Castings, Grinding Media, Steel Plant, Rolling Mill, Forging Unit, Bright Bar Unit)</li>
                    <li>• Lighting Industry (Lighting Bulbs, Tube Lights, Sodium Lamps, Mercury Lamps, Caps, Filaments, and Glass Sheet etc. Components)</li>
                    <li>• Heavy Commercial Vehicles</li>
                    <li>• Gas Cylinder for various uses</li>
                    <li>• Rubber (Vehicle Tubes)</li>
                    <li>• Tubes and Pipes (Steel Tubes, Precision Tubes, Copper Plated Aluminum Tubes)</li>
                    <li>• Chemicals (Caustic Soda, Detergents, Dyes & Intermediates, Agro Chemicals (Pesticides), Toilet Soap, Ethylene Acetate, Alcohol, Sulphuric Acid, Vinyl Sulphone etc.)</li>
                    <li>• Vegetable Oil Product</li>
                    <li>• Ice Cream</li>
                    <li>• Publication & Stationery items</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Service Sector */}
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl font-heading text-primary flex items-center gap-2">
                    <span className="text-3xl">🏢</span>
                    Service Sector
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    The firm and its associates had develop wide range of client base in services sectors:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Electricity (Generation, Distribution, Customer Service)</li>
                    <li>• Telecommunications</li>
                    <li>• Ports and ports related activities</li>
                    <li>• Logistics</li>
                    <li>• Health Care</li>
                  </ul>
                  
                  <div className="mt-8 p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-medium text-primary mb-2">Why Choose Our Services?</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Qualified and experienced Cost Accountants</li>
                      <li>• Industry-specific expertise</li>
                      <li>• Compliance with latest regulations</li>
                      <li>• Personalized service approach</li>
                      <li>• Cost-effective solutions</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Process Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-primary mb-4">
                Our Service Process
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our structured approach ensures quality service delivery and client satisfaction
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Initial Consultation",
                  description: "Understanding your business requirements and compliance needs"
                },
                {
                  step: "02", 
                  title: "Proposal & Planning",
                  description: "Detailed service proposal with timeline and cost structure"
                },
                {
                  step: "03",
                  title: "Service Delivery",
                  description: "Professional execution by our qualified team of experts"
                },
                {
                  step: "04",
                  title: "Follow-up Support",
                  description: "Ongoing support and guidance for continuous compliance"
                }
              ].map((process) => (
                <Card key={process.step} className="text-center">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="font-bold">{process.step}</span>
                    </div>
                    <CardTitle className="text-lg font-heading text-primary">
                      {process.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {process.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-primary mb-4">
                Ready to Get Professional Support?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Contact Ashish Bhavsar & Associates today to discuss how our professional 
                services can help your business achieve compliance and operational excellence.
              </p>
              <div className="flex gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">Get Free Consultation</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="tel:+919924128804">Call: +91 99241 28804</Link>
                </Button>
              </div>
              
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                <div className="text-center">
                  <h4 className="font-medium text-primary mb-1">Head Office</h4>
                  <p className="text-sm text-muted-foreground">
                    Ahmedabad - Call: 079-26768804
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="font-medium text-primary mb-1">Branch Office</h4>
                  <p className="text-sm text-muted-foreground">
                    Rajkot - Contact Partners
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}