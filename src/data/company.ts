export interface CompanyInfo {
  name: string
  tagline: string
  description: string
  address: {
    street: string
    city: string
    state: string
    zip: string
    country: string
  }
  contact: {
    phone: string
    email: string
    website: string
  }
  social: {
    linkedin?: string
    twitter?: string
    facebook?: string
  }
  businessHours: {
    weekdays: string
    saturday: string
    sunday: string
  }
  team: {
    name: string
    position: string
    bio: string
    imageUrl?: string
  }[]
}

export const companyInfo: CompanyInfo = {
  name: "CMA Bhavsar & Associates",
  tagline: "Your Trusted Partner in Financial Excellence",
  description: "We are a leading firm of Chartered Accountants providing comprehensive financial services to businesses and individuals. Our team of experienced professionals is dedicated to delivering excellence in every aspect of our work.",
  address: {
    street: "123 Business Street",
    city: "Financial District",
    state: "State",
    zip: "12345",
    country: "Country"
  },
  contact: {
    phone: "+1 (555) 123-4567",
    email: "info@cmabhavsarassoc.com",
    website: "www.cmabhavsarassoc.com"
  },
  social: {
    linkedin: "https://linkedin.com/company/cmabhavsarassoc",
    twitter: "https://twitter.com/cmabhavsarassoc",
    facebook: "https://facebook.com/cmabhavsarassoc"
  },
  businessHours: {
    weekdays: "9:00 AM - 6:00 PM",
    saturday: "10:00 AM - 2:00 PM",
    sunday: "Closed"
  },
  team: [
    {
      name: "John Doe",
      position: "Managing Partner",
      bio: "With over 20 years of experience in accounting and finance, John leads our team with expertise and vision.",
      imageUrl: "/images/team/john-doe.jpg"
    },
    {
      name: "Jane Smith",
      position: "Senior Tax Advisor",
      bio: "Jane specializes in tax planning and compliance, helping clients optimize their tax positions.",
      imageUrl: "/images/team/jane-smith.jpg"
    },
    {
      name: "Mike Johnson",
      position: "Audit Director",
      bio: "Mike oversees our audit services, ensuring the highest standards of quality and compliance.",
      imageUrl: "/images/team/mike-johnson.jpg"
    }
  ]
} 