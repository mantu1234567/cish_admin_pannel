import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar, { SidebarItem } from "./components/Sidebar";
import {
  LayoutDashboard,
  Megaphone,
  BookOpen,
  Cpu,
  Layers,
  Briefcase,
  Calendar,
  HelpCircle,
  Settings,
  LifeBuoy,
} from "lucide-react";

// Import page components
import DashboardPage from "./pages/DashboardPage.jsx";
import AnnouncementPage from "./pages/AnnouncementPage";
import ResearchPage from "./pages/ResearchPage";
import TechnologiesPage from "./pages/TechnologiesPage";
import VarietiesPage from "./pages/VarietiesPage";
import JobsTendersPage from "./pages/JobsTendersPage";
import EventsPage from "./pages/EventsPage";
import QueriesPage from "./pages/QueriesPage";
import MediaPage from "./pages/MediaPage";
import SettingsPage from "./pages/SettingsPage";
import HelpPage from "./pages/HelpPage";

function App() {
  return (
    <Router>
      <div className="flex justify-between">
        <div className="bg-[#1B5E20]">
          <Sidebar>
            <SidebarItem
              icon={<LayoutDashboard size={20} />}
              text="Dashboard"
              active
              alert
              to="/"
            />
            <SidebarItem
              icon={<Megaphone size={20} />}
              text="Announcement"
              alert
              to="/announcement"
            />
            <SidebarItem
              icon={<BookOpen size={20} />}
              text="Research"
              to="/research"
            />
            <SidebarItem
              icon={<Cpu size={20} />}
              text="Technologies"
              to="/technologies"
            />
            <SidebarItem
              icon={<Layers size={20} />}
              text="Varieties"
              to="/varieties"
            />
            <SidebarItem
              icon={<Briefcase size={20} />}
              text="Jobs & tenders"
              to="/jobs-tenders"
            />
            <SidebarItem
              icon={<Calendar size={20} />}
              text="Events"
              to="/events"
            />
            <SidebarItem
              icon={<HelpCircle size={20} />}
              text="Queries"
              to="/queries"
            />
            <SidebarItem
              icon={<Megaphone size={20} />}
              text="Media"
              to="/media"
            />
            <SidebarItem
              icon={<Settings size={20} />}
              text="Settings"
              to="/settings"
            />
            <SidebarItem icon={<LifeBuoy size={20} />} text="Help" to="/help" />
          </Sidebar>
        </div>
        <div className="w-full">
         
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/announcement" element={<AnnouncementPage />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/technologies" element={<TechnologiesPage />} />
            <Route path="/varieties" element={<VarietiesPage />} />
            <Route path="/jobs-tenders" element={<JobsTendersPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/queries" element={<QueriesPage />} />
            <Route path="/media" element={<MediaPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/help" element={<HelpPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
