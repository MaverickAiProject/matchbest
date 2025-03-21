
import { getPosts } from '@/lib/services/posts';
import { PostCard } from './PostCard';

export default async function BlogsList() {
    const posts = await getPosts();

    if (!posts) {
        return (
            <div className="text-center text-lg text-gray-600">
                <h3>Posts Not Available!</h3>
            </div>
        );
    }

    return (
        <section className="pb-28 pt-0 px-4">
            <div
                className="relative rounded-2xl w-full h-28 md:h-32 flex text-[#6d419f] mb-1 shadow-md items-center justify-center text-center "
            >
                <div className="relative px-1">
                    <h1 className="text-3xl md:text-5xl font-bold pb-2 ">Read our Blogs</h1>
                </div>
            </div>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {posts.map((post) => (
                        <PostCard post={post} key={post.id} />
                    ))}
                </div>
            </div>
        </section>
    );
}
