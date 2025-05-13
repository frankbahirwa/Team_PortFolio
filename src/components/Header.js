"use client";

import { useState } from "react";
import Link from "next/link";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { getServerSession } from "next-auth";
import { authOptions } from "../app/api/auth/[...nextauth]/route";
import { signOut } from "next-auth/react";


export default async function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const [logout, setLogout] = useState(false);
  
  const session = await getServerSession(authOptions);
  
    if (!session) {
      setLogout(true) // redirect to login if not authenticated
    }
  return (
    <nav className="fixed  w-full z-50 bg-white  shadow-xl py-3 font-sans lg:px-24">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-blue-600  font-bold text-xl">CareerCraft</div>

        <div className="hidden md:flex space-x-6 text-md justify-center flex-grow">
          <Link href="/" className="text-gray-800 font-medium hover:text-blue-600 transition-all">Home</Link>
          <Link href="/about" className="text-gray-800 font-medium hover:text-blue-600 transition-all">About Us</Link>
          <Link href="/contact" className="text-gray-800 font-medium hover:text-blue-600 transition-all">Contact Us</Link>
          <Link href="/team" className="text-gray-800 font-medium hover:text-blue-600 transition-all">Team</Link>
          <Link href="/faqs" className="text-gray-800 font-medium hover:text-blue-600 transition-all">FAQs</Link>
        </div>

        <div className="ml-auto">
         
         {logout ?
           <>

            <Link href="/register" className="bg-blue-600 text-white px-9 py-3 rounded-full hover:bg-blue-700 transition-all">
            Join Us
          </Link>          
 
           </>  
          : 
          
          
           <button
               onClick={() => signOut({ callbackUrl: "/login" })}
               className="px-4 py-2 bg-blue-500 text-white rounded-full"
            >
               Logout
            </button>

          
          }

          
        </div>

        <button className="md:hidden text-black text-3xl ml-4" onClick={() => setIsOpen(!isOpen)}>
          <HiOutlineMenu />
        </button>
      </div>

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
  );
}