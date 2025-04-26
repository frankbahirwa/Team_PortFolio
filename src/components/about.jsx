import Image from 'next/image';

const About = () => {
  return (
    <div className="bg-white">
      {/* First Section */}
      <section className="container mx-auto px-6 lg:mx-52 py-12 flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2">
          <Image
            src="/images/Frame.jpg"
            width={550}
            height={400}
            objectFit="cover"
            alt="Team meeting"
            className="shadow-lg max-w-full"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl text-gray-500 font-bold mb-4">
            We Are <span className="text-blue-600">Us</span>
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Welcome to our digital creative space — where innovation meets functionality...
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-6 lg:mx-52 py-12 flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2">
          <h3 className="text-3xl font-bold mb-4 text-gray-800">Our Skills</h3>
          <p className="text-gray-600 mb-6">
            Let's bring your ideas to life and make something exceptional together.
          </p>
          <div className="space-y-6">
            {/* Skill Bars */}
            {[
              { skill: "Web Design", percentage: "85%" },
              { skill: "Virtual Magic", percentage: "90%" },
              { skill: "Machine Learning", percentage: "70%" },
            ].map(({ skill, percentage }) => (
              <div key={skill}>
                <div className="text-sm font-medium text-gray-700 mb-1">{skill}</div>
                <div className="relative w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-blue-600 h-3 rounded-full transition-all duration-500 ease-in-out"
                    style={{ width: percentage }}
                  ></div>
                  <span
                    className="absolute top-[-20px] text-sm font-medium text-gray-700"
                    style={{ left: percentage, transform: "translateX(-50%)" }}
                  >
                    {percentage}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src="/images/Frame.jpg"
            width={550}
            height={400}
            objectFit="cover"
            alt="Team meeting"
            className="shadow-lg max-w-full"
          />
        </div>
      </section>
    </div>
  );
};

export default About;