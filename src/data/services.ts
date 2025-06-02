export interface Service {
  id: string
  title: string
  description: string
  slug: string
  features: string[]
  icon?: string
}

export const services: Service[] = [
  {
    id: "statutory-services",
    title: "Statutory Services",
    description: "Professional statutory compliance services as per Companies Act and regulatory requirements.",
    slug: "statutory-services",
    features: [
      "Preparation of Cost Accounting Records u/s 148 (1) of The Companies Act, 2013",
      "Conducting Cost Audit u/s 148 (2) of The Companies Act, 2013",
      "Prepare CAS 4 (Captive consumption certificate) for submission to Excise Department Requirement",
      "All type of certification work that can be certified by the practicing CMA"
    ]
  },
  {
    id: "cost-management-services",
    title: "Cost and Management Services", 
    description: "Comprehensive costing systems and management consultancy services for business optimization.",
    slug: "cost-management-services",
    features: [
      "Product wise annual, monthly as well as daily costing system",
      "Department wise annual, monthly as well as daily costing system",
      "Variance Analysis",
      "Cost Control System",
      "Cost Reduction",
      "Profitability Analysis",
      "Decision Making",
      "Preparing Different types of MIS as a consultant",
      "Out Sourcing of the costing department as per the requirement of client"
    ]
  },
  {
    id: "other-value-added-services",
    title: "Other Value Added Services",
    description: "Additional professional services including audit, tax consultancy, and business advisory.",
    slug: "other-value-added-services",
    features: [
      "Internal Audit",
      "Physical Verification of Inventory & Valuation of Inventory",
      "Physical Verification of Fixed Assets & preparation of Fixed Assets Register", 
      "Project Finance",
      "Formation of company as per the Companies Act, 2013 and other related work",
      "Direct and Indirect Tax consultancy",
      "Maintains of Accounts under various accounting software",
      "Out Sourcing of Accounting department as per the requirement of client",
      "Anti Dumping consultancy"
    ]
  },
  {
    id: "gst-services",
    title: "GST Services",
    description: "Complete GST implementation, compliance, and advisory services for seamless business operations.",
    slug: "gst-services", 
    features: [
      "Implementation to GST",
      "Changes in Accounting System", 
      "Changes in procurement process",
      "Supply Chain Management",
      "Strategic Business decision under GST Area",
      "System Design for seamless compliance and return filling under GST",
      "Other service related to GST Migration, Registration, Return filling, Accounting etc.",
      "Various Certification under GST",
      "Audit under GST",
      "Tax assessment under GST Laws",
      "Business advisory services"
    ]
  }
]