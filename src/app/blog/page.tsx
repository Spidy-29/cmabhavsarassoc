import { Navigation } from "@/components/custom/Navigation"
import { Footer } from "@/components/custom/Footer"
import { BlogPostCard } from "@/components/custom/BlogPostCard"
import { blogPosts } from "@/data/blog-posts"
import { Badge } from "@/components/ui/badge"

export default function BlogPage() {
  // Get unique categories
  const categories = Array.from(new Set(blogPosts.map(post => post.category)))

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
                Professional Insights & Updates
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Stay updated with the latest insights, regulatory changes, and professional advice 
                from our expert Cost Accountants at Ashish Bhavsar & Associates.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              <Badge variant="default" className="px-4 py-2">All Posts</Badge>
              {categories.map((category) => (
                <Badge key={category} variant="outline" className="px-4 py-2">
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {blogPosts.length > 0 && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-primary mb-2">Featured Article</h2>
                <p className="text-muted-foreground">Latest insights from our professionals</p>
              </div>
              
              <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="secondary">{blogPosts[0].category}</Badge>
                      <span className="text-sm text-muted-foreground">{blogPosts[0].date}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
                      {blogPosts[0].title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {blogPosts[0].excerpt}
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      By {blogPosts[0].author}
                    </p>
                    <a
                      href={`/blog/${blogPosts[0].slug}`}
                      className="inline-flex items-center text-primary font-medium hover:underline"
                    >
                      Read Full Article
                      <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                  <div className="relative h-64 lg:h-80 rounded-lg overflow-hidden">
                    {blogPosts[0].imageUrl ? (
                      <img
                        src={blogPosts[0].imageUrl}
                        alt={blogPosts[0].title}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <div className="bg-primary/20 w-full h-full flex items-center justify-center">
                        <span className="text-primary/60">Featured Article Image</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* All Blog Posts */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-2xl font-heading font-bold text-primary mb-2">All Articles</h2>
              <p className="text-muted-foreground">Professional insights on cost accounting, GST, and business compliance</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <BlogPostCard
                  key={post.id}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  slug={post.slug}
                  category={post.category}
                  imageUrl={post.imageUrl}
                />
              ))}
            </div>

            {/* Load More Button - if you plan to implement pagination */}
            {blogPosts.length > 6 && (
              <div className="text-center mt-12">
                <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                  Load More Articles
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Topics We Cover */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-primary mb-4">
                Topics We Cover
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our blog covers a wide range of professional topics to help businesses stay compliant and informed
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Cost Accounting",
                  description: "Cost records, cost audit, and compliance under Companies Act 2013",
                  icon: "📊"
                },
                {
                  title: "GST Updates",
                  description: "Latest GST rules, compliance requirements, and implementation strategies",
                  icon: "💼"
                },
                {
                  title: "Business Advisory",
                  description: "Strategic advice for business growth and operational efficiency",
                  icon: "📈"
                },
                {
                  title: "Regulatory Changes",
                  description: "Updates on regulatory changes affecting Indian businesses",
                  icon: "⚖️"
                }
              ].map((topic) => (
                <div
                  key={topic.title}
                  className="text-center p-6 rounded-lg border bg-background hover:shadow-md transition-shadow"
                >
                  <div className="text-3xl mb-4">{topic.icon}</div>
                  <h3 className="font-heading text-lg font-semibold text-primary mb-2">
                    {topic.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {topic.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Subscribe Newsletter */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">
              Stay Updated with Professional Insights
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Subscribe to receive the latest updates on cost accounting, GST regulations, 
              and business compliance directly from our experts.
            </p>
            <div className="flex gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background"
              />
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Or contact us directly at {' '}
              <a href="mailto:ashish@cmabhavsarassoc.in" className="text-primary hover:underline">
                ashish@cmabhavsarassoc.in
              </a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}