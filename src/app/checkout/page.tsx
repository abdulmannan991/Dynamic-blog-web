"use client";

import { useState } from "react";

const Checkout = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const cart = localStorage.getItem("cart");

    const res = await fetch("/api/checkout", {
      method: "POST",
      body: JSON.stringify({ ...form, cart: JSON.parse(cart || "[]") }),
    });

    if (res.ok) {
      alert("Order placed! Check your email.");
      localStorage.removeItem("cart");
      setForm({ name: "", email: "", phone: "", address: "" });
    } else {
      alert("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Checkout</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" required placeholder="Your Name" onChange={handleChange} value={form.name} className="w-full p-3 border rounded" />
        <input type="email" name="email" required placeholder="Email Address" onChange={handleChange} value={form.email} className="w-full p-3 border rounded" />
        <input type="tel" name="phone" required placeholder="Phone Number" onChange={handleChange} value={form.phone} className="w-full p-3 border rounded" />
        <textarea name="address" required placeholder="Shipping Address" onChange={handleChange} value={form.address} className="w-full p-3 border rounded"></textarea>
        <button disabled={loading} className="bg-green-600 text-white px-6 py-3 rounded w-full">
          {loading ? "Placing Order..." : "Submit Order"}
        </button>
      </form>
    </div>
  );
};

export default Checkout;
