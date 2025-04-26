import React from 'react';

const TeamPage = () => {
  const teamMembers = Array(6).fill({
    name: "Baraka",
    description: "Connect with job opportunities that align with your skills.",
    image: "/images/frank.jpg", // Placeholder image
  });

  const handleConnect = (name) => {
    alert(`Connecting with ${name}...`); // Placeholder for connect functionality
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-blue-600 text-white text-center py-6">
        <h1 className="text-4xl font-bold">Meet the Team</h1>
      </div>

      {/* Team Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-300 to-transparent opacity-50"></div>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h2 className="text-xl font-semibold text-orange-500">{member.name}</h2>
                <p className="text-gray-600 mt-2">{member.description}</p>
                {/* Connect Button */}
                <button
                  onClick={() => handleConnect(member.name)}
                  className="mt-4 flex items-center justify-center mx-auto bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
                >
                  <span>Connect</span>
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Text */}
      <div className="text-center py-8 px-4">
        <p className="text-gray-700 max-w-3xl mx-auto">
          At CareerCraft, our diverse team of designers, developers, and strategists work together to bring ideas to life. With a shared passion for innovation and excellence, we build digital solutions that make a lasting impact.
        </p>
      </div>
    </div>
  );
};

export default TeamPage;