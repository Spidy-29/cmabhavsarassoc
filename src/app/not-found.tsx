import Link from 'next/link';
import { FileQuestion } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <div className="rounded-full bg-primary/10 p-4 mb-6">
        <FileQuestion className="h-12 w-12 text-primary" />
      </div>
      <h1 className="text-4xl font-bold tracking-tight mb-2 text-foreground">
        404 - Page Not Found
      </h1>
      <p className="text-muted-foreground mb-8 max-w-md text-lg">
        We couldn&apos;t find the page you&apos;re looking for. It might have been moved, deleted, or perhaps the URL is incorrect.
      </p>
      <div className="flex gap-4">
        <Button asChild variant="default" size="lg">
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
}
