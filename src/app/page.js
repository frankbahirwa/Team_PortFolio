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
    </>
  );
}
