import { useState } from "react";

const AdminLoginApp = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = () => {
    onLogin(username, password);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-white p-6">
      <div className="flex flex-col items-center md:items-start space-y-6 mb-10 md:mb-0 md:mr-8">
        <div className="flex items-center">
          <img
            src="public/ICAR.svg"
            alt="ICAR Logo"
            className="h-[60px] w-[65px]"
          />
          <div className="text-center md:text-left">
            <div className="font-noto text-[22px] text-[#000000] leading-[156.5%]">
              भा.कृ.अनु.प.-केन्द्रीय उपोष्ण बागवानी संस्थान
            </div>
            <div className="font-noto text-[14px] text-[#000000] leading-[156.5%]">
              ICAR-CENTRAL INSTITUTE FOR SUBTROPICAL HORTICULTURE
            </div>
          </div>
        </div>

        <div>
          <img src="public/Rectangle 986.svg" alt="ICAR Building" />
        </div>
      </div>

      <div className="w-full max-w-md">
        <h1 className="font-noto text-[50px] text-[#1B5E20] leading-[156.5%] font-bold mb-4 text-center">
          Welcome
        </h1>
        <p className="font-noto text-[20px] text-[#000000] leading-[156.5%] mb-6 text-center">
          Please Login To Admin Dashboard
        </p>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-4 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-[#9D9D9D] placeholder-gray-400"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-4 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-[#9D9D9D] placeholder-gray-400"
        />

        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-2">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="remember"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
            />
            <span className="font-noto text-[20px] text-[#1B5E20] leading-[156.5%]">
              Remember Me
            </span>
          </label>

          <button
            type="button"
            className="font-noto text-[20px] text-[#1B5E20] leading-[156.5%] hover:text-green-800"
          >
            Forgotten Your Password?
          </button>
        </div>

        <button
          type="button"
          className="w-full bg-[#1B5E20] text-white py-3 px-4 rounded-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 font-medium font-noto text-[20px] leading-[156.5%]"
          onClick={handleSubmit}
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default AdminLoginApp;
