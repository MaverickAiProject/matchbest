import React from 'react'
import { getPost } from '@/lib/services/posts';
// import BlogRightSection from '@/app/components/blog/BlogRightSection';
import LayoutProvider from '@/components/layout/LayoutProvider';
import BlogData from '../components/BlogData';

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = await getPost(slug);

    return {
        title: post?.title,
        openGraph: {
            images: [post?.imageURL?.imageURL],
        },
    }
}

export default async function page({ params }) {
    const { slug } = await params;
    const post = await getPost(slug);

    console.log(post)

    return (<div className="bg-gradient-to-b from-[#0F0722] to-black text-white pt-14 pb-12 sm:pt-24">
        <LayoutProvider>
            <main className="flex flex-col lg:flex-row justify-center mt-6">
                <BlogData post={post} />
            </main>
        </LayoutProvider>
    </div>
    )
}