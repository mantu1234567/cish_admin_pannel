import { useState } from "react";

const AdminLoginApp = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = () => {
    onLogin(username, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 sm:p-6">
      <div className="bg-white border-2 border-[#1B5E20] shadow-xl rounded-xl w-full max-w-5xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Left Section - Image and Logo */}
          <div className="md:w-1/2 flex flex-col items-center justify-center pl-3 pt-3 pr-3 space-y-6">
            <div className="flex items-center space-x-4">
              <img
                src="public/ICAR.svg"
                alt="ICAR Logo"
                className="h-[60px] w-[65px] rounded-full"
              />
              <div className="flex flex-col text-center md:text-left">
                <div className="text-xl font-bold text-gray-800">
                  भा.कृ.अनु.प.-केन्द्रीय उपोष्ण बागवानी संस्थान
                </div>
                <div className="text-sm text-gray-600">
                  ICAR-CENTRAL INSTITUTE FOR SUBTROPICAL HORTICULTURE
                </div>
              </div>
            </div>
            {/* The provided image shows an ICAR building.  */}
            <div className="w-full">
              <img
                src="public/Rectangle 986.svg"
                alt="ICAR Building"
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Right Section - Login Form */}
          <div className="md:w-1/2 bg-white flex flex-col items-center justify-center p-6 mb-4">
            <h1 className="text-5xl font-bold text-[#1B5E20] mb-2">Welcome</h1>
            <p className="text-xl text-gray-800 mb-6 text-center">
              Please Login To Admin Dashboard
            </p>

            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B5E20] text-gray-800 placeholder-gray-400"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B5E20] text-gray-800 placeholder-gray-400"
            />

            <div className="flex flex-col sm:flex-row justify-between items-center w-full mb-6 gap-2 mt-4">
              <label className="flex items-center space-x-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  id="remember"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 text-[#1B5E20] border-gray-300 rounded focus:ring-[#1B5E20]"
                />
                <span className="text-base text-[#1B5E20]">Remember Me</span>
              </label>

              <button
                type="button"
                className="text-base text-[#1B5E20] hover:underline focus:outline-none"
              >
                Forgotten Your Password?
              </button>
            </div>

            <button
              type="button"
              className="w-full bg-[#1B5E20] text-white py-4 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-[#1B5E20] focus:ring-offset-2 font-medium transition duration-200"
              onClick={handleSubmit}
            >
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginApp;
