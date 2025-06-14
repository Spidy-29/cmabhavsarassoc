import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Image from "next/image"

// const services = [
//   {
//     title: "Cost Audit & Cost Accounting",
//     href: "/services/cost-audit",
//     description: "Preparation of Cost Accounting Records u/s 148 (1) of The Companies Act, 2013"
//   },
//   {
//     title: "Costing System",
//     href: "/services/costing-system",
//     description: "Product wise annual, monthly as well as daily costing system"
//   },
//   {
//     title: "Business Advisory",
//     href: "/services/business-advisory",
//     description: "Strategic business consulting and advisory services"
//   },
//   {
//     title: "Value Added Services",
//     href: "/services/value-added-services",
//     description: "Physical Verification of Fixed Assets & preparation of Fixed Assets Register"
//   }
// ]

// CMA Logo Component
function CMALogo({ className = "h-10 w-16" }) {
  return (
    <div className={`${className} relative`}>
      <svg viewBox="0 0 80 40" className="w-full h-full">
        {/* Background rounded rectangle */}
        <rect 
          x="2" 
          y="2" 
          width="76" 
          height="36" 
          rx="6" 
          fill="currentColor" 
          className="text-primary"
        />
        
        {/* CMA Text */}
        <text 
          x="40" 
          y="28" 
          textAnchor="middle" 
          className="fill-primary-foreground font-bold text-[14px]"
          style={{ fontFamily: 'system-ui, sans-serif' }}
        >
          CMA
        </text>
        
        {/* Subtle accent line */}
        <rect 
          x="8" 
          y="32" 
          width="64" 
          height="2" 
          rx="1" 
          fill="currentColor" 
          className="text-primary-foreground opacity-60"
        />
      </svg>
    </div>
  )
}

export function Navigation() {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-3 group">
              <Image src="/images/ashish-bhavsar-and-associates.png" alt="Ashish Bhavsar & Associates" width={100} height={100} />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-foreground leading-tight">
                  Ashish Bhavsar & Associates
                </span>
                <span className="text-xs text-muted-foreground font-medium tracking-wide">
                  Cost Accountants
                </span>
              </div>
            </Link>
          </div>
          
          {/* Navigation Menu */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link href="/services" passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Services
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              {/* <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {services.map((service) => (
                      <li key={service.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={service.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{service.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {service.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem> */}

              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    About Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/* <NavigationMenuItem>
                <Link href="/industries" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Industries
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem> */}

              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button asChild size="sm" className="shadow-sm">
              <Link href="/contact">
                Get Consultation
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}