import AdvancedCenteredSlider from "./component/Slider";
import Navbar from "./component/Navbar";
import Link from "next/link";
import { displayData } from "./Data/front_data";
import Card from "./component/Cards";

export default function Home() {
  return (
  <div >
    <Navbar/>
  <AdvancedCenteredSlider/>
  <div className="flex justify-center items-center mt-12">

    <h1 className="text-3xl font-serif font-bold">Latest Blogs </h1>
  </div>
  <div className="mt-20 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mx-auto px-4">
        {displayData.map((data, index) => (
          <Card
            key={index}
            image={data.image}
            title={data.title}
            category={data.category}
            date={data.date}/>
        ))}
      </div>

      <div className="flex justify-center mt-14">
        <button>
          <Link href={"/blogs"} className="px-8 py-3 rounded-sm text-white text-2xl font-[500] bg-blue-900">View All Posts</Link>
        </button>
      </div>
</div>


  );
}
