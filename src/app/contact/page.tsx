import { Navigation } from "@/components/custom/Navigation";
import { ContactForm } from "@/components/custom/ContactForm";

export default function ContactPage() {
  return (
    <main>
      <Navigation />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-heading font-bold text-primary mb-4">
              Contact Us
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get in touch with our team of experts. We're here to help with all your financial needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-heading font-semibold text-primary mb-4">
                  Send us a message
                </h2>
                <ContactForm />
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-heading font-semibold text-primary mb-4">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-primary">Address</h3>
                    <p className="text-muted-foreground">
                      123 Business Street<br />
                      Financial District<br />
                      City, State 12345
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-primary">Phone</h3>
                    <p className="text-muted-foreground">
                      +1 (555) 123-4567
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-primary">Email</h3>
                    <p className="text-muted-foreground">
                      info@cmabhavsarassoc.com
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-primary">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-semibold text-primary mb-4">
                  Location
                </h2>
                <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                  {/* Add your map component or iframe here */}
                  <div className="w-full h-full bg-primary/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 