import Image from "next/image";
import About from "@/components/about";
import imag from '../../public/images/Frame.jpg';
import left from '../../public/images/left.jpg';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section>
        <div className="absolute inset-0 md:h-full">
          <Image
            src={imag}
            alt="Group of people working together"
            layout="fill"
            objectFit="cover"
            className="opacity-50"
            priority
          />
        </div>

        <div className="relative z-10 py-10 px-22 text-white">
          <div className="space-y-5 w-2/3">  
          <p>
            <span className="text-4xl font-bold text-[#4477F6]">//</span> 
           <span className="text-lg text-gray-300">Experience the best way to connect talent with opportunity</span> 
         
            </p>
            <h1 className="text-6xl  font-black">
            Where Top Talents  Meets Leading  Employers
            </h1>

            <p className="text-lg font-light text-gray-300">
            Your bridge between talent and opportunity is finally here.<br /> Designed to empower job seekers and <br /> simplify hiring for companies.
            </p>
            <div>
              <button className="bg-amber-600  text-white py-3 px-10 rounded-full font-mono hover:cursor-pointer">
                Join Now
              </button>
              <button className="text-white py-3 px-6 ml-10 rounded-full font-medium hover:text-amber-600 hover:cursor-pointer">
               <u>Learn More</u> 
              </button>
            </div>
        </div>
        </div>
      </section>
      <br /> 
      <div className=" bottom-0 w-full bg-[#4477F6] text-white px-10 py-3">
         <ul className="flex  text-lg font-bold space-x-22 justify-center">
          <span className="font-black">|</span>  
          <li>Job Matching Engine </li>
          <span>|</span>
          <li>Talent Marketplace </li>
          <span>|</span>
          <li>Employer Branding Platform</li>
          <span>|</span>
         </ul>
        </div>
      {/* Image & Stats Section */}


      <section className="bg-gray-100 py-12 px-16">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 px-4">
          {/* Text Section */}
          <div className="text-center lg:text-left flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            <span className="text-black">Career Development &</span>   <br /> Resources Hub
            </h2>
            <p className="mt-4 text-gray-600 w-3/4">
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
            <div className="absolute" />
           <img
           className="w-full"
              src={left.src}
              alt="no image found"
              />
          </div>
        </div>
      </section>

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
