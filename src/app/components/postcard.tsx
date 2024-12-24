import Link from "next/link";

export default function PostCard({ post }: { post: any }) {
  return (
    <li className="p-4 border rounded-lg hover:bg-gray-50">
        <p className="lg:text-2xl text-blue-900 font-bold"><span className="text-blue-900 lg:text-2xl">Post ID:</span> {post.id}</p>
        <p className="lg:text-2xl text-blue-900 font-bold"><span className="text-blue-900 lg:text-2xl">User ID:</span> {post.userId}</p>
        <br />
      <Link href={`/post/${post.id}`}>
        <h1 className="lg:text-2xl text-blue-500 font-bold hover:underline"><span className="text-blue-900 lg:text-3xl">Title:</span> {post.title}</h1>
      </Link>
    </li>
  );
}
