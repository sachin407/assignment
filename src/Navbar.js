import "./Common.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div>
      <ul style={{ zIndex: "1" }}>
        <li>
          <Link
            className={activeTab === "home" ? "active" : ""}
            to="/home"
            onClick={() => handleTabClick("home")}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={activeTab === "news" ? "active" : ""}
            to="/news"
            onClick={() => handleTabClick("news")}
          >
            News
          </Link>
        </li>
        <li>
          <Link
            className={activeTab === "contact" ? "active" : ""}
            to="/contact"
            onClick={() => handleTabClick("contact")}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            className={activeTab === "about" ? "active" : ""}
            to="/about"
            onClick={() => handleTabClick("about")}
          >
            About
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;