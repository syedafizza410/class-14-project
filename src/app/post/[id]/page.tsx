import { notFound } from "next/navigation";
import Link from "next/link";

async function fetchPost(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) return undefined;
  return res.json();
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const post = await fetchPost(params.id);

  if (!post) return notFound();

  return (
    <div className="p-8">
      <p className="lg:text-2xl text-blue-900 font-bold"><span className="text-blue-900 lg:text-2xl">Post ID:</span> {post.id}</p>
      <p className="lg:text-2xl text-blue-900 font-bold"><span className="text-blue-900 lg:text-2xl">User ID:</span> {post.userId}</p>
      <br />
      <h1 className="lg:text-2xl text-blue-500 font-bold hover:underline"><span className="text-blue-900 lg:text-3xl">Title:</span> {post.title}</h1>
      <br />
      <p className="text-gray-900 mb-4 text-xl"><span className="text-blue-900 lg:text-3xl font-bold">Body:</span> {post.body}</p>
      <Link
        href="/"
        className="inline-block bg-blue-600 text-white text-xl font-medium py-3 px-6 rounded-lg mt-6 shadow hover:bg-blue-700 transition"
      >
        Back to all posts
      </Link>
    </div>
  );
}
