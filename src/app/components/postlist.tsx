import PostCard from "./postcard";

export default function PostList({ posts }: { posts: any[] }) {
  return (
    <ul className="space-y-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </ul>
  );
}
