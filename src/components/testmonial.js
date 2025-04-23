import React, { useState, useEffect, useRef } from 'react';
import { FaStar } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const TestimonialCard = ({ rating, quote, name, title, image }) => {
  const stars = Array(5)
    .fill('')
    .map((_, index) => (
      <FaStar key={index} className={`text-yellow-500 ${index < rating ? '' : 'text-gray-400'}`} />
    ));

  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full md:w-96 flex-shrink-0">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          {stars}
          <span className="text-sm text-gray-600 ml-2">{rating}.0</span>
        </div>
      </div>
      <p className="text-gray-700 mb-4 italic">"{quote}"</p>
      <div className="flex items-center mt-4">
        <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h6 className="text-gray-800 font-semibold">{name}</h6>
          <p className="text-gray-500 text-sm">{title}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSlider = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const startAutoplay = () => {
    if (!intervalRef.current && testimonials.length > 1) {
      intervalRef.current = setInterval(nextSlide, 3000); // Adjust speed as needed
    }
  };

  const stopAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoplay();

    return () => stopAutoplay(); // Cleanup on unmount
  }, [testimonials.length]);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = sliderRef.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  const handleMouseEnter = () => {
    setIsHovering(true);
    stopAutoplay();
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    startAutoplay();
  };

  return (
    <div className="bg-blue-900 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-blue-200 mb-2">TESTIMONIALS</h2>
        <p className="text-blue-300 mb-8">Testimonials: Trusted by Our Clients</p>
        <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div
            ref={sliderRef}
            className="overflow-hidden scroll-smooth flex gap-8 pb-8"
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
          {testimonials.length > 1 && (
            <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between items-center pointer-events-none">
              <button
                onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)}
                className="bg-blue-700 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md focus:outline-none pointer-events-auto opacity-75 hover:opacity-100"
              >
                <FiChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)}
                className="bg-blue-700 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md focus:outline-none pointer-events-auto opacity-75 hover:opacity-100"
              >
                <FiChevronRight className="h-6 w-6" />
              </button>
            </div>
          )}
          {testimonials.length > 1 && (
            <div className="mt-8 flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`inline-block bg-blue-700 rounded-full w-3 h-3 cursor-pointer ${
                    currentIndex === index ? 'bg-blue-500' : ''
                  }`}
                ></button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonialsData = [
    {
      rating: 5,
      quote:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      name: 'Jenny Wilson',
      title: 'Owner, Furniture Store',
      image: 'https://via.placeholder.com/100/f0f0f0/808080?Text=JW',
    },
    {
      rating: 5,
      quote:
        'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
      name: 'Bessie Cooper',
      title: 'CEO, Car Rental App',
      image: 'https://via.placeholder.com/100/e0e0e0/606060?Text=BC',
    },
    {
      rating: 4,
      quote:
        'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?',
      name: 'Robert Fox',
      title: 'Marketing Manager',
      image: 'https://via.placeholder.com/100/d0d0d0/505050?Text=RF',
    },
    {
      rating: 5,
      quote:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      name: 'Eleanor Pena',
      title: 'Sales Director',
      image: 'https://via.placeholder.com/100/c0c0c0/404040?Text=EP',
    },
  ];

  return <TestimonialsSlider testimonials={testimonialsData} />;
};

export default TestimonialsSection;