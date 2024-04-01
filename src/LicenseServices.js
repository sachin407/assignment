// import { useNavigate } from "react-router-dom";
import "./Common.css";
import DrivingLicense from "./imgFiles/License Services/v-learners-license-services.png";
import DrivingSchool from "./imgFiles/License Services/v-driving-school-license.png";
import OnlineTestAppointemet from "./imgFiles/License Services/v-online-test-appointment.png";
import OtherServices from "./imgFiles/License Services/v-driving-license.png";

function LicenseServices() {
  //   const navigate = useNavigate();

  //   const backToLogIn = () => {
  //     navigate("/");
  //   };
  return (
    <div>
      <div className="container-fluid">
        <div className="col-sm-12">
          <div className="row" style={{ border: "3px solid #f1f1f1" }}>
            <h3>License Related Services</h3>

            <div className="col-sm-4">
              <a href="/license">
                <div className="well">
                  <img src={DrivingLicense} alt="Avatar" className="avatar" />
                  <h4>Drivers/ Learners License</h4>
                  <p>Apply for License</p>
                </div>
              </a>
            </div>

            <div className="col-sm-4">
              <a href="/driving/school">
                <div className="well">
                  <img src={DrivingSchool} alt="Avatar" className="avatar" />
                  <h4>Driving School</h4>
                  <p> One place for application of Driving School License</p>
                </div>
              </a>
            </div>

            <div className="col-sm-4">
              <div className="well">
                <img src={OtherServices} alt="Avatar" className="avatar" />

                <h4>Other Services</h4>
                <p>
                  Explore the plethora of services related to Driving License
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LicenseServices;
