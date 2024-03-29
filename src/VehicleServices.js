// import { useNavigate } from "react-router-dom";
import "./Common.css";
import DrivingLicense from "./imgFiles/Vehicles Services/v-new-vehicle-registration.png";
import DrivingSchool from "./imgFiles/Vehicles Services/v-fancy-number-allocation.png";
import OnlineTestAppointemet from "./imgFiles/Vehicles Services/v-permit-services.png";
import OtherServices from "./imgFiles/Vehicles Services/v-vehicle-registration.png";

function VehicleServices() {
  //   const navigate = useNavigate();

  //   const backToLogIn = () => {
  //     navigate("/");
  //   };
  return (
    <div>
      <div class="container-fluid">
        <div class="col-sm-12">
          <div class="row" style={{ border: "3px solid #f1f1f1" }}>
            <h3>Vehicles Related Services</h3>

            <div class="col-sm-4">
              <div class="well">
                <img src={DrivingLicense} alt="Avatar" className="avatar" />

                <h4>Vehicle Registration</h4>
                <p>One click for all the vehicle related citizen services</p>
              </div>
            </div>

            <div class="col-sm-4">
              <div class="well">
                <img
                  src={OnlineTestAppointemet}
                  alt="Avatar"
                  className="avatar"
                />

                <h4>National Permit</h4>
                <p>Seamless online way for vehicle permits</p>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="well">
                <img src={OtherServices} alt="Avatar" className="avatar" />

                <h4>Other Services</h4>
                <p>Explore the services related to your vehicle here</p>
              </div>
            </div>
          </div>
          {/* 
          <div class="row">
            <div class="col-sm-4">
              <div class="well">
                <p>Text</p>
                <p>Text</p>
                <p>Text</p>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="well">
                <p>Text</p>
                <p>Text</p>
                <p>Text</p>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="well">
                <p>Text</p>
                <p>Text</p>
                <p>Text</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-8">
              <div class="well">
                <p>Text</p>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="well">
                <p>Text</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default VehicleServices;
