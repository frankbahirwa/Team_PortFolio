import Image from "next/image";
import About from "@/components/about";
import imag from '../../public/images/Frame.jpg';
import left from '../../public/images/left.png';
import Card from "@/components/card";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="">
        <div className="absolute inset-0 md:h-full">
          <Image
            src={imag}
            alt="Group of people working together"
            layout="fill"
            objectFit="cover"
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
      <section>
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
      </section>
      
      {/* Image & Stats Section */}

<section className="bg-white py-12 flex justify-center content-center gap-20">
  <div className="w-96">
      <img src={left.src} />
  </div>
  <div className="space-y-6 w-md content-center align-middle">
    <h1 className="text-black font-bold text-4xl">
      Career Development<br/> <span className="text-[#4477F6]">& Resources Hub</span> 
    </h1>
    <p className="text-lg text-gray-800">Facilitates messaging, interview scheduling,and updates between candidates and employers.</p>
    <p className="text-lg text-gray-800">Allows companies to showcase their culture, mission, and benefits through customized profiles.</p>
    <div>
      
    </div>
  </div>
</section>


     <section className="bg-[#EFEEEE] px-12 py-11">
     <div className="text-lg text-gray-800">
      <h1 className="align-middle font-semibold"><span className="text-5xl font-bold text-[#4477F6]">//</span> Our Service </h1>
      <div className="flex gap-5">
        <h2 className="text-4xl font-bold">Best Of Our <span className="text-[#4477F6]">Services</span></h2>
        </div>

        <Card />
      </div>
     </section>

     
     
           {/* Our Skills Section */}
           <section
             className="bg-white container mx-auto py-12 flex flex-col md:flex-row items-center gap-8 px-6 sm:px-1 md:px-1 lg:px-28"
           >
             <div className="md:w-1/2 w-full order-2 md:order-1">
               <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">Our Skills</h3>
               <p className="text-gray-600 mb-6 text-sm sm:text-base">
                 Let's bring your ideas to life and make something exceptional, together.
               </p>
               <div className="space-y-6">
                 {/* Web Design Skill Bar */}
                 <div>
                   <div className="text-sm font-medium text-gray-700 mb-1">Web Design</div>
                   <div className="relative flex items-center w-full bg-gray-300 rounded-full h-1">
                     <div
                       className="bg-green-700 blur-[2.9px] h-1 rounded-full transition-all duration-500 ease-in-out"
                       style={{ width: '85%' }}
                     ></div>
                     <span
                       className="absolute top-[-20px] text-xs sm:text-sm font-medium text-gray-700"
                       style={{ left: '85%', transform: 'translateX(-50%)' }}
                     >
                       85%
                     </span>
                   </div>
                 </div>
                 {/* Virtual Magic Skill Bar */}
                 <div>
                   <div className="text-sm font-medium text-gray-700 mb-1">Virtual Magic</div>
                   <div className="relative flex items-center w-full bg-gray-300 rounded-full h-1">
                     <div
                       className="bg-green-700 blur-[2.9px] h-1 rounded-full transition-all duration-500 ease-in-out"
                       style={{ width: '60%' }}
                     ></div>
                     <span
                       className="absolute top-[-20px] text-xs sm:text-sm font-medium text-gray-700"
                       style={{ left: '60%', transform: 'translateX(-50%)' }}
                     >
                       60%
                     </span>
                   </div>
                 </div>
                 {/* Machine Learning Skill Bar */}
                 <div>
                   <div className="text-sm font-medium text-gray-700 mb-1">Machine Learning</div>
                   <div className="relative flex items-center w-full bg-gray-300 rounded-full h-1">
                     <div
                       className="bg-green-700 blur-[2.9px] h-1 rounded-full transition-all duration-500 ease-in-out"
                       style={{ width: '40%' }}
                     ></div>
                     <span
                       className="absolute top-[-20px] text-xs sm:text-sm font-medium text-gray-700"
                       style={{ left: '40%', transform: 'translateX(-50%)' }}
                     >
                       40%
                     </span>
                   </div>
                 </div>
     
                  {/* last one */}
     
                  <div>
                   <div className="text-sm font-medium text-gray-700 mb-1">Machine Learning</div>
                   <div className="relative flex items-center w-full bg-gray-300 rounded-full h-1">
                     <div
                       className="bg-green-700 blur-[2.9px] h-1 rounded-full transition-all duration-500 ease-in-out"
                       style={{ width: '69%' }}
                     ></div>
                     <span
                       className="absolute top-[-20px] text-xs sm:text-sm font-medium text-gray-700"
                       style={{ left: '69%', transform: 'translateX(-50%)' }}
                     >
                       69%
                     </span>
                   </div>
                 </div>
     
               </div>
             </div>
             <div className="md:w-1/2 w-full order-1 md:order-2">
               <div className="relative w-full h-64 sm:h-72 md:h-80">
                 <Image
                   src={imag}
                   alt="Team collaboration"
                   layout="fill"
                   objectFit="cover"
                   className="rounded-xs shadow-lg"
                 />
               </div>
             </div>
           </section>
     
     
     
         <section className="relative h-96 flex items-center justify-center overflow-hidden">
           {/* Background Video */}
           <video
             className="absolute top-0 left-0 w-full h-full object-cover"
             autoPlay
             loop
             muted
             playsInline
           >
             <source
               src="https://videos.pexels.com/video-files/855555/855555-hd_1920_1080_24fps.mp4"
               type="video/mp4"
             />
             Your browser does not support the video tag.
           </video>
     
           {/* Overlay for better text readability */}
           <div className="absolute inset-0 bg-black opacity-50"></div>
     
           {/* Text Content */}
           <div className="relative z-10 text-center text-white">
             <h3 className="text-3xl font-bold">
               We Are Always Ready To Make Your <span className="text-blue-400">Work Perfect</span>
             </h3>
           </div>
         </section>
     
     
    </>
  );
}
