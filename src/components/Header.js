"use client";

import { useState } from "react";
import Link from "next/link";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border shadow-xl py-3 font-sans">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          {/* Logo */}
          <div className="text-blue-600 font-bold text-3xl">CareerCraft</div>

          {/* Links - Desktop */}
          <div className="hidden md:flex space-x-6 text-lg justify-center flex-grow">
            <Link href="/" className="text-black font-medium hover:text-blue-600 transition-all">Home</Link>
            <Link href="/about" className="text-black font-medium hover:text-blue-600 transition-all">About Us</Link>
            <Link href="/contact" className="text-black font-medium hover:text-blue-600 transition-all">Contact Us</Link>
            <Link href="/faqs" className="text-black font-medium hover:text-blue-600 transition-all">FAQs</Link>
          </div>

          {/* Join Us Button */}
          <div className="ml-auto">
            <button
              onClick={() => setShowModal(true)}
              className="bg-blue-600 text-white px-4 py-3 rounded-full hover:bg-blue-700 transition-all"
            >
              Join Us
            </button>
          </div>

          {/* Hamburger Icon */}
          <button className="md:hidden text-black text-3xl ml-4" onClick={() => setIsOpen(!isOpen)}>
            <HiOutlineMenu />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 right-0 h-full w-64 bg-white bg-opacity-90 backdrop-blur-md shadow-2xl md:hidden p-6 flex flex-col"
          >
            <button className="text-black text-3xl self-end" onClick={() => setIsOpen(false)}>
              <HiX />
            </button>

            <div className="flex flex-col space-y-4 text-lg mt-6">
              <Link href="/" className="text-black font-semibold hover:text-blue-600 transition-all" onClick={() => setIsOpen(false)}>Home</Link>
              <Link href="/about" className="text-black font-semibold hover:text-blue-600 transition-all" onClick={() => setIsOpen(false)}>About Us</Link>
              <Link href="/contact" className="text-black font-semibold hover:text-blue-600 transition-all" onClick={() => setIsOpen(false)}>Contact Us</Link>
              <Link href="/faqs" className="text-black font-semibold hover:text-blue-600 transition-all" onClick={() => setIsOpen(false)}>FAQs</Link>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Login Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-2 right-3 text-xl text-gray-500 hover:text-black"
              >
                ✕
              </button>

              <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">Sign In to CareerCraft</h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full px-4 py-3 border outline-none text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 border border-gray-300 outline-none text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="ml-24 w-1/2 bg-blue-600 text-white py-3 rounded-2xl hover:bg-blue-800 font-semibold"
                >
                  LOGIN
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
