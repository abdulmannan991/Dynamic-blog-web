import AdvancedCenteredSlider from "./component/Slider";
import Navbar from "./component/Navbar";
import {  frontData } from "./Data/front_data";
import Card from "./component/Cards";
import ScrollAnimation from "./component/scroll_animation";

export default function Home() {
  
  return (
  <div >
    <Navbar/>
  <AdvancedCenteredSlider/>
  <div className="flex justify-center items-center mt-12">

    <h1 className="text-3xl font-serif font-bold">Latest Blogs </h1>
  </div>
  <ScrollAnimation>
  <div className="mt-20 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mx-auto px-4">
        {frontData.map((data, index) => (
          <Card
            key={index}
            image={data.image}
            title={data.title}
            category={data.category}
            date={data.date}/>
        ))}
      </div>
      </ScrollAnimation>

     <br /><br /><br /><br />
</div>


  );
}
