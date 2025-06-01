import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface BlogPostCardProps {
  title: string
  excerpt: string
  date: string
  slug: string
  category: string
  imageUrl?: string
}

export function BlogPostCard({
  title,
  excerpt,
  date,
  slug,
  category,
  imageUrl,
}: BlogPostCardProps) {
  return (
    <Card className="group overflow-hidden">
      {imageUrl && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="object-cover w-full h-full transition-transform group-hover:scale-105"
          />
        </div>
      )}
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="secondary">{category}</Badge>
          <span className="text-sm text-muted-foreground">{date}</span>
        </div>
        <Link href={`/blog/${slug}`}>
          <h3 className="text-xl font-heading font-semibold text-primary hover:underline">
            {title}
          </h3>
        </Link>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground line-clamp-3">{excerpt}</p>
      </CardContent>
      <CardFooter>
        <Link
          href={`/blog/${slug}`}
          className="text-sm font-medium text-primary hover:underline inline-flex items-center"
        >
          Read more
          <svg
            className="ml-1 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </CardFooter>
    </Card>
  )
} 