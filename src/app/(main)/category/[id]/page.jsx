import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import RightSidebar from "@/components/homepage/news/RightSidebar";
import { getCategories, getNewByCategoryId } from "@/lib/data";




const NewsCategoryPage = async ({ params }) => {

    const { id } = await params;
    console.log(id, 'paramsRes');

    const categories = await getCategories();
    const news = await getNewByCategoryId(id);
    


    return (
        <div className="max-w-[80%] mx-auto grid grid-cols-12 gap-6 my-16">
            <div className="col-span-3">
                <LeftSidebar categories={categories} activeId={id} />
            </div>
            <div className="font-bold text-lg col-span-6">
                <h2 className="font-bold text-lg mb-6">News by category</h2>
                <div className="space-y-4">
                    {news.length > 0?  news.map((n) => {
                        return <div className="p-6 rounded-md border" key={n._id}>
                            {n.title}
                        </div>
                    }) : <h2 className="font-bold text-3xl my-7 text-center">No News Found</h2>}
                </div>
            </div>
            <div className="col-span-3">
                <RightSidebar />
            </div>
        </div>
    );
};

export default NewsCategoryPage;