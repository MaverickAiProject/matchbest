import { extractPublicId } from "@/lib/extractPublicId";
import { db } from "@/lib/firebase";
import uploadImage, { deleteImage } from "@/lib/services/uploadImage";
import { Timestamp, deleteDoc, doc, setDoc, updateDoc } from "firebase/firestore";

export const createNewCategory = async ({ data, image }) => {
    if (!data?.name) {
        throw new Error("Name is undefined");
    }
    if (!data?.slug) {
        throw new Error("Slug is undefined");
    }
    if (!image) {
        throw new Error("Image is not selected");
    }

    const imageURL = await uploadImage(image);

    const firestoreRef = doc(db, `categories/${data?.slug}`)
    await setDoc(firestoreRef, {
        ...data,
        id: data?.slug,
        iconURL: imageURL,
        timestamp: Timestamp.now(),
    });
}

export const updateCategory = async ({ data, image }) => {
    if (!data?.name) {
        throw new Error("Name is undefined");
    }
    if (!data?.slug) {
        throw new Error("Slug is undefined");
    }
    if (!image) {
        throw new Error("Image not found!")
    }

    const imageToDelete = data?.iconURL?.imageURL;
    if (imageToDelete) {
        const publicId = extractPublicId(imageToDelete);
        await deleteImage(publicId);
    }

    const imageURL = await uploadImage(image);

    const firestoreRef = doc(db, `categories/${data?.id}`);
    await updateDoc(firestoreRef, {
        ...data,
        iconURL: imageURL,
        timestamp: Timestamp.now(),
    });
}

export const deleteCategory = async (id) => {
    if (!id) {
        throw new Error("Id is required");
    }
    await deleteDoc(doc(db, `categories/${id}`));
}