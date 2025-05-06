"use client"
import { signOut } from "next-auth/react";

const Logout = () =>{
    return (
        <button
               onClick={() => signOut({ callbackUrl: "/login" })}
               className="px-4 py-2 bg-red-500 text-white rounded"
            >
               Logout
            </button>
    )
 }

 export default Logout;