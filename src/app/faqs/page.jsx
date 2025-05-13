import { FaQuestionCircle } from "react-icons/fa";

export default function FAQ() {
  const questions = [
    {
      question: "What services does your team offer?",
      answer:
        "We provide web development, UI/UX design, mobile app development, SEO, and digital strategy consulting tailored to your business needs.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "The timeline varies based on the project scope, but most of our projects are completed within 4 to 8 weeks.",
    },
    {
      question: "What technologies do you specialize in?",
      answer:
        "We work with modern technologies like React, Next.js, Node.js, Flutter, Tailwind CSS, and various cloud platforms such as AWS and Firebase.",
    },
    {
      question: "Can you help us redesign our existing website?",
      answer:
        "Absolutely! We can analyze your current site and create a modern, responsive, and user-friendly design tailored to your goals.",
    },
    {
      question: "Do you provide post-launch support and maintenance?",
      answer:
        "Yes, we offer ongoing support, maintenance packages, and regular updates to ensure your product runs smoothly after launch.",
    },
    {
      question: "How do you handle client communication and updates?",
      answer:
        "We use tools like Slack, Trello, and email to maintain regular communication and provide weekly updates and deliverables.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-black font-bold text-center mb-2">
          Frequently Asked <span className="text-blue-600">Questions</span>
        </h2>
        <p className="text-center text-gray-600 mb-10">
          We collaborate with clients around the world and are comfortable managing projects
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {questions.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition-all duration-300">
              <div className="flex items-start space-x-4">
                <FaQuestionCircle className="text-blue-500 text-3xl mt-1" />
                <div>
                  <h3 className="font-semibold text-black text-lg">{item.question}</h3>
                  <p className="text-gray-600 mt-1">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
