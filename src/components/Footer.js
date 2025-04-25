"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white shadow-inner font-sans">
      {/* Call-to-Action Section */}

  <hr className="border-black" />

      <div className="container mx-auto text-black px-6 py-10 flex flex-col md:flex-row justify-between items-start">
        <div>
          <h2 className="text-3xl text-blue-500 font-bold">Stay Updated with CareerCraft</h2>
          <p className="text-lg text-gray-700 mt-2">
            Subscribe to receive the latest job postings and updates.
          </p>
        </div>
        <div className="mt-4 flex gap-3 px-5 items-center rounded-full overflow-hidden">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 w-full border border-blue-600 rounded-full text-black focus:outline-none focus:border-blue-800 text-lg transition-all"
          />
          <button className="bg-blue-600 rounded-full text-white px-6 py-3 text-lg font-semibold hover:bg-blue-700 transition-all">
            Subscribe
          </button>
        </div>
      </div>

      {/* Blue Horizontal Line */}
      {/* Blue Horizontal Line (Aligned with Content) */}
<div className="container mx-auto">
  <hr className="border-blue-600 " />
</div>

      {/* Footer Main Section */}
      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-start">
        {/* CareerCraft Branding & Description */}
        <div className="max-w-sm">
          <h2 className="text-blue-600 text-3xl font-bold">CareerCraft</h2>
          <p className="text-gray-600 mt-2 text-lg leading-relaxed">
            Post jobs, review applications, and find the right candidate in minutes.
          </p>
        </div>

        {/* Footer Navigation Links */}
        <div className="mt-6 md:mt-0">
          <ul className="space-y-3 text-black text-lg font-medium">
            <li><Link href="/" className="hover:text-blue-600 transition-all">Home</Link></li>
            <li><Link href="/about" className="hover:text-blue-600 transition-all">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-blue-600 transition-all">Contact Us</Link></li>
            <li><Link href="/signin" className="hover:text-blue-600 transition-all">Sign In</Link></li>
            <li><Link href="/faqs" className="hover:text-blue-600 transition-all">FAQs</Link></li>
          </ul>
        </div>
      </div>

      {/* Copyright & Privacy Policy */}
      <div className="container mx-auto border-t border-blue-600 py-3 flex justify-between text-gray-500 text-md px-6">
        <p>© 2025 CareerCraft Inc</p>
        <Link href="/privacy" className="hover:text-blue-600 transition-all">Privacy Policy</Link>
      </div>
    </footer>
  );
}