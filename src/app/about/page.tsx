import { Navigation } from "@/components/custom/Navigation"
import { Footer } from "@/components/custom/Footer"
import { companyInfo } from "@/data/company"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
                About Ashish Bhavsar & Associates
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Professional Cost Accountants serving businesses across Gujarat and beyond
              </p>
            </div>
          </div>
        </section>

        {/* Background Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                  Background
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The Firm was set up by its founder partner CMA Ashish Bhavsar at Ahmedabad. 
                  Looking to the growth of the firm, firm establish its branch at Rajkot. 
                  Since then firm grow within short span of time.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-heading text-primary text-center">
                      Our Mission
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">
                      To provide all type of service to our client at one place through qualified, 
                      motivated and dedicated young team. Our mission to be a part of client growth 
                      story through our professional excellence.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-heading text-primary text-center">
                      Our Vision
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">
                      To become the most trusted and preferred professional service provider all over 
                      the globe with our integrity and intelligence.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-heading text-primary text-center">
                      Our Philosophy
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">
                      The philosophy of the Firm is to provide the range of services generally expected 
                      from any medium to large Cost Accounting firm with emphasis on core business.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Details */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-primary mb-8 text-center">
                Our Philosophy
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <div className="bg-background p-6 rounded-lg">
                  <p className="mb-4">
                    The philosophy of the Firm is to provide the range of services generally expected 
                    from any medium to large Cost Accounting firm.
                  </p>
                  <p className="mb-4">
                    It places emphasis on its core business of Cost Audit, Cost Records, Costing System 
                    and Management Consultancy & Advisory Services.
                  </p>
                  <p>
                    Our aim is to turn knowledge into value for the benefit of our clients and our people; 
                    our values determine how we behave, with clients and each other. They are our clients, 
                    who define what we stand for and how we do things, helping us to work together in the 
                    most effective and fulfilling way.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-primary mb-4">
                Our Professional Team
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Meet our qualified Cost Accountants who bring expertise and dedication to serve our clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {companyInfo.team.map((member) => (
                <Card key={member.name}>
                  <CardHeader className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      {member.imageUrl ? (
                        <img
                          src={member.imageUrl}
                          alt={member.name}
                          className="w-full h-full object-cover rounded-full"
                        />
                      ) : (
                        <span className="text-2xl font-bold text-primary">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      )}
                    </div>
                    <CardTitle className="text-xl font-heading text-primary">
                      {member.name}
                    </CardTitle>
                    <p className="text-primary/80 font-medium">{member.position}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Professional Recognition */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-primary mb-4">
                Professional Recognition
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our founder partner&apos;s achievements and recognition in the professional community
              </p>
            </div>

            <div className="max-w-3xl mx-auto bg-background p-8 rounded-lg">
              <h3 className="text-xl font-heading font-semibold text-primary mb-4">
                CMA Ashish Bhavsar - Founder Partner
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Completed Cost Accountancy in 2001 with 11th rank at national level in the final 
                  examination of The Institute of Cost Accountants of India (ICAI)
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Graduation and post-graduation degree in commerce stream from Gujarat University
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Actively associated with ICAI – Ahmedabad Chapter for over 10 years
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Served as Treasurer of the chapter from 2010-11 to 2012-13
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Served as Secretary of the chapter from 2013-14 to 2014-15
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Former Vice-Chairman of ICAI Ahmedabad Chapter
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-primary mb-4">
                Our Locations
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We serve clients from our offices in Ahmedabad and Rajkot
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-heading text-primary text-center">
                    Head Office - Ahmedabad
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    {companyInfo.address.street}<br />
                    {companyInfo.address.city}, {companyInfo.address.state} {companyInfo.address.zip}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-heading text-primary text-center">
                    Branch Office - Rajkot
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    {companyInfo.branch.street}<br />
                    {companyInfo.branch.city}, {companyInfo.branch.state} {companyInfo.branch.zip}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}