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
   street: "711-710, A. Shridhar Athens, Opp. Statue of Jhansi Ki Rani, Shivranjani",
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
     bio: "CMA Ashish Bhavsar is academically sound and dynamic person, aged about 47 years. He has completed his Cost Accountancy in the year 2001, with 11th rank at national level in the final examination of The Institute of Cost Accountants of India (ICMAI). He has obtained his graduation as well as post graduation degree in commerce stream from Gujarat University. He has wide experience in the cost and management which includes costing system design, MIS development, preparation of cost records as per the companies' act, cost audit of cost records as per the companies act etc. He is Actively associate with The Institute of Cost Accountants of India for more than 16 years. He was Chairman of Ahmedabad Chapter of ICMAI for the period 2017-18 & 2018-19. He was Regional Council Member (RCM) from WIRC of ICMAI for the term 2019-2023. He was secretary of WIRC for the year 2019-20,2020-21 & 2022-23.",
     imageUrl: "/images/team/ashish-bhavsar.jpg"
   },
   {
     name: "CMA Sagar Kapadiya",
     position: "Partner",
     bio: "CMA Sagar Kapadiya is dynamic and young person aged about 35 years. He has completed his Cost Accountancy in the year 2013 From the institute of Cost Accountants of India. He has obtained his graduation degree in commerce stream from Gujarat University. He has practical exposure in the field of Cost & Management Accountancy relating to cost record, cost audit, Accounting, Finance, Income Tax & Company Formation.",
     imageUrl: "/images/team/sagar-kapadiya.jpg"
   },
   {
     name: "CMA Rajesh Vamja",
     position: "Partner",
     bio: "CMA Rajesh Vamja is dynamic and young person aged about 37 years. He has completed his Cost Accountancy in the year 2012 From the institute of Cost Accountants of India. He has obtained his graduation degree in commerce stream from Gujarat University & Post Graduation Degree in commerce stream from the IGNOU. He is certified as a Tax Return Preparer (TRPs) by the income tax department & NIIT in the year 2012. He has practical exposure in the field of cost & management accountancy relating to cost record, cost audit & MIS reporting.",
     imageUrl: "/images/team/rajesh-vamja.jpg"
   }
 ]
}
