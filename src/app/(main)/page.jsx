import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import RightSidebar from "@/components/homepage/news/RightSidebar";

async function getCategories() {
  const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
  const data = await res.json();
  return data.data;
}

export default async function Home() {

  const categories = await getCategories();
  // console.log(categories);

  return (
    <div className="max-w-[80%] mx-auto grid grid-cols-12 gap-4 my-16">
      <div className="col-span-3">
        <LeftSidebar categories={categories} activeId={"01"} />
      </div>
      <div className="font-bold text-3xl bg-gray-200 col-span-6">
        All news
      </div>
      <div className=" col-span-3">
        <RightSidebar/>
      </div>
    </div>
  );
}
