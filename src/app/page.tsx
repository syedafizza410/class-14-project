import PostList from "../app/components/postlist";

async function fetchPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

export default async function Home() {
  const posts = await fetchPosts();

  return (
    <div className="p-8">
      <h1 className="text-5xl font-bold mb-4 text-blue-900">All Posts</h1>
      <PostList posts={posts} />
    </div>
  );
}
