"use client";

import { useState } from "react";
import Image from "next/image";
import { detailedData } from "@/app/Data/Detail_data";
import Footer from "@/app/component/Footer";

const ProductDetail = ({ params }: { params: { product_name: string } }) => {
  const { product_name } = params;

  const product = detailedData.find(
    (p) => p.title.toLowerCase().replace(/ /g, "-") === product_name.toLowerCase()
  );

  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    if (!product) return;

    const cartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image2,
      quantity,
    };

    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const updatedCart = [...existingCart, cartItem];
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    alert("Item added to cart!");
  };

  if (!product) {
    return (
      <div className="flex justify-center h-screen items-center">
        <h1 className="text-center text-5xl font-bold">Product Not Found!</h1>
      </div>
    );
  }

  return (
    <><div className="px-4 max-w-[1000px] mx-auto md:py-24 py-12">
      <div className="w-full mb-10">
        <Image src={product.image2} alt={product.title} width={2000} height={2000} />
      </div>

      <h1 className="text-3xl md:text-5xl font-bold text-center">{product.heading}</h1>

      <div className="flex justify-center items-center gap-6 mt-4 mb-10">
        <p className="text-gray-500 text-lg">Price:</p>
        <p className="text-2xl font-semibold text-blue-600">{product.price}Rs</p>
      </div>

      <p className="text-lg text-[#4c4b4b] leading-8 mb-6">{product.description1}</p>
      <p className="text-sm text-[#525151] leading-7 mb-8">{product.description2}</p>

      <div className="flex gap-4 items-center mb-8">
        <button
          className="text-2xl px-3 py-1 bg-gray-200 rounded-full"
          onClick={decreaseQty}
        >
          −
        </button>
        <span className="text-xl">{quantity}</span>
        <button
          className="text-2xl px-3 py-1 bg-gray-200 rounded-full"
          onClick={increaseQty}
        >
          +
        </button>
      </div>

      <button
        onClick={handleAddToCart}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
      >
        Add to Cart
      </button>

    </div><Footer /></>

  );
};

export default ProductDetail;
