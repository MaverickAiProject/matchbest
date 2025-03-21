import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const querySnapshot = await getDocs(collection(db, "categories"));
        const categories = querySnapshot.docs.map((doc) => (doc.data()))

        return new NextResponse(JSON.stringify(categories), { status: 200 });
    } catch (error) {
        console.error("Error fetching posts:", error);
        return new NextResponse(JSON.stringify({ error: "Failed to fetch categories" }), { status: 500 });
    }
};

