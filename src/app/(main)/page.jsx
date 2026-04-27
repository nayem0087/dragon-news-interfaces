import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import RightSidebar from "@/components/homepage/news/RightSidebar";

async function getCategories() {
  const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
  const data = await res.json();
  return data.data;
}

async function getNewByCategoryId(category_id) {
  const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`);
  const data = await res.json();
  return data.data;
}

export default async function Home() {

  const categories = await getCategories();
  // console.log(categories);

  const news = await getNewByCategoryId("04");
  console.log(news, 'news');

  return (
    <div className="max-w-[80%] mx-auto grid grid-cols-12 gap-4 my-16">
      <div className="col-span-3">
        <LeftSidebar categories={categories} activeId={"01"} />
      </div>
      <div className="font-bold text-lg bg-gray-200 col-span-6">
        All news
        <div className="space-y-4">
          {news.map((n) => {
            return <div className="p-6 rounded-md border" key={n._id}>
              {n.title}
            </div>
          })}
        </div>
      </div>
      <div className="col-span-3">
        <RightSidebar />
      </div>
    </div>
  );
}
