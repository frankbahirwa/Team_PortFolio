

const Contacts = () => {
    return (
      <>
    
      {/* my bg and the image willl be here */}
     <div className="" style="backgroundImage:`url(../)`">
     <div className=" bg-blue-300 min-h-screen flex flex-col items-center justify-center ">
          {/* contact section here */}
          <div className="text-center mb-4">
            <h1 className="text-white font-bold text-3xl ">Contact Us</h1>
            <p className="text-white font-semibold mt-2">
              Work with real, verified professionals and employers
            </p>
          </div>
  {/* the card with the form now */}
          <div className="flex  mb-18 bg-white shadow-xl rounded-lg w-3/4 max-w-5xl">
           
            <div className="bg-[#F3F3F3] rounded-tl-lg rounded-bl-lg  w-1/2 p-12 flex flex-col justify-center">

              <div className="flex items-center mb-6 ">
                <p className="text-2xl font-bold text-black">Get in </p>
                <p className="text-2xl font-bold text-blue-500 ml-2">touch</p>
              </div>
              <div className="space-y-6 ">
                <div className="flex items-start">
                  <img src="/images/Icon.png" alt="Location Icon" className="bg-blue-500 rounded-full w-10 h-10 mr-4 p-2" />
                  <div>
                    <p className="text-lg font-semibold text-black">Head Office</p>
                    <p className="text-sm text-gray-700">Rwanda, Kigali</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <img src="/images/Group 10.png" alt="Email Icon" className="bg-blue-500 rounded-full w-10 h-10 mr-4 p-2" />
                  <div>
                    <p className="text-lg font-semibold text-black">Email Us</p>
                    <p className="text-sm text-gray-700">example@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <img src="/images/Icon (2).png" alt="Phone Icon" className="bg-blue-500 rounded-full w-10 h-10 mr-4 p-2" />
                  <div>
                    <p className="text-lg font-semibold text-black">Contact Us</p>
                    <p className="text-sm text-gray-700">Phone:</p>
                    <ul className="ml-6 text-sm text-gray-700 mb-4">
                      <li>+250 7805734</li>
                      <li>+250 7805734</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 p-8 flex flex-col justify-center">
              <form className="space-y-6">
                <div>
                  <input type="text"placeholder="Names"className="w-full outline-none border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <input type="email"
                    placeholder="example@gmail.com"
                    className="w-full outline-none border border-gray-300 text-black rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <textarea
                    rows="4"
                    placeholder="example, hi"
                    className="w-full outline-none border text-black border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  ></textarea>
                </div>
  
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-8 py-2 rounded-full hover:bg-blue-600 transition duration-300"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
     </div>
      </>
    );
  };
  
  export default Contacts;
  