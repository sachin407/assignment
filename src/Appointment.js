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
      {/* <div className="container-fluid">
        <div className="col-sm-12">
          <div className="row" style={{ border: "3px solid #f1f1f1" }}>
            <h3>Appointment Form</h3>
            <div className="col-sm-12">
              <div className="well">
                <Form>
                  <label htmlFor="fname">First Name</label>
                  <Input
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="Your name.."
                    className="input"
                  />

                  <label htmlFor="lname">Last Name</label>
                  <Input
                    type="text"
                    id="lname"
                    name="lastname"
                    placeholder="Your last name.."
                    className="input"
                  />
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="container-fluid">
        <div className="col-sm-12">
          <div className="row" style={{ border: "3px solid #f1f1f1" }}>
            <h3>Appointment Online Form</h3>

            <div className="col-sm-12">
              <div className="well">
                <h4 className="divider">
                  Please select the State from where the service is to be taken
                </h4>
                <Input
                  type="text"
                  name="state"
                  id="state"
                  placeholder="select State"
                  className={`input`}
                />
                {/* <option value="">Please Select State</option>
                  {stateDropdown.map((item) => (
                    <option value={item.value}>{item.label}</option>
                  ))} */}

                {/* {submitFlag && !state && (
                  <div className="invalid-feedback1">
                    {"Category is required"}
                  </div>
                )} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
