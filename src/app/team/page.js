"use client";

import React from 'react';

const TeamPage = () => {
  const teamMembers = Array(6).fill({
    name: "Baraka",
    description: "Connect with job opportunities that align with your skills.",
    image: "/images/frank.jpg", 
  });

  const handleConnect = (name) => {
    alert(`Connecting with ${name}...`); 
  };

  return (
    <div className="bg-white  min-h-screen">
      {/* Header */}
      <div className="bg-blue-600 text-white text-center py-6">
        <h1 className="text-4xl font-bold">Meet the Team</h1>
      </div>

      {/* Team Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="w-64 h-96 bg-white rounded-2xl shadow-lg overflow-hidden relative mx-auto"
            >
              {/* Diagonal split background */}
              <div className="absolute inset-0">
                <div className="bg-gray-200 h-1/2 w-full transform -skew-y-12 origin-top-left"></div>
                <div className="bg-white h-1/2 w-full transform -skew-y-12 origin-top-left mt-[48%]"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full pt-24">
                {/* Name */}
                <h1 className="text-3xl font-bold text-orange-500">{member.name}</h1>

                {/* Tagline */}
                <p className="text-gray-600 text-center mt-2 px-4">
                  {member.description}
                </p>

                {/* Connect Button */}
                <button
                  onClick={() => handleConnect(member.name)}
                  className="mt-4 flex items-center justify-center mx-auto bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
                >
                  <span>Connect</span>
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </button>

                {/* Icons */}
                <div className="absolute bottom-6 flex space-x-3">
                  {[...Array(4)].map((_, index) => (
                    <svg
                      key={index}
                      className="w-6 h-6 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Text */}
      <div className="text-center py-8 px-4">
        <p className="text-gray-700 max-w-3xl mx-auto">
          At CareerCraft, our diverse team of designers, developers, and strategists work together to bring ideas to life. With a shared passion for innovation and excellence, we build digital solutions that make a lasting impact.
        </p>
      </div>
    </div>
  );
};

export default TeamPage;