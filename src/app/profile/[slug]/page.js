import { notFound } from "next/navigation";

const teamMembers = [
  {
    slug: "baraka",
    name: "Baraka",
    title: "Frontend Developer",
    description: "Connect with job opportunities that align with your skills.",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
  },
  {
    slug: "alice",
    name: "Alice",
    title: "Creative Designer",
    description: "A creative designer ready to transform ideas into visuals.",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
  },
];

export default function ProfilePage({ params }) {
  const { slug } = params;
  const member = teamMembers.find((m) => m.slug === slug);

  if (!member) return notFound();

  return (<>
  <div className="min-h-screen bg-white text-black py-12 px-6">
  <center>
    <div className="justify-center w-1/2 text-center align-middle">
      <h2 className="text-4xl font-bold mb-4">About Me</h2>
      <p className="text-gray-700 mb-6 text-center">
        {member.description}
      </p>
    </div>
  </center>

  {/* Image and Content side-by-side */}
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center mt-10">
    
    {/* Left: Profile Image */}
    <div className="w-full md:w-1/2">
      <img
        src={member.image}
        alt="Profile Photo"
        className="rounded-lg shadow-lg w-full h-[400px] object-cover"
      />
    </div>

    {/* Right: Text Content */}
    <div className="w-full md:w-1/2">
      <h3 className="text-2xl text-blue-500 font-semibold">{member.name}</h3>
      <p className="text-sm mb-2 text-gray-600">{member.title}</p>

      <p className="mb-4 text-gray-800">
        Hello! {member.name}, a self-taught & award-winning Digital Designer & Developer with over five years work experience. I started in my children's room, got pro at renowned digital agencies... Now I'm based in USA, working for Apple.
      </p>

      <div className="flex gap-4 mb-6">
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Download CV</button>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <p className="font-semibold text-gray-900">5 Years Job</p>
          <p className="text-sm text-gray-600">Experience</p>
        </div>
        <div>
          <p className="font-semibold text-gray-900">500+ Projects</p>
          <p className="text-sm text-gray-600">Completed</p>
        </div>
        <div>
          <p className="font-semibold text-gray-900">Freelance</p>
          <p className="text-sm text-gray-600">Available</p>
        </div>
        <div>
          <p className="font-semibold text-gray-900">Support</p>
          <p className="text-sm text-gray-600">24/7</p>
        </div>
      </div>
    </div>
  </div>
</div> 
      <div>
              <h3 className=" flex mb-4 justify-center text-2xl text-orange-500 font-semibold">GIT status</h3>
              <div className='w-full h-36 bg-slate-300'>
              </div>
          </div>
    </>
  );
}
