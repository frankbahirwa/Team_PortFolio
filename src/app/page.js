import Image from "next/image";
import About from "@/components/about";
import imag from '../../public/images/Frame.jpg';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-screen w-full">
        <div className="absolute inset-0">
          <Image
            src={imag}
            alt="Group of people working together"
            layout="fill"
            objectFit="cover"
            className="opacity-50"
            priority
          />
        </div>

        <div className="relative z-10 container mx-auto flex flex-col justify-center min-h-screen px-4 sm:px-6 lg:px-8 text-white">
          <div className="mt-10 max-w-3xl lg:mt-24">
            <div className="flex items-center gap-2">
              <p className="text-blue-500 text-4xl sm:text-5xl">//</p>
              <p className="text-lg sm:text-xl md:text-2xl font-bold capitalize">
                Experience the best way to connect talent with opportunity
              </p>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mt-6 leading-tight capitalize">
              Where Top Talent <br /> Meets Leading Employers
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg">
              Your bridge between talent and opportunity is finally here. <br />
              Designed to empower job seekers and simplify for companies.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-semibold">
                Sign in now
              </button>
              <button className="underline text-white hover:text-blue-300">
                View all roles
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 w-full bg-blue-600 text-white py-3">
          <div className="flex flex-wrap justify-center gap-3 text-xs sm:text-sm font-semibold">
            <a href="#" className="hover:underline">JOB MATCHING ENGINE</a>
            <span>|</span>
            <a href="#" className="hover:underline">TALENT MARKETPLACE</a>
            <span>|</span>
            <a href="#" className="hover:underline">EMPLOYER BRANDING PLATFORM</a>
          </div>
        </div>
      </div>

      {/* Image & Stats Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 px-4">
          {/* Text Section */}
          <div className="text-center lg:text-left flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
              Career Development & Resources Hub
            </h2>
            <p className="mt-4 text-gray-600">
              Facilitates messaging, interview scheduling, and updates between candidates and employers.
              Always showcase their culture, mission, and benefits through customized profiles.
            </p>
            <div className="mt-6 flex justify-center lg:justify-start gap-6">
              <div>
                <p className="text-2xl font-bold text-blue-900">1000+</p>
                <p className="text-gray-600">Started working</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-900">1000+</p>
                <p className="text-gray-600">On waiting list</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-900">1000+</p>
                <p className="text-gray-600">Registered</p>
              </div>
            </div>
          </div>

          {/* Image Collage */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0">
            <div className="absolute inset-0 bg-gray-200 rounded-full" />
            {["top-0 left-0", "top-0 right-0", "bottom-0 left-0", "bottom-0 right-0"].map((pos, idx) => (
              <div key={idx} className={`absolute ${pos} w-1/2 h-1/2`}>
                <Image
                  src={imag}
                  alt={`Team ${idx + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-200 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-10">
            <div className="flex items-center">
              <p className="text-4xl sm:text-5xl text-blue-500">//</p>
              <h2 className="text-2xl sm:text-3xl font-bold ml-2">Our Services</h2>
            </div>
            <button className="mt-4 sm:mt-0 bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full font-semibold">
              Join Now
            </button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {[1, 2, 3].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="w-full h-52">
                  <img
                    src={`/images/frank.jpg`}
                    alt="Service"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">
                    {item === 1 ? "Smart Job Matching" : item === 2 ? "Backend Systems" : "Web Design"}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Connect with job opportunities that align with your skills, experience, and goals — instantly.
                  </p>
                  <a href="#" className="text-blue-500 font-semibold flex items-center hover:underline">
                    Learn More
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
