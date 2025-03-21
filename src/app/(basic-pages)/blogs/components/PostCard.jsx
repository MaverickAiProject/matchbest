import Link from 'next/link';
import CategoryCard from './CategoryCard';

export function PostCard({ post }) {
    return (
        <Link href={`/blogs/${post?.id}`}>
            <div className="flex flex-col gap-3 h-full p-4 rounded-lg border border-white/20 hover:border-purple-500/50 shadow hover:shadow-lg transition duration-300">
                <div className="relative flex-1">
                    <img
                        className="h-48 w-full object-cover rounded-md"
                        src={post?.imageURL?.imageURL}
                        alt={post?.title}
                    />
                    <h1 className="font-bold mt-2 text-lg text-purple-200">{post?.title}</h1>
                    <p className="text-gray-300 mt-2 text-sm">
                        {post?.description.substring(0, 100)}...
                    </p>
                </div>
                <div className="flex justify-between items-center mt-2">
                    <CategoryCard categoryId={post?.categoryId} />
                    <h5 className="text-xs text-gray-500">
                        {new Date(post?.timestamp?.seconds * 1000).toLocaleDateString()}
                    </h5>
                </div>
            </div>
        </Link>
    );
}
