import { Navigation } from "@/components/custom/Navigation"
import { BlogPostCard } from "@/components/custom/BlogPostCard"

// This would typically come from your WordPress API or CMS
const blogPosts = [
  {
    title: "Understanding Tax Planning Strategies",
    excerpt: "Learn about effective tax planning strategies for your business and personal finances.",
    date: "March 15, 2024",
    slug: "tax-planning-strategies",
    category: "Tax",
    imageUrl: "/images/blog/tax-planning.jpg"
  },
  {
    title: "The Importance of Regular Financial Audits",
    excerpt: "Discover why regular financial audits are crucial for business growth and compliance.",
    date: "March 10, 2024",
    slug: "importance-of-financial-audits",
    category: "Audit",
    imageUrl: "/images/blog/financial-audit.jpg"
  },
  {
    title: "Business Advisory Services: A Guide",
    excerpt: "A comprehensive guide to understanding how business advisory services can help your company.",
    date: "March 5, 2024",
    slug: "business-advisory-guide",
    category: "Business Advisory",
    imageUrl: "/images/blog/business-advisory.jpg"
  }
]

export default function BlogPage() {
  return (
    <main>
      <Navigation />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-heading font-bold text-primary mb-4">
              Latest Insights
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Stay informed with our latest articles and insights on finance, tax, and business advisory
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogPostCard key={post.slug} {...post} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 