import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Card() {
  const imageData = [
    {
      imageLink:
        'https://images.pexels.com/photos/5989925/pexels-photo-5989925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      discription:
        'Connect with job opportunities that align with your skills, experience, and goals — instantly.',
      title: 'Smart Job Matching',
    },
    {
      imageLink:
        'https://images.pexels.com/photos/6476783/pexels-photo-6476783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      discription:
        'Connect with job opportunities that align with your skills, experience, and goals — instantly.',
      title: 'Smart Job Matching',
    },
    {
      imageLink:
        'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      discription:
        'Connect with job opportunities that align with your skills, experience, and goals — instantly.',
      title: 'Smart Job Matching',
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 py-10">
      {imageData.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-[320px] hover:shadow-xl transition-shadow duration-300"
        >
          {/* Image section */}
          <div className="relative h-[200px] w-full">
            <Image
              src={item.imageLink}
              alt={item.title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Text section */}
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-1">
              <span className="text-gray-900">{item.title.split(' ')[0]} </span>
              <span className="text-blue-600">{item.title.split(' ').slice(1).join(' ')}</span>
            </h2>

            <p className="text-gray-600 mb-6">{item.discription}</p>

            <a
              href="#"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group"
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
