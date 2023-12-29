import { Post } from "contentlayer/generated"
import Image from 'next/image';
import Link from 'next/link';

interface PostBannerProps {
  post: Post
}

export function PostBanner({ post }: PostBannerProps) {
  return (
    <article className="relative grid grid-cols-1 gap-6 md:grid-cols-2">
      <div>
        {post.image && (
          <Image
            alt={post.title}
            className="w-full rounded-lg border object-cover object-center md:h-64 lg:h-72"
            height={452}
            src={post.image}
            width={804}
          />
        )}
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="mb-2 text-balance font-heading text-2xl md:text-4xl">
          {post.title}
        </h3>
        {post.description && (
          <p className="text-balance text-muted-foreground md:text-lg">
            {post.description}
          </p>
        )}
        <Link href={post.slug} className="absolute inset-0">
          <span className="sr-only">View Article</span>
        </Link>
      </div>
    </article>
  )
}
