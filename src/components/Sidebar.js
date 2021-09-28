import React from "react";
import { FaTimes } from "react-icons/fa";
import sublinks from "./Data";
import { useGlobalContext } from "../context/Context";
const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  const showSidebar = isSidebarOpen ? "show-sidebar" : "";
  return (
    <div className={`sidebar-wrapper ${showSidebar}`}>
      <div className="sidebar">
        <button className="sidebar--btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <ul className="sidebar__links">
          {sublinks.map((link) => {
            const { page, links } = link;
            return (
              <div className="link">
                <div className="link__heading">{page}</div>
                <ul className="link__sublinks">
                  {links.map((item) => {
                    const { label, icon, url } = item;
                    return (
                      <li>
                        {icon}
                        {label}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
