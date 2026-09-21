import React from "react";
import { Squash as Hamburger } from "hamburger-react";
import { useGlobalContext } from "../../context";
import { Link } from "react-router-dom";
import OELogo from "../UI/OELogo";
const Navbar = () => {
  const { setSidebarOpened, sidebarOpened } = useGlobalContext();
  return (
    <nav className="w-full fixed top-0 left-0 z-[6] text-white">
      <div className="w-full max-w-[1200px] p-3 flex justify-between items-center mx-auto z-6">
        {/* navbar brand */}
        <Link
          to={"/"}
          aria-label="Oladele Emmanuel - Home"
          className={`block transition-colors ${
            sidebarOpened ? "text-white" : "text-mainDarkColor"
          }`}
        >
          <OELogo />
        </Link>
        <div>
          <Hamburger
            size={28}
            toggle={setSidebarOpened}
            toggled={sidebarOpened}
            color={sidebarOpened ? "#fff" : "#000"}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
