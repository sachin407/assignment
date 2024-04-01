import React from "react";
import { Input, Form, Row, Col } from "reactstrap";
// import "./styles.css";

function Appointment() {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <div className="container-fluid">
        <div className="col-sm-12">
          <div className="row" style={{ border: "3px solid #f1f1f1" }}>
            <h3>Appointment Online Form</h3>

            <div className="col-sm-12">
              <div className="well">
                <div className="appointment">
                  <label htmlFor="lname">First Name</label> {""}
                  <Input
                    type="text"
                    name="firstname"
                    id="firstname"
                    placeholder="Enter Firstname"
                    className={`input`}
                  />
                </div>

                <div className="appointment">
                  <label htmlFor="lname">Last Name</label> {""}
                  <Input
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="Enter Lastname"
                    className={`input`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
