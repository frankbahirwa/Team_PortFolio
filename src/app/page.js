

"use client"

import GitHubUser from "../components/GitHubUser";
import TestimonialsSection from "@/components/testmonial";
import ContactSection from "@/components/contactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Team Portfolio</h1>

      {/* Example: Passing a GitHub username */}
      <div className="space-y-8">
        <GitHubUser username="frankbahirwa" />
        <TestimonialsSection />
        <ContactSection />
      </div>
    </div>
  );
}

