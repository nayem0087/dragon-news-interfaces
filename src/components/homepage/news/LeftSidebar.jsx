import Link from "next/link";

export const LeftSidebar = ({ categories, activeId }) => {

    if (!categories?.news_category) return <p>Loading...</p>;

    return (
        <div>
            <h2 className="font-bold text-lg">All categories</h2>
            <ul className="flex flex-col gap-3 mt-6">
                {categories.news_category.map((category) => (
                    <li
                        key={category.category_id}
                        className={`
                            ${activeId === category.category_id && 'bg-slate-100'}
                            font-semibold text-md rounded-md text-center`}
                    >
                        <Link href={`/category/${category.category_id}`}
                        className="block p-2">
                         {category.category_name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LeftSidebar;