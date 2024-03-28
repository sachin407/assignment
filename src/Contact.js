import React from "react";

function ContactUs() {
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div class="container-fluid">
        <div class="col-sm-12">
          <div class="row" style={{ border: "3px solid #f1f1f1" }}>
            <h3>Contact Us</h3>

            <div class="col-sm-3">
              <div class="well">
                <h4 className="divider">Problem Area</h4>
                <p>
                  Vehicle registration, fitness, Tax, Permit, Fancy, Dealer etc
                </p>
                <p>Learner License, Driving Licence etc</p>
                <p>mParivahan Related</p>
                <p>eChallan Related</p>
              </div>
            </div>

            <div class="col-sm-3">
              <div class="well">
                <h4 className="divider">Email-id</h4>
                <p>helpdesk-vahan[at]gov[dot]in</p>
                <p>helpdesk-sarathi[at]gov[dot]in</p>
                <p>helpdesk-mparivahan[at]gov[dot]in </p>
                <p>helpdesk-echallan[at]gov[dot]in</p>
              </div>
            </div>

            <div class="col-sm-3">
              <div class="well">
                <h4 className="divider">Contact Number</h4>
                <p style={{ padding: "43px" }}>+91-120-4925505</p>
              </div>
            </div>

            <div class="col-sm-3">
              <div class="well">
                <h4 className="divider">Timings</h4>
                <p style={{ padding: "43px" }}>06:00 AM - 12:00 Midnight</p>
              </div>
            </div>
          </div>

          {/* <div>
            <table>
              <thead>
                <tr>
                  <th>Problem Area</th>
                  <th>Email-id</th>
                  <th>Contact Number</th>
                  <th>Timings</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Vehicle registration, fitness, Tax, Permit, Fancy, Dealer
                    etc
                  </td>
                  <td>helpdesk-vahan@gov.in</td>
                  <td>+91-120-4925505</td>
                  <td>06:00 AM - 12:00 Midnight</td>
                </tr>
                <tr>
                  <td>Learner License, Driving Licence etc</td>
                  <td>helpdesk-sarathi@gov.in</td>
                  <td>N/A</td>
                  <td>N/A</td>
                </tr>
                <tr>
                  <td>mParivahan Related</td>
                  <td>helpdesk-mparivahan@gov.in</td>
                  <td>N/A</td>
                  <td>N/A</td>
                </tr>
                <tr>
                  <td>eChallan Related</td>
                  <td>helpdesk-echallan@gov.in</td>
                  <td>N/A</td>
                  <td>N/A</td>
                </tr>
              </tbody>
            </table>
          </div> */}
        </div>
      </div>
    </div>
  );
}
export default ContactUs;
