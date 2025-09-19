import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
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
  LogOut,
} from "lucide-react";

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
import AdminLoginApp from "./components/AdminLogin.jsx";
import LogoutPage from "./pages/LogoutPage.jsx";

import { useState, useEffect } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const loginState = localStorage.getItem("loggedIn") === "true";
    setLoggedIn(loginState);
  }, []);
  useEffect(() => {
    if (loggedIn) {
      window.history.replaceState(null, "", "/");
    }
  }, [loggedIn]);

  const handleLogin = (username, password) => {
    const correctUsername = "admin";
    const correctPassword = "password123";

    if (username === correctUsername && password === correctPassword) {
      localStorage.setItem("loggedIn", "true");
      setLoggedIn(true);
    } else {
      alert("Invalid username or password");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    setLoggedIn(false);
  };

  return (
    <Router>
      <div className="flex justify-between min-h-screen">
        {loggedIn && (
          <div className="bg-[#1B5E20]">
            <Sidebar>
              <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" to="/" />
              <SidebarItem icon={<Megaphone size={20} />} text="Announcement" to="/announcement" />
              <SidebarItem icon={<BookOpen size={20} />} text="Research" to="/research" />
              <SidebarItem icon={<Cpu size={20} />} text="Technologies" to="/technologies" />
              <SidebarItem icon={<Layers size={20} />} text="Varieties" to="/varieties" />
              <SidebarItem icon={<Briefcase size={20} />} text="Jobs & tenders" to="/jobs-tenders" />
              <SidebarItem icon={<Calendar size={20} />} text="Events" to="/events" />
              <SidebarItem icon={<HelpCircle size={20} />} text="Queries" to="/queries" />
              <SidebarItem icon={<Megaphone size={20} />} text="Media" to="/media" />
              <SidebarItem icon={<Settings size={20} />} text="Settings" to="/settings" />
              <SidebarItem icon={<LifeBuoy size={20} />} text="Help" to="/help" />
              <SidebarItem icon={<LogOut size={20} />} text="Logout" to="/logout" />
            </Sidebar>
          </div>
        )}

        <div className="w-full">
          <Routes>
            <Route
              path="/login"
              element={
                loggedIn ? <Navigate to="/" replace /> : <AdminLoginApp onLogin={handleLogin} />
              }
            />
            {loggedIn ? (
              <>
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
                <Route path="/logout" element={<LogoutPage onLogout={handleLogout} />} />
              </>
            ) : (
              <Route path="*" element={<Navigate to="/login" replace />} />
            )}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
