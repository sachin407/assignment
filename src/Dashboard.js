// import { useNavigate } from "react-router-dom";
import "./Common.css";

import LicenseServices from "./LicenseServices";
import VehicleServices from "./VehicleServices";

function Dashboard() {
  //   const navigate = useNavigate();

  //   const backToLogIn = () => {
  //     navigate("/");
  //   };
  return (
    <div>
      <div>
        <ul style={{ zIndex: "1" }}>
          <li>
            <a class="active" href="#home">
              Home
            </a>
          </li>
          <li>
            <a href="#news">News</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <LicenseServices />
      </div>
      <br></br>
      <div>
        <VehicleServices />
      </div>
      <div>
        <VehicleServices />
      </div>{" "}
      <div>
        <VehicleServices />
      </div>{" "}
      <div>
        <VehicleServices />
      </div>
    </div>
  );
}

export default Dashboard;
