import Image from "next/image";
import About from "@/components/about";

export default function Home() {
  return (
    <>
    <div className="relative min-h-screen w-full">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/frame.jpg" // Replace with your image path
          alt="Group of people working together"
          layout="fill"
          objectFit="cover"
          className="opacity-50 h-screen"
        />
      </div>

      {/* Content Section */}
      <div className="relative w-4/4 z-10 conainer mx-auto flex flex-col min-h-screen text-white px-6 py-10 sm:px-8 sm:py-12 md:px-12 md:py-16 lg:px-16 lg:py-20">
        <div className="w-3/4 mt-10 lg:mx-32 ">
          <div className=" flex gap-2">
            <p className="text-blue-500 text-6xl">//</p>
          <p className="text-white lg:mx-5 mt-3 lg:text-2xl text-lg sm:text-sm font-bold mb-2 sm:mb-3 md:mb-4 capitalize">
             Experience the best way to connect talent with opportunity
          </p>
          </div> <br />
          <h1 className="text-4xl lg:text-7xl sm:text-4xl md:text-5xl font-bold leading-tight capitalize">
            Where Top Talent <br /> Meets Leading <br /> Employers
          </h1>
          <p className="text-base sm:text-lg md:text-lg mt-3 sm:mt-4 md:mt-5">
            Your bridge between talent and opportunity is finally here. <br />
            Designed to empower job seekers and simplify for <br /> companies.
          </p>

          {/* Buttons */}
          <div className="mt-4 sm:mt-6 md:mt-8 flex gap-10 space-x-3 sm:space-x-4">
            <button className="bg-blue-500 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-full font-semibold text-sm sm:text-base hover:bg-blue-600">
              Sign in now
            </button>
            <button className="text-white underline text-sm sm:text-base hover:text-blue-300">
              View all roles
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 w-full bg-blue-600 text-white py-3 sm:py-4">
        <div className="flex justify-center space-x-4 sm:space-x-8">
          <a href="#" className="text-xs sm:text-sm font-semibold hover:underline">
            JOB MATCHING ENGINE
          </a>
          <span className="text-white">|</span>
          <a href="#" className="text-xs sm:text-sm font-semibold hover:underline">
            TALENT MARKETPLACE
          </a>
          <span className="text-white">|</span>
          <a href="#" className="text-xs sm:text-sm font-semibold hover:underline">
            EMPLOYER BRANDING PLATFORM
          </a>
        </div>
      </div>
    </div>
    <div className="min-h-screen flex justify-center gap-64 items-center  bg-gray-100">
      <div className="flex flex-col md:flex-row items-center max-w-4xl mx-auto p-6">
        {/* Left Section - Image Collage */}
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          <div className="absolute inset-0 bg-gray-200 rounded-full"></div>
          
          {/* Top Left Image */}
          <div className="absolute top-0 left-0 w-32 h-32 md:w-40 md:h-40">
            <Image
              src="/images/frank.jpg"
              alt="Team 1"
              layout="fill"
              objectFit="cover"
              className="rounded-tl-full"
            />
          </div>
          
          {/* Top Right Image */}
          <div className="absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40">
            <Image
              src="/images/frank.jpg"
              alt="Handshake"
              layout="fill"
              objectFit="cover"
              className="rounded-tr-full"
            />
          </div>
          
          {/* Bottom Left Image */}
          <div className="absolute bottom-0 left-0 w-32 h-32 md:w-40 md:h-40">
            <Image
              src="/images/frank.jpg"
              alt="Laptop"
              layout="fill"
              objectFit="cover"
              className="rounded-bl-full"
            />
          </div>
          
          {/* Bottom Right Image */}
          <div className="absolute bottom-0 right-0 w-32 h-32 md:w-40 md:h-40">
            <Image
              src="/images/frank.jpg"
              alt="Meeting"
              layout="fill"
              objectFit="cover"
              className="rounded-br-full"
            />
          </div>
        </div>

        {/* Right Section - Text and Stats */}
        <div className="mt-6 md:mt-0 md:ml-8 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900">
            Career Development & Resources Hub
          </h1>
          <p className="mt-4 text-gray-600">
            Facilitates messaging, interview scheduling, and updates between candidates and employers.
            Always showcase their culture, mission, and benefits through customized profiles.
          </p>
          <div className="mt-6 flex justify-center md:justify-start space-x-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-900">1000+</p>
              <p className="text-gray-600">Started working</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-900">1000+</p>
              <p className="text-gray-600">On waiting list</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-900">1000+</p>
              <p className="text-gray-600">Registered</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* services  */}
    <div className=" bg-gray-200">
      {/* Header Section */}
      <header className=" text-black py-6">
        <div className="container mx-auto flex justify-between items-center px-6">
          <div className="flex items-center">
            <div className="flex">
              <p className="text-5xl text-blue-500">//</p>
              <p className="text-2xl mt-2 font-bold text-black mr-2">Our services</p>
               </div> <br />
            {/* <h1 className="text-4xl font-bold">Best Of Our Services</h1> */}
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300">
            Join Now
          </button>
        </div>
      </header>

      {/* Services Section */}
      <section className="container mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Service Card 1 */}
          <div className="bg-white lg:w-3/3 rounded-2xl shadow-lg overflow-hidden">
            <div className="w-full h-64">
              <img
                src="/images/frank.jpg"
                alt="Professional in a suit"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-blue-600 mb-2">Smart Job Matching</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Connect with job opportunities that align with your skills, experience, and goals — instantly.
              </p>
              <a href="#" className="text-blue-500 font-semibold flex items-center hover:underline">
                Learn More
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Service Card 2 */}
          <div className="bg-white lg:w-3/3  rounded-2xl shadow-lg overflow-hidden">
            <div className="w-full h-64">
              <img
                src="/images/frank.jpg"
                alt="Professional in a suit"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-blue-600 mb-2">Smart Job Matching</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Connect with job opportunities that align with your skills, experience, and goals — instantly.
              </p>
              <a href="#" className="text-blue-500 font-semibold flex items-center hover:underline">
                Learn More
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Service Card 3 */}
          <div className="bg-white lg:w-3/3  rounded-2xl shadow-lg overflow-hidden">
            <div className="w-full h-64">
              <img
                src="/images/frank.jpg"
                alt="Professional in a suit"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-blue-600 mb-2">Smart Job Matching</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Connect with job opportunities that align with your skills, experience, and goals — instantly.
              </p>
              <a href="#" className="text-blue-500 font-semibold flex items-center hover:underline">
                Learn More
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>

                    {/* Service Card 3 */}
                    <div className="bg-white lg:w-3/3 rounded-2xl shadow-lg overflow-hidden">
            <div className="w-full h-64">
              <img
                src="/images/frank.jpg"
                alt="Professional in a suit"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-blue-600 mb-2">Smart Job Matching</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Connect with job opportunities that align with your skills, experience, and goals — instantly.
              </p>
              <a href="#" className="text-blue-500 font-semibold flex items-center hover:underline">
                Learn More
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
       
        
      </section>
    </div>

    <About />
    </>
  );
}