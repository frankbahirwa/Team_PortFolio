"use client";
import React, { useState } from 'react';
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";


const ChatInterface = async () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login"); // redirect to login if not authenticated
  }

  const toggleSidebar = () => {
    console.log('clicked');
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-blue-50 text-black">
      {/* Sidebar */}
      <div
        className={`w-64 bg-blue-100 p-4 flex flex-col transition-all duration-300 ${
          isSidebarOpen
            ? 'block translate-x-0 animate-slideInFadeIn'
            : 'hidden -translate-x-full animate-slideOutFadeOut'
        }`}
      >
        <button className="mb-4 w-full py-2 flex items-center justify-between">
          <span className="text-xl text-blue-700 font-semibold">Recents</span>
          <span className="text-xl bg-blue-200 p-1.5 rounded-full flex items-center justify-center">➕</span>
        </button>
    
        <div className="flex-1">
          <h2 className="text-sm font-semibold mb-2 text-blue-700 font-sans">Today</h2>
          <div className="p-2 rounded font-normal text-sm bg-blue-200 mb-2 cursor-pointer">NextJs ChatGPT Dashboard</div>
          <div className="p-2 rounded font-sans text-base hover:bg-blue-200 cursor-pointer transition-colors">SQL Query Correction</div>
          <h2 className="text-sm font-semibold mt-4 mb-2 text-blue-700 font-sans">Yesterday</h2>
          <div className="p-2 rounded font-sans text-base hover:bg-blue-200 transition-colors">Session Logout Issue</div>
        </div>
        <button className="mt-auto p-2 bg-blue-200 rounded flex items-center justify-center hover:bg-blue-300 transition-colors">
          <span className="mr-2">⬆️</span>
          <span>Upgrade plan</span>
        </button>
      </div>

      {/* Main Content */}
      <div className={`flex-1 flex flex-col items-center justify-center ${isSidebarOpen ? '' : 'w-full'}`}>
        <div className={`flex p-4 w-full ${isSidebarOpen ? 'justify-end' : 'justify-center'}`}>
          <div className="flex items-center justify-between w-64">
            <button onClick={toggleSidebar} className="p-2 bg-gray-200 rounded-full">
              {isSidebarOpen ? '⬅️' : '➡️'}
            </button>
            <h1 className="text-lg font-semibold">CareerCraft</h1>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center p-4 w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-8">What can I help with?</h2>
          <div className="w-full bg-gray-100 rounded-lg p-4">
            <div className="flex items-start border border-gray-300 rounded-lg p-2">
              <textarea
                className="flex-1 min-h-[40px] bg-transparent outline-none text-black placeholder-gray-400 max-w-full overflow-auto break-words resize-none"
                placeholder="Ask anything..."
                onInput={(e) => console.log(e.target.value)}
                onFocus={(e) => {
                  if (!e.target.value) e.target.value = '';
                }}
                onBlur={(e) => {
                  if (!e.target.value) e.target.value = 'Ask anything...';
                }}
              />
              <button className="p-2 cursor-pointer">🖇️</button>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Provide Your Job Description.
          </p>
        </div>
      </div>

      {/* Inline styles for custom animations */}
      <style jsx>{`
        @keyframes slideInFadeIn {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideOutFadeOut {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(-100%);
            opacity: 0;
          }
        }
        .animate-slideInFadeIn {
          animation: slideInFadeIn 0.3s ease-in-out forwards;
        }
        .animate-slideOutFadeOut {
          animation: slideOutFadeOut 0.3s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ChatInterface;