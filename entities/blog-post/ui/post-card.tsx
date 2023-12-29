import { Post } from "contentlayer/generated"
import Image from 'next/image';
import Link from 'next/link';

import { formatDate } from '@/shared/lib/utils';

interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="group relative flex flex-col space-y-2">
      {post.image && (
        <Image
          alt={post.title}
          src={post.image}
          width={804}
          height={452}
          className="rounded-md border bg-muted transition-colors"
        />
      )}
      <h2 className="line-clamp-1 font-heading text-2xl">{post.title}</h2>
      {post.description && (
        <p className="line-clamp-1 text-muted-foreground">{post.description}</p>
      )}
      {post.date && (
        <p className="text-sm text-muted-foreground">
          {formatDate(post.date)}
        </p>
      )}
      <Link href={post.slug} className="absolute inset-0">
        <span className="sr-only">View Article</span>
      </Link>
    </article>
  )
}
