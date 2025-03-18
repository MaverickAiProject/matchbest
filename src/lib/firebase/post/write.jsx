import { extractPublicId } from "@/lib/extractPublicId";
import { db } from "@/lib/firebase";
import uploadImage, { deleteImage } from "@/lib/services/uploadImage";
import { Timestamp, deleteDoc, doc, setDoc, updateDoc } from "firebase/firestore";

export const createNewPost = async ({ data, image }) => {
    if (!data?.title) {
        throw new Error("Name is undefined");
    }
    if (!data?.slug) {
        throw new Error("Slug is undefined");
    }
    if (!data?.description) {
        throw new Error("Description is undefined");
    }
    if (!image) {
        throw new Error("Image is not selected");
    }

    const imageURL = await uploadImage(image);

    const firestoreRef = doc(db, `posts/${data?.slug}`)
    await setDoc(firestoreRef, {
        ...data,
        id: data?.slug,
        imageURL: imageURL,
        timestamp: Timestamp.now(),
    });
}

export const updatePost = async ({ data, image }) => {
    if (!data?.title) {
        throw new Error("Name is undefined");
    }
    if (!data?.slug) {
        throw new Error("Slug is undefined");
    }

    var imageToDelete = data?.imageURL?.imageURL;
    if (imageToDelete) {
        const publicId = extractPublicId(imageToDelete);
        await deleteImage(publicId);
    }

    const imageURL = await uploadImage(image);

    const firestoreRef = doc(db, `posts/${data?.id}`);
    await updateDoc(firestoreRef, {
        ...data,
        imageURL: imageURL,
        timestamp: Timestamp.now(),
    });
}

export const deletePost = async (id) => {
    if (!id) {
        throw new Error("Id is required");
    }
    await deleteDoc(doc(db, `posts/${id}`));
}