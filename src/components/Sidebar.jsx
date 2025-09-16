import { ChevronFirst, ChevronLast } from "lucide-react";
import { createContext, useContext, useState } from "react";
import { Link,useLocation  } from "react-router-dom";

const SidebarContext = createContext();

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <>
      <div className="h-screen ">
        <nav className="h-full flex flex-col border-r shadow-sm">
          <div className="p-4 pb-2 flex justify-between items-center mt-8">
            <button
              onClick={() => setExpanded((curr) => !curr)}
              className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
            >
              {expanded ? <ChevronFirst /> : <ChevronLast />}
            </button>
          </div>

          <SidebarContext.Provider value={{ expanded }}>
            <ul className="flex-1 px-3">{children}</ul>
          </SidebarContext.Provider>
        </nav>
      </div>
    </>
  );
}

export function SidebarItem({ icon, text, to }) {
  const { expanded } = useContext(SidebarContext);
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <li>
      <Link
        to={to}
        className={`flex items-center py-2 px-3 my-1 font-medium rounded-md transition-colors group ${
          isActive
            ? "bg-[#67B96D] text-[#B1AFAF]"
            : "hover:bg-[#67B96D] text-[#B1AFAF]"
        }`}
      >
        {icon}
        <span
          className={`overflow-hidden transition-all ${
            expanded ? "w-52 ml-3" : "w-0"
          } text-[#B1AFAF]`}
        >
          {text}
        </span>

        {!expanded && (
          <div
            className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
          >
            {text}
          </div>
        )}
      </Link>
    </li>
  );
};
