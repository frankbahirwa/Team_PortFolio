

"use client"

import GitHubUser from "../components/GitHubUser";
import Testimonials from "@/components/testmonial";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Team Portfolio</h1>

      {/* Example: Passing a GitHub username */}
      <div className="space-y-8">
        <GitHubUser username="frankbahirwa" />
        <Testimonials />
      </div>
    </div>
  );
}

