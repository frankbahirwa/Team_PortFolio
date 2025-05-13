
 function Login() {
    return (
      <>
      <div className="relative bg-white">
      <div className="bg-gray-500 shadow-xl w-1/3 h-2/3 flex flex-rows items-center justify-center">
      <div className="min-h-screen flex flex-col md:flex-row ">
        {/* Left Section */}
        <div className="w-full md:w-1/2 bg-blue-600 text-white flex flex-col justify-center items-center p-8">
          <h1 className="text-3xl font-bold mb-4">  Welcome to Career Craft</h1>
          <p className="text-sm text-center max-w-md">
        
             Real skills. Real opportunities.
             Career Craft connects developers and recruiters through transparency, trust, and tech.
             Powered by ML and GitHub — where your work speaks louder than your résumé.
          </p>
          <button className="mt-6 px-6 py-2 border border-white rounded-full hover:bg-white hover:text-blue-600 transition">
            Know More
          </button>
        </div>
  
        {/* Right Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center bg-white p-8">
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Signin</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Enter Username ..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                placeholder="Enter Password ..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition font-semibold"
              >
                LOGIN
              </button>
            </form>
          </div>
        </div>
      </div>
      </div>
      </div>
      
      </>
    );
  }
export default Login