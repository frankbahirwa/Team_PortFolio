import React from "react";

// SVG Social Icons (replace with your preferred icons or use lucide-react if installed)
const InstagramIcon = (props) => (
  <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <rect width="18" height="18" x="3" y="3" rx="5" stroke="currentColor" strokeWidth="2"/>
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
    <circle cx="17" cy="7" r="1.5" fill="currentColor"/>
  </svg>
);
const TwitterIcon = (props) => (
  <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 19c7.732 0 11.965-6.418 11.965-11.965 0-.182 0-.364-.013-.545A8.548 8.548 0 0022 4.011a8.19 8.19 0 01-2.357.646A4.117 4.117 0 0021.448 2.4a8.224 8.224 0 01-2.605.996A4.107 4.107 0 0015.448 2c-2.266 0-4.103 1.837-4.103 4.103 0 .322.036.637.106.938A11.65 11.65 0 013 3.149a4.102 4.102 0 001.27 5.47A4.073 4.073 0 012.8 8.07v.052a4.104 4.104 0 003.292 4.023 4.095 4.095 0 01-1.852.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
  </svg>
);
const LinkedinIcon = (props) => (
  <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <rect width="18" height="18" x="3" y="3" rx="4" stroke="currentColor" strokeWidth="2"/>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 11v5M8 8v.01M12 11v5m0-5a2 2 0 012-2h0a2 2 0 012 2v5"/>
  </svg>
);
const GithubIcon = (props) => (
  <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.868 8.167 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.112-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.848-2.338 4.696-4.566 4.945.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.578.688.48C19.135 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
);
const MailIcon = (props) => (
  <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <rect width="20" height="16" x="2" y="4" rx="3" stroke="currentColor" strokeWidth="2"/>
    <path strokeLinecap="round" strokeLinejoin="round" d="M22 6l-10 7L2 6"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#161e2e] to-[#101624] text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand & Social */}
        <div>
          <div className="flex items-center mb-4">
            <span className="text-blue-400 mr-2 text-2xl">&lt;&gt;</span>
            <span className="font-bold text-lg">
              Career<span className="text-blue-400">Craft</span>
            </span>
          </div>
          <p className="text-gray-400 text-sm mb-6">
            Transforming ideas into exceptional digital experiences with cutting-edge technology and innovative solutions.
          </p>
          <div className="flex space-x-3">
            <a href="#" aria-label="Instagram" className="bg-[#23272f] hover:bg-blue-600 rounded-full p-2 transition-colors">
              <InstagramIcon className="w-5 h-5 text-gray-300" />
            </a>
            <a href="#" aria-label="Twitter" className="bg-[#23272f] hover:bg-blue-600 rounded-full p-2 transition-colors">
              <TwitterIcon className="w-5 h-5 text-gray-300" />
            </a>
            <a href="#" aria-label="LinkedIn" className="bg-[#23272f] hover:bg-blue-600 rounded-full p-2 transition-colors">
              <LinkedinIcon className="w-5 h-5 text-gray-300" />
            </a>
            <a href="#" aria-label="GitHub" className="bg-[#23272f] hover:bg-blue-600 rounded-full p-2 transition-colors">
              <GithubIcon className="w-5 h-5 text-gray-300" />
            </a>
          </div>
        </div>
        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/about" className="hover:text-white transition">About Us</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact Us</a></li>
            <li><a href="/team" className="hover:text-white transition">FAQs</a></li>
            <li><a href="/faqs" className="hover:text-white transition">Sign In</a></li>
          </ul>
        </div>
        {/* Our Services */}
        <div>
          <h4 className="font-bold mb-4 text-lg">Our Services</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white transition">Web Development</a></li>
            <li><a href="#" className="hover:text-white transition">Mobile Applications</a></li>
            <li><a href="#" className="hover:text-white transition">UI/UX Design</a></li>
            <li><a href="#" className="hover:text-white transition">Cloud Solutions</a></li>
            <li><a href="#" className="hover:text-white transition">Tech Consulting</a></li>
          </ul>
        </div>
        {/* Newsletter */}
        <div>
          <h4 className="font-bold mb-4 text-lg">Stay Updated</h4>
          <p className="text-gray-400 text-sm mb-4">
            Subscribe to our newsletter for the latest updates and insights
          </p>
          <form className="flex">
            <div className="relative flex-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                <MailIcon className="w-5 h-5" />
              </span>
              <input
                type="email"
                required
                placeholder="Your email address"
                className="pl-10 pr-2 py-2 rounded-l-md bg-[#23272f] text-gray-200 border border-[#23272f] focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md font-medium transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
