import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const querySnapshot = await getDocs(collection(db, "posts"));
        console.log(querySnapshot)
        const posts = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }))

        return new NextResponse(JSON.stringify(posts), { status: 200 });
    } catch (error) {
        console.error("Error fetching posts:", error);
        return new NextResponse(JSON.stringify({ error: "Failed to fetch posts" }), { status: 500 });
    }
};

