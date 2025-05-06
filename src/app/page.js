import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

import Logout from "@/components/logout";


export default async function Home() {

  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login"); // redirect to login if not authenticated
  }

  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
      <Image
  src="/images/frank.jpg"
  alt="Group of people working together"
  layout="fill"
  objectFit="contain"
  className="opacity-50 z-0 blur-md"
/>
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col min-h-screen text-white px-8 py-12">
        <div className="max-w-lg">
          <div>
            <p  className="bg-blue-500">//</p>
        
        <p className="text-blue-400 text-sm font-semibold mb-2">
           Experience the best way to connect talent with opportunity
        </p>
          </div>
          <h1 className="text-5xl font-bold leading-tight">
            WHERE TOP TALENT <br /> MEETS LEADING <br /> EMPLOYERS
          </h1>
          <p className="text-lg mt-4">
            Your bridge between talent and opportunity is finally here. <br />
            Designed to empower job seekers and simplify for companies.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex space-x-4">
             <Logout />            
            <button className="text-white underline hover:text-blue-300">
              View all roles
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 w-full bg-blue-600 text-white py-4">
        <div className="flex justify-center space-x-8">
          <a href="#" className="text-sm font-semibold hover:underline">
            JOB MATCHING ENGINE
          </a>
          <span className="text-white">|</span>
          <a href="#" className="text-sm font-semibold hover:underline">
            TALENT MARKETPLACE
          </a>
          <span className="text-white">|</span>
          <a href="#" className="text-sm font-semibold hover:underline">
            EMPLOYER BRANDING PLATFORM
          </a>
        </div>
      </div>
    </div>
  );
}