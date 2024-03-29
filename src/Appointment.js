import React from "react";
import { Input } from "reactstrap";
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
            <h3>Appointment Form</h3>
            <div className="formContainer">
              <form action="/action_page.php">
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
                <label htmlFor="country">Country</label>
                <select id="country" name="country" className="input">
                  <option value="australia">Australia</option>
                  <option value="canada">Canada</option>
                  <option value="usa">USA</option>
                </select>
                <Input type="submit" value="Submit" className="submitButton" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
