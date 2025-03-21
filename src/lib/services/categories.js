import axios from "axios";

export async function getCategories() {
    try {
        const { data } = await axios.get(process.env.NEXT_PUBLIC_MAIN_URL + "/api/categories");
        return data;
    } catch (error) {
        console.error("Error fetching post:", error);
        return null;
    }
}

export async function getCategory(id) {
    try {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_MAIN_URL}/api/categories/${id}`);
        return data;
    } catch (error) {
        console.error("Error fetching post:", error);
        return null;
    }
}