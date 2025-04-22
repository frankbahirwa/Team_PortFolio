import Image from "next/image";

export default function TeamCard({ name, github, avatar, bio, skills }) {
  return (
    <div className="bg-white border shadow-md rounded-2xl p-5 flex flex-col items-center text-center hover:shadow-lg transition">
      <Image
        src={avatar}
        alt={name}
        width={80}
        height={80}
        className="rounded-full mb-3"
      />
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 text-sm mb-2 hover:underline"
      >
        GitHub Profile
      </a>
      <p className="text-sm text-gray-600 mb-3">{bio}</p>
      <div className="flex flex-wrap justify-center gap-2 text-xs">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
