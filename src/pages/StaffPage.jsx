import { useState } from "react";
import Staff from "./Staff";
import SubStaff from "./SubStaff";
import StaffMembers from "./StaffMembers";
import { VarietiesProvider } from "../context/ApiContext";

export default function StaffPage() {
  const [activeTab, setActiveTab] = useState("staff");

  const tabs = [
    { id: "staff", label: "Staff" },
    { id: "substaff", label: "Departement Staff" },
    { id: "members", label: "Staff Members" },
  ];

  return (
    <VarietiesProvider>
      <div className="min-h-screen">
        {/* Tabs */}
        <div className="flex justify-center mb-4 mt-4">
          <div className="inline-flex bg-white shadow-md overflow-hidden">
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
          {activeTab === "staff" && <Staff />}
          {activeTab === "substaff" && <SubStaff />}
          {activeTab === "members" && <StaffMembers />}
      </div>
    </VarietiesProvider>
  );
}
