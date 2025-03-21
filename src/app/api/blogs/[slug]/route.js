import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    try {
        const { slug } = params;
        const postSnap = await getDoc(doc(db, `posts/${slug}`));
        const post = postSnap.data();
        return NextResponse.json(post, { status: 200 });
    } catch (error) {
        console.error("Error fetching post:", error);
        return NextResponse.json(
            { error: "Failed to fetch post" },
            { status: 500 }
        );
    }
}