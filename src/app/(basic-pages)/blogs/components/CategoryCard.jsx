import { getCategory } from '@/lib/services/categories';

export default async function CategoryCard({ categoryId }) {
    const category = await getCategory(categoryId);
    return (
        <div className="flex w-fit items-center bg-purple-800/50 backdrop-blur-sm text-white text-xs font-medium rounded-full px-2 py-1">
            <img
                src={category?.iconURL?.imageURL}
                alt={category?.name}
                className="h-4 w-4 rounded-full mr-1 object-cover"
            />
            <span>{category?.name}</span>
        </div>
    );
}
