import { PostBanner } from '@/entities/blog-post/ui/post-banner';
import { PostCard } from '@/entities/blog-post/ui/post-card';

export function BlogPosts({ posts }) {
  return (
    <div className="container space-y-10 py-6 md:py-10">
      <section>
        <h2 className="mb-4 font-heading text-3xl">Last Post</h2>
        <PostBanner post={posts[0]}/>
      </section>

      <section>
        <h2 className="mb-4 font-heading text-3xl">Blog Posts</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.slice(1).map((post) => (
            <PostCard key={post._id} post={post}/>
          ))}
        </div>
      </section>
    </div>
  );
}

