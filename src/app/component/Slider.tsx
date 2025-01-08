"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import Image from "next/image";

const AdvancedCenteredSlider: React.FC = () => {
  const slides = [
    {
      image: "/slide1.jpg",
      category: "Music",
      title: "What Your Music Preference Says About You and Your Personality.",
      author: "Jonathan Smith",
      date: "June 02, 2018",
    },
    {
      image: "/slide2.jpg",
      category: "Management",
      title: "The Pomodoro Technique really works.",
      author: "Jonathan Smith",
      date: "August 15, 2021",
    },
    {
      image: "/slide3.jpg",
      category: "Lifestyle",
      title: "The difference between Classics,Vintage and Antique Cars.",
      author: "Jonathan Smith",
      date: "December 10, 2020",
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow]}
        pagination={{ clickable: true }}
        effect="coverflow"
        loop={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        speed={800}
        className="rounded-lg shadow-lg overflow-hidden"
        navigation={{
          enabled: true, // Enable navigation for larger screens
        }}
        breakpoints={{
          0: {
            navigation: false, // Disable navigation for mobile screens
          },
          768: {
            navigation: true, // Enable navigation for tablets and larger screens
          },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="w-[80%]">
            <div className="relative w-full h-[500px]">
              {/* Background Image */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority
              />

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6 text-white">
                <p className="uppercase text-sm tracking-widest">{slide.category}</p>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">
                  {slide.title}
                </h2>
                <div className="flex items-center mt-4 text-sm">
                  <Image
                    src="/author.jpg"
                    alt={slide.author}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full mr-2"
                  />
                  <span>
                    {slide.author} • {slide.date}
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AdvancedCenteredSlider;
