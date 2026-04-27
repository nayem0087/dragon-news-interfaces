
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
        <h2 className="font-bold text-lg">All categories</h2>
        <ul className="flex flex-col gap-3 mt-6">
        {
          categories.news_category.map((category) => {
            return <li key={category.category_id} className="font-semibold text-md bg-slate-100 rounded-md p-2 text-center">{category.category_name}</li>
          })
        }
        </ul>
      </div>
      <div className="font-bold text-3xl bg-gray-200 col-span-6">
        All news
      </div>
      <div className="font-bold text-3xl bg-purple-200 col-span-3">
        Social icons
      </div>
    </div>
  );
}
