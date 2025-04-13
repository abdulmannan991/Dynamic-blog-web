"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Footer from "../component/Footer";

export default function AboutPage() {
  return (
    <div className=" text-gray-800 min-h-screen px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl font-extrabold text-center mb-8 text-green-700"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About EnerGrain 🌾
        </motion.h1>

        <motion.div
          className="grid md:grid-cols-2 gap-10 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-green-800">Our Story</h2>
            <p className="text-lg leading-relaxed">
              EnerGrain began with a simple mission: to bring healthy, gluten-free flour alternatives to every household. 
              We understand how dietary restrictions can affect lifestyles, so we created a wholesome solution that’s 
              both <b>nutritious</b>  and <b>delicious</b>.
            </p>
            <p className="text-lg leading-relaxed">
              Our flours are made from natural ingredients like brown rice, millet, and quinoa — sourced directly from local farms, 
              processed with care, and packed with the energy you need to thrive.
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="w-full h-72 relative rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src="/ENERGRAIN.png" // Replace with your actual image
              alt="EnerGrain Flour Bag"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>

        <div className="mt-16 space-y-10">
          <motion.div
            className="grid md:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {[
              { title: "🌱 100% Natural", desc: "No preservatives, additives, or chemicals — only pure goodness." },
              { title: "💪 Power Packed", desc: "Rich in fiber, protein, and essential nutrients for your active lifestyle." },
              { title: "🌍 Eco-Friendly", desc: "Sustainably sourced and packaged with love for our planet." },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-lg text-green-700 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <h2 className="text-2xl font-bold mb-4">Ready to energize your meals?</h2>
          <p className="text-gray-700 mb-6">Explore our collection of gluten-free flours and find your new favorite today.</p>
          <Link href="/">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-md transition-all">
              Shop Now
            </button>
          </Link>
        </motion.div>
      
      </div>
    </div>
  );
}
