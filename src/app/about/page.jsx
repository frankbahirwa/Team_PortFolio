import imag from '../../../public/images/Frame 37.jpg'
import Image from 'next/image';
const About = () =>{
    return(
        <div className="bg-white">

<section className="relative h-62 flex items-center justify-center">
        {/* Background Image using Next.js Image */}
        <Image
          src={imag}
          alt="Team meeting"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Text Content */}
      <div className="relative z-10 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">
        <span className="text-blue-400"> About </span> Us
        </h2>
        <p className="text-lg mb-6 max-w-md mx-auto">
          Make the best welcoming digital experience — where crafting modern web & mobile experiences to fuel your business growth starts.
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
          Learn More
        </button>
      </div>
    </section>



    <section
        className="container mx-auto py-12 flex flex-col md:flex-row items-center gap-8 px-6 sm:px-1 md:px-1 lg:px-28"
      >
        <div className="md:w-1/2 w-full">
          <div className="relative w-full h-64 sm:h-72 md:h-80">
            <Image
            src="/images/1.jpeg"
              alt="Team meeting"
              layout="fill"
              objectFit="cover"
              className="rounded-xs shadow-lg"
            />
          </div>
        </div>
        <div className="md:w-1/2 w-full">
          <h2 className="text-3xl text-gray-500 sm:text-4xl font-bold mb-4">
            About <span className="text-blue-600">Us</span>
          </h2>
          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            Welcome to our digital creative space — where innovation meets functionality. We specialize in crafting modern web and mobile experiences, offering end-to-end development, sleek UI/UX design, and smart solutions tailored to your unique goals.
          </p>
          <button className="bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-full hover:bg-blue-700 text-sm sm:text-base">
            Learn More
          </button>
        </div>
      </section>

      {/* Our Skills Section */}
      <section
        className="container mx-auto py-12 flex flex-col md:flex-row items-center gap-8 px-6 sm:px-1 md:px-1 lg:px-28"
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
              src="/images/2.jpeg"
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



        </div>
    )
}

export default About;