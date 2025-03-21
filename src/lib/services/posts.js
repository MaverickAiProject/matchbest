// "use client"
// import { fetcher } from "@/lib/fetcher";
import axios from "axios";

export async function getPosts() {
    try {
        const { data } = await axios.get(process.env.NEXT_PUBLIC_MAIN_URL + "/api/blogs");
        return data;
    } catch (error) {
        console.error("Error fetching post:", error);
        return null;
    }
}

export async function getPost(id) {
    try {
        const { data } = await axios.get(process.env.NEXT_PUBLIC_MAIN_URL + `/api/blogs/${id}`);
        return data;
    } catch (error) {
        console.error("Error fetching post:", error);
        return null;
    }
}
