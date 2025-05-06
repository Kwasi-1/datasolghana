import Link from "next/link";

interface BlogPost {
  title: string;
  date: string;
  summary: string;
  link: string;
}

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="bg-[#18191c] rounded-2xl shadow-lg p-6 flex flex-col h-full border border-gray-800 hover:shadow-xl transition-shadow">
      <div className="mb-3 text-sm text-gray-400">{post.date}</div>
      <h2 className="text-xl font-semibold mb-2 text-white">{post.title}</h2>
      <p className="text-gray-300 mb-6 flex-1">{post.summary}</p>
      <Link
        href={post.link}
        className="inline-block mt-auto bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-md transition-colors text-sm"
      >
        Learn More
      </Link>
    </div>
  );
} 