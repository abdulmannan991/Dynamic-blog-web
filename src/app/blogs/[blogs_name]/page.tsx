import { detailedData } from "@/app/Data/Detail_data"; 
import Image from "next/image";
import React from "react";

const BlogDetail = ({ params }: { params: { blogs_name: string } }) => {
  const { blogs_name } = params;

  if (!blogs_name) {
    return (
      <div className="flex justify-center h-screen items-center">
        <h1 className="text-center text-5xl font-bold">Post Not Found!</h1>
      </div>
    );
  }

  const post = detailedData.find(
    (p) => p.title.toLowerCase().replace(/ /g, "-") === blogs_name.toLowerCase()
  );

  if (!post) {
    return (
      <div className="flex justify-center h-screen items-center">
        <h1 className="text-center text-5xl font-bold">Post Not Found!</h1>
      </div>
    );
  }

  return (
    <div className="max-w-[1000px] mx-auto md:py-24 py-12">
      <div className="w-full mb-10">
        <Image src={post.image2} alt={post.title} height={2000} width={2000} />
      </div>
      <h1 className="Heading md:text-5xl text-3xl text-center font-bold">{post.heading}</h1>
      <div className="flex justify-center items-center gap-8 mt-4 mb-14 tracking-widest">
        <p className="text-gray-500 text-sm md:text-base">{post.date}</p>
        <p className="text-sm md:text-base ">{post.author}</p>
      </div>

      <p className="text-2xl tracking-widest leading-10 mb-10">{post.description1}</p>
      <p className="text-lg tracking-wide text-[#525151] leading-8">{post.description2}</p>

      <h2 className="text-center Heading py-10 font-bold md:text-3xl text-2xl">Add Comment</h2>

     
    </div>
  );
};

export default BlogDetail;
