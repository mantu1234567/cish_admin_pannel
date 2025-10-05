import { useState } from "react";
import { VarietiesProvider } from "../context/ApiContext";
import HomePageBanner from "./HomePageBanner";
import DirectorDesk from "./DirectorDesk";
function DashboardPage() {
  const [activeTab, setActiveTab] = useState("banner");

  const tabs = [
    { id: "banner", label: "Homepage Banner" },
    { id: "desk", label: "Director Desk" },
  ];

  return (
    <VarietiesProvider>
      <div className="min-h-screen">
        {/* Tabs */}
        <div className="flex justify-center mb-4 mt-4">
          <div className="inline-flex bg-white shadow-md overflow-hidden  px-2 py-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 text-sm font-semibold transition-colors duration-300
                     ${
                       activeTab === tab.id
                         ? "bg-[#1B5E20] text-white"
                         : "text-gray-700 hover:bg-green-50"
                     }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        {/* Tab Content */}
        {activeTab === "banner" && <HomePageBanner />}
        {activeTab === "desk" && <DirectorDesk />}
      </div>
    </VarietiesProvider>
  );
}
export default DashboardPage;
