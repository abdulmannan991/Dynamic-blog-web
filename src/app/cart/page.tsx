"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaTrashAlt } from "react-icons/fa";

type CartItem = {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image?: string;
};

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) setCartItems(JSON.parse(stored));
  }, []);

  const total = cartItems.reduce(
    (acc: number, item: any) => acc + item.price * item.quantity,
    0
  );

  const handleDelete = (id: string) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Cart Section */}
      <main className="flex-grow max-w-3xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-6">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul className="space-y-4">
              {cartItems.map((item) => (
                <motion.li
                  key={item.id}
                  className="flex justify-between items-center w-[600px] bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image || "/placeholder.png"}
                      alt={item.title}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <span>
                      {item.title} × {item.quantity}
                    </span>
                  </div>
                  <span className="font-semibold ml-52">
                    Rs{item.price * item.quantity}
                  </span>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-red-500 hover:text-red-700 transition-colors"
                  >
                    <FaTrashAlt />
                  </button>
                </motion.li>
              ))}
            </ul>

            <div className="flex justify-between mt-6 font-semibold">
              <span>Total</span>
              <span>Rs{total}</span>
            </div>

            <Link href="/checkout">
              <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all">
                Proceed to Checkout
              </button>
            </Link>
          </>
        )}
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">About Us</h3>
              <p className="text-sm">
                Welcome to our blog! We share insightful articles, tips, and stories on various topics. Stay tuned for more exciting content!
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
              <ul>
                <li>
                  <Link href="/" className="text-gray-300 hover:text-white text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-gray-300 hover:text-white text-sm">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-gray-300 hover:text-white text-sm">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-gray-300 hover:text-white text-sm">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
              <ul>
                <li className="text-sm">
                  Email:{" "}
                  <a
                    href="mailto:ENERGRAIN@blog.com"
                    className="text-teal-400 hover:underline"
                  >
                    ENERGRAIN@blog.com
                  </a>
                </li>
                <li className="text-sm">
                  Phone: <span className="text-gray-300">+123 456 7890</span>
                </li>
                <li className="text-sm">
                  Address:{" "}
                  <span className="text-gray-300">123 Blog Street, Blog City</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-4 text-center">
            <p className="text-sm">© 2025 ENERGRAIN. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Cart;
