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
    id: "audit-assurance",
    title: "Audit & Assurance",
    description: "Comprehensive audit services for businesses of all sizes, ensuring compliance and identifying opportunities for improvement.",
    slug: "audit-assurance",
    features: [
      "Statutory Audits",
      "Internal Audits",
      "Compliance Reviews",
      "Risk Assessment",
      "Process Improvement"
    ]
  },
  {
    id: "tax-services",
    title: "Tax Services",
    description: "Expert tax planning and compliance services to optimize your tax position and ensure regulatory compliance.",
    slug: "tax-services",
    features: [
      "Tax Planning",
      "Tax Compliance",
      "Tax Advisory",
      "International Taxation",
      "Tax Dispute Resolution"
    ]
  },
  {
    id: "business-advisory",
    title: "Business Advisory",
    description: "Strategic business consulting and advisory services to help your business grow and succeed.",
    slug: "business-advisory",
    features: [
      "Business Strategy",
      "Financial Planning",
      "Growth Advisory",
      "Mergers & Acquisitions",
      "Business Valuation"
    ]
  },
  {
    id: "accounting",
    title: "Accounting Services",
    description: "Professional accounting and bookkeeping services to maintain accurate financial records.",
    slug: "accounting",
    features: [
      "Bookkeeping",
      "Financial Reporting",
      "Payroll Services",
      "Management Accounts",
      "Cloud Accounting"
    ]
  }
] 