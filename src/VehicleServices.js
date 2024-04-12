import React, { useState } from "react";
import "./Common.css";
import DrivingLicense from "./imgFiles/Vehicles Services/v-new-vehicle-registration.png";
import OnlineTestAppointemet from "./imgFiles/Vehicles Services/v-permit-services.png";
import OtherServices from "./imgFiles/Vehicles Services/v-vehicle-registration.png";

function VehicleServices() {
  const [state, setState] = useState("");

  return (
    <div>
      <div className="container-fluid">
        <div className="col-sm-12">
          <div className="row" style={{ border: "3px solid #f1f1f1" }}>
            <h3>Vehicles Related Services</h3>

            <div className="col-sm-6">
              <a href="create/registration">
                <div className={`well ${!state && "disabled-card"}`}>
                  <img src={DrivingLicense} alt="Avatar" className="avatar" />

                  <h4>Vehicle Registration</h4>
                  <p>One click for all the vehicle related citizen services</p>
                </div>
              </a>
            </div>

            <div className="col-sm-6">
              <div className="well">
                <img src={OtherServices} alt="Avatar" className="avatar" />

                <h4>Other Services</h4>
                <p>Explore the services related to your vehicle here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VehicleServices;
