import { useState } from "react";
import StaffTab from "./StaffTab";
import SubStaffTab from "./SubStaffTab";
import StaffMembersTab from "./StaffMembersTab";

export default function StaffPage() {
  const [activeTab, setActiveTab] = useState("staff");

  const tabs = [
    { id: "staff", label: "Staff" },
    { id: "substaff", label: "Sub Staff" },
    { id: "members", label: "Staff Members" },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Tabs */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex bg-white shadow-md rounded-lg overflow-hidden">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 text-sm font-semibold transition-colors duration-300
                ${
                  activeTab === tab.id
                    ? "bg-green-600 text-white"
                    : "text-gray-700 hover:bg-green-50"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="bg-white shadow-md rounded-lg p-6">
        {activeTab === "staff" && <StaffTab />}
        {activeTab === "substaff" && <SubStaffTab />}
        {activeTab === "members" && <StaffMembersTab />}
      </div>
    </div>
  );
}
