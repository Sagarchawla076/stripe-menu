import React, { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "../context/Context";
const Submenu = () => {
  const [columns, setColumns] = useState("col-2");
  const container = useRef(null);
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext();
  useEffect(() => {
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
    if (links.length === 3) {
      setColumns("col - 3");
    }
    if (links.length > 3) {
      setColumns("col-4");
    }
  }, [location, links]);
  const show = isSubmenuOpen ? "show" : "";
  return (
    <div className={`submenu ${show}`} ref={container}>
      <h4>{page}</h4>
      <div className={`submenu__links ${columns}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <a key={index} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default Submenu;
