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
  branch: {
    street: string
    city: string
    state: string
    zip: string
    country: string
  }
  contact: {
    phone: string
    mobile: string
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
  name: "Ashish Bhavsar & Associates",
  tagline: "Cost Accountants",
  description: "The Firm was set up by its founder partner CMA Ashish Bhavsar at Ahmedabad. Looking to the growth of the firm, firm establish its branch at Rajkot. Since then firm grow within short span of time. To provide all type of service to our client at one place through qualified, motivated and dedicated young team. Our mission to be a part of client growth story through our professional excellence.",
  address: {
    street: "D-916, Shiromani Complex, Opp. Ocean Park, Nehrunagar, Satellite Road",
    city: "Ahmedabad",
    state: "Gujarat",
    zip: "380 015",
    country: "India"
  },
  branch: {
    street: "422, 4th Floor, RK Empire, Nr. Mavdi Circle, 150 Feet Ring Road",
    city: "Rajkot",
    state: "Gujarat", 
    zip: "360 004",
    country: "India"
  },
  contact: {
    phone: "079-26768804",
    mobile: "+91 99241 28804",
    email: "ashish@cmabhavsarassoc.in",
    website: "www.cmabhavsarassoc.in"
  },
  social: {
    linkedin: "https://linkedin.com/company/ashish-bhavsar-associates",
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
      name: "CMA Ashish Bhavsar",
      position: "Founder Partner",
      bio: "CMA Ashish Bhavsar is academically sound and dynamic person. He has completed his Cost Accountancy in the year 2001, with 11th rank at national level in the final examination of The Institute of Cost Accountants of India (ICAI). He has wide experience in cost and management which includes costing system design, MIS development, preparation of cost records as per the companies act, cost audit of cost records as per the companies act etc.",
      imageUrl: "/images/team/ashish-bhavsar.jpg"
    },
    {
      name: "CMA Sagar Kapadiya",
      position: "Partner",
      bio: "CMA Sagar Kapadiya is dynamic and young person. He has completed his Cost Accountancy in the year 2013 from the institute of Cost Accountants of India. He has practical exposure in the field of Cost & Management Accountancy relating to cost record, cost audit, Accounting, Finance, Income Tax & Company Formation.",
      imageUrl: "/images/team/sagar-kapadiya.jpg"
    },
    {
      name: "CMA Rajesh Vamja",
      position: "Partner",
      bio: "CMA Rajesh Vamja is dynamic and young person. He has completed his Cost Accountancy in the year 2012 from the institute of Cost Accountants of India. He is certified as a Tax Return Preparer (TRPs) by the income tax department & NIIT. He has practical exposure in the field of cost & management accountancy relating to cost record, cost audit & MIS reporting.",
      imageUrl: "/images/team/rajesh-vamja.jpg"
    }
  ]
}