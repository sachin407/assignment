import React, { useState } from "react";
import { Input, Form, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  state: yup.string("Enter your state").required("state is required"),
});

function LearnerLicense() {
  const [state, setState] = useState("");
  const [rto, setRto] = useState("");
  const [submitFlag, setSubmitFlag] = useState(false);
  const [gender, setGender] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  const [listData, setListData] = useState({
    state: "",
  });

  const stateDropdown = [
    {
      label: "Andhra Pradesh",
      value: "Andhra Pradesh",
    },
    {
      label: "Arunachal Pradesh",
      value: "Arunachal Pradesh",
    },
    {
      label: "Assam",
      value: "Assam",
    },
    {
      label: "Bihar",
      value: "Bihar",
    },
    {
      label: "Chhattisgarh",
      value: "Chhattisgarh",
    },
    {
      label: "Goa",
      value: "Goa",
    },
    {
      label: "Gujarat",
      value: "Gujarat",
    },
    {
      label: "Haryana",
      value: "Haryana",
    },
    {
      label: "Himachal Pradesh",
      value: "Himachal Pradesh",
    },
    {
      label: "Jharkhand",
      value: "Jharkhand",
    },
    {
      label: "Karnataka",
      value: "Karnataka",
    },
    {
      label: "Kerala",
      value: "Kerala",
    },
    {
      label: "Madhya Pradesh",
      value: "Madhya Pradesh",
    },
    {
      label: "Maharashtra",
      value: "Maharashtra",
    },
    {
      label: "Manipur",
      value: "Manipur",
    },
    {
      label: "Meghalaya",
      value: "Meghalaya",
    },
    {
      label: "Mizoram",
      value: "Mizoram",
    },
    {
      label: "Nagaland",
      value: "Nagaland",
    },
    {
      label: "Odisha",
      value: "Odisha",
    },
    {
      label: "Punjab",
      value: "Punjab",
    },
    {
      label: "Rajasthan",
      value: "Rajasthan",
    },
    {
      label: "Sikkim",
      value: "Sikkim",
    },
    {
      label: "Tamil Nadu",
      value: "Tamil Nadu",
    },
    {
      label: "Telangana",
      value: "Telangana",
    },
    {
      label: "Tripura",
      value: "Tripura",
    },
    {
      label: "Uttar Pradesh",
      value: "Uttar Pradesh",
    },
    {
      label: "Uttarakhand",
      value: "Uttarakhand",
    },
    {
      label: "West Bengal",
      value: "West Bengal",
    },
    {
      label: "Andaman and Nicobar Islands",
      value: "Andaman and Nicobar Islands",
    },
    {
      label: "Chandigarh",
      value: "Chandigarh",
    },
    {
      label: "Dadra and Nagar Haveli and Daman and Diu",
      value: "Dadra and Nagar Haveli and Daman and Diu",
    },
    {
      label: "Lakshadweep",
      value: "Lakshadweep",
    },
    {
      label: "Delhi",
      value: "Delhi",
    },
    {
      label: "Puducherry",
      value: "Puducherry",
    },
  ];
  const RTOOffices = [
    {
      value: "Andhra Pradesh",
      label: "Andhra Pradesh State Road Transport Department",
    },
    {
      value: "Arunachal Pradesh",
      label: "Arunachal Pradesh Transport Department",
    },
    {
      value: "Assam",
      label: "Assam State Transport Corporation",
    },
    // Add more states and their respective RTO office details as needed
  ];

  const genderoptions = [
    {
      label: "Male",
      value: "1",
    },
    {
      label: "Female",
      value: "2",
    },

    {
      label: "Trans",
      value: "3",
    },
  ];
  const countries = [
    { label: "India", value: "IN" },
    { label: "United States", value: "US" },
    { label: "United Kingdom", value: "UK" },
    { label: "Canada", value: "CA" },
    // Add more countries as needed
  ];

  const bloodGroups = [
    { label: "A+", value: "A+" },
    { label: "A-", value: "A-" },
    { label: "B+", value: "B+" },
    { label: "B-", value: "B-" },
    { label: "AB+", value: "AB+" },
    { label: "AB-", value: "AB-" },
    { label: "O+", value: "O+" },
    { label: "O-", value: "O-" },
  ];

  const phoneCodes = [
    { label: "+1", value: "United States" },
    { label: "+44", value: "United Kingdom" },
    { label: "+91", value: "India" },
    { label: "+1", value: "Canada" },
    // Add more countries as needed
  ];

  const formik = useFormik({
    initialValues: listData,
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const navigate = useNavigate();

  const handleSubmit = (values) => {};

  const backToHome = () => {
    navigate("/license");
  };

  const handleOptionChange = (e) => {
    setGender(e.target.value);
  };

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <br />

      <Form onSubmit={formik.handleSubmit}>
        <div className="container-fluid">
          <div className="col-sm-12">
            <div className="row" style={{ border: "3px solid #f1f1f1" }}>
              <h3>Application For Learner License</h3>

              <div className="col-sm-4">
                <div className="well">
                  <div>
                    <label htmlFor="lname"> State </label> {""}
                    <Input
                      type="select"
                      name="state"
                      id="state"
                      placeholder="Select State"
                      value={formik.values.state}
                      onChange={formik.handleChange}
                      className={` inputs required-input
                              ${
                                formik.errors.state && formik.touched.state
                                  ? "is-invalid"
                                  : ""
                              }`}
                    >
                      <option value="">Please Select State</option>
                      {stateDropdown.map((item) => (
                        <option value={item.value}>{item.label}</option>
                      ))}
                    </Input>
                    {formik.errors.state && formik.touched.state && (
                      <div className="invalid-feedback">
                        {formik.errors.state}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="well">
                  <div className="commoninput">
                    <label htmlFor="lname"> RTO Office </label> {""}
                    <Input
                      type="select"
                      name="rto"
                      id="rto"
                      placeholder="Select RTO office"
                      value={formik.values.rto}
                      onChange={(e) => {
                        setRto(e.target.value);
                      }}
                      className={`inputs
                        ${submitFlag && !state ? "is-invalid1" : ""}`}
                    >
                      <option value="">Select</option>
                      {RTOOffices.map((item) => (
                        <option value={item.value}>{item.label}</option>
                      ))}
                    </Input>
                    {submitFlag && !state && (
                      <div className="invalid-feedback1">
                        {"State is required"}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="well">
                  <div className="commoninput">
                    <label htmlFor="lname"> Pincode </label> {""}
                    <Input
                      type="text"
                      name="pincode"
                      id="pincode"
                      placeholder="Enter Pincode"
                      value={state}
                      onChange={(e) => {
                        setState(e.target.value);
                      }}
                      className={`inputs
                        ${submitFlag && !state ? "is-invalid1" : ""}`}
                    >
                      <option value="">Select</option>
                      {stateDropdown.map((item) => (
                        <option value={item.value}>{item.label}</option>
                      ))}
                    </Input>
                    {submitFlag && !state && (
                      <div className="invalid-feedback1">
                        {"State is required"}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <br />
          </div>
        </div>

        <div className="container-fluid">
          <div className="col-sm-12">
            <div className="row" style={{ border: "3px solid #f1f1f1" }}>
              <h4>Personal Details</h4>

              <div className="col-sm-4">
                <div className="well">
                  <div className="commoninput">
                    <label htmlFor="lname"> Name of the Applicant </label> {""}
                    <Input
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="Enter First Name"
                      value={state}
                      onChange={(e) => {
                        setState(e.target.value);
                      }}
                      className={`inputs
                        ${submitFlag && !state ? "is-invalid1" : ""}`}
                    >
                      <option value="">Select</option>
                      {stateDropdown.map((item) => (
                        <option value={item.value}>{item.label}</option>
                      ))}
                    </Input>
                    {submitFlag && !state && (
                      <div className="invalid-feedback1">
                        {"State is required"}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="well">
                  <div className="commoninput">
                    <Input
                      type="text"
                      name="middleName"
                      id="middleName"
                      placeholder="Enter Middle Name"
                      value={state}
                      onChange={(e) => {
                        setState(e.target.value);
                      }}
                      className={`inputs
                        ${submitFlag && !state ? "is-invalid1" : ""}`}
                    >
                      <option value="">Select</option>
                      {stateDropdown.map((item) => (
                        <option value={item.value}>{item.label}</option>
                      ))}
                    </Input>
                    {submitFlag && !state && (
                      <div className="invalid-feedback1">
                        {"State is required"}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="well">
                  <div className="commoninput">
                    <Input
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder="Enter Last Name"
                      value={state}
                      onChange={(e) => {
                        setState(e.target.value);
                      }}
                      className={`inputs
                        ${submitFlag && !state ? "is-invalid1" : ""}`}
                    >
                      <option value="">Select</option>
                      {stateDropdown.map((item) => (
                        <option value={item.value}>{item.label}</option>
                      ))}
                    </Input>
                    {submitFlag && !state && (
                      <div className="invalid-feedback1">
                        {"State is required"}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="well">
                  <div className="commoninput">
                    <label htmlFor="lname"> Aadhaar Number </label> {""}
                    <Input
                      type="text"
                      name="aadhaarNumber"
                      id="aadhaarNumber"
                      placeholder="Enter Aadhaar Name"
                      value={state}
                      onChange={(e) => {
                        setState(e.target.value);
                      }}
                      className={`inputs
                        ${submitFlag && !state ? "is-invalid1" : ""}`}
                    >
                      <option value="">Select</option>
                      {stateDropdown.map((item) => (
                        <option value={item.value}>{item.label}</option>
                      ))}
                    </Input>
                    {submitFlag && !state && (
                      <div className="invalid-feedback1">
                        {"State is required"}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="well">
                  <div className="commoninput">
                    <label htmlFor="lname"> NPR Number </label> {""}
                    <Input
                      type="text"
                      name="aadhaarNumber"
                      id="aadhaarNumber"
                      placeholder="Enter Aadhaar Name"
                      value={formik.values.state}
                      onChange={(e) => {
                        setState(e.target.value);
                      }}
                      className={`inputs
                        ${submitFlag && !state ? "is-invalid1" : ""}`}
                    >
                      <option value="">Select</option>
                      {stateDropdown.map((item) => (
                        <option value={item.value}>{item.label}</option>
                      ))}
                    </Input>
                    {submitFlag && !state && (
                      <div className="invalid-feedback1">
                        {"State is required"}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="well-gender">
                  <label> Gender </label> {""}
                  {genderoptions.map((items) => (
                    <div className="gender">
                      <Input
                        type="radio"
                        id={`gender${items.value}`}
                        name="gender"
                        value={items.value}
                        checked={gender == items.value}
                        onChange={handleOptionChange}
                      />

                      <label>{items.label}</label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-sm-4">
                <div className="well">
                  <div className="commoninput">
                    <label htmlFor="lname"> Date of Birth </label> {""}
                    <Input
                      type="date"
                      name="birthDate"
                      id="birthDate"
                      placeholder="DD MM YY"
                      value={state}
                      onChange={(e) => {
                        setState(e.target.value);
                      }}
                      className={`inputs
                        ${submitFlag && !state ? "is-invalid1" : ""}`}
                    >
                      <option value="">Select</option>
                      {stateDropdown.map((item) => (
                        <option value={item.value}>{item.label}</option>
                      ))}
                    </Input>
                    {submitFlag && !state && (
                      <div className="invalid-feedback1">
                        {"State is required"}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="well">
                  <div className="commoninput">
                    <label htmlFor="lname"> Age </label> {""}
                    <Input
                      type="text"
                      name="age"
                      id="age"
                      placeholder="Enter Age"
                      value={state}
                      onChange={(e) => {
                        setState(e.target.value);
                      }}
                      className={`inputs
                        ${submitFlag && !state ? "is-invalid1" : ""}`}
                    >
                      <option value="">Select</option>
                      {stateDropdown.map((item) => (
                        <option value={item.value}>{item.label}</option>
                      ))}
                    </Input>
                    {submitFlag && !state && (
                      <div className="invalid-feedback1">
                        {"State is required"}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="well">
                  <div className="commoninput">
                    <label htmlFor="lname"> Place of Birth </label> {""}
                    <Input
                      type="text"
                      name="placeOfBirth"
                      id="placeOfBirth"
                      placeholder="Enter Place of Birth"
                      value={state}
                      onChange={(e) => {
                        setState(e.target.value);
                      }}
                      className={`inputs
                        ${submitFlag && !state ? "is-invalid1" : ""}`}
                    >
                      <option value="">Select</option>
                      {stateDropdown.map((item) => (
                        <option value={item.value}>{item.label}</option>
                      ))}
                    </Input>
                    {submitFlag && !state && (
                      <div className="invalid-feedback1">
                        {"State is required"}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="well">
                  <div className="commoninput">
                    <label htmlFor="lname"> Country of Birth </label> {""}
                    <Input
                      type="select"
                      name="countries"
                      id="countries"
                      placeholder="Enter Country of Birth"
                      value={state}
                      onChange={(e) => {
                        setState(e.target.value);
                      }}
                      className={`inputs
                        ${submitFlag && !state ? "is-invalid1" : ""}`}
                    >
                      <option value="">Select</option>
                      {countries.map((item) => (
                        <option value={item.value}>{item.label}</option>
                      ))}
                    </Input>
                    {submitFlag && !state && (
                      <div className="invalid-feedback1">
                        {"State is required"}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="well">
                  <div className="commoninput">
                    <label htmlFor="lname"> Qualification</label> {""}
                    <Input
                      type="select"
                      name="qualification"
                      id="qualification"
                      placeholder="Enter Qualification"
                      value={state}
                      onChange={(e) => {
                        setState(e.target.value);
                      }}
                      className={`inputs
                        ${submitFlag && !state ? "is-invalid1" : ""}`}
                    >
                      <option value="">Select</option>
                      {countries.map((item) => (
                        <option value={item.value}>{item.label}</option>
                      ))}
                    </Input>
                    {submitFlag && !state && (
                      <div className="invalid-feedback1">
                        {"State is required"}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="well-bloodgroup">
                  <div className="commoninput">
                    <label htmlFor="lname"> Blood Group</label> {""}
                    <Input
                      type="select"
                      name="bloodgrp"
                      id="bloodgrp"
                      placeholder="Select Blood Group"
                      value={state}
                      onChange={(e) => {
                        setState(e.target.value);
                      }}
                      className={`inputs
                        ${submitFlag && !state ? "is-invalid1" : ""}`}
                    >
                      <option value="">Select Blood Group</option>
                      {bloodGroups.map((item) => (
                        <option value={item.value}>{item.label}</option>
                      ))}
                    </Input>
                    {submitFlag && !state && (
                      <div className="invalid-feedback1">
                        {"State is required"}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="well">
                  <div className="commoninput">
                    <label htmlFor="lname"> Phone Number</label> {""}
                    <Input
                      type="text"
                      name="phoNenumber"
                      id="phoneNumber"
                      placeholder="Enter Phone Number"
                      value={state}
                      onChange={(e) => {
                        setState(e.target.value);
                      }}
                      className={`inputs
                        ${submitFlag && !state ? "is-invalid1" : ""}`}
                    >
                      <option value="">Select Blood Group</option>
                      {bloodGroups.map((item) => (
                        <option value={item.value}>{item.label}</option>
                      ))}
                    </Input>
                    {submitFlag && !state && (
                      <div className="invalid-feedback1">
                        {"State is required"}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="well">
                  <div className="commoninput">
                    <label htmlFor="lname">Email Address</label> {""}
                    <Input
                      type="text"
                      name="emailAddress"
                      id="emailAddress"
                      placeholder="Enter Email"
                      value={state}
                      onChange={(e) => {
                        setState(e.target.value);
                      }}
                      className={`inputs
                        ${submitFlag && !state ? "is-invalid1" : ""}`}
                    >
                      <option value="">Select Blood Group</option>
                      {bloodGroups.map((item) => (
                        <option value={item.value}>{item.label}</option>
                      ))}
                    </Input>
                    {submitFlag && !state && (
                      <div className="invalid-feedback1">
                        {"State is required"}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="well">
                  <div className="commoninput">
                    <label htmlFor="lname"> Mobile Number</label> {""}
                    <Input
                      type="select"
                      name="number"
                      id="number"
                      placeholder="Enter Number"
                      value={selectedCountry}
                      onChange={handleCountryChange}
                      className={`phonecodeinputs
                        ${submitFlag && !state ? "is-invalid1" : ""}`}
                    >
                      <option value="">+91</option>
                      {phoneCodes.map((item, index) => (
                        <option key={index} value={item.value}>
                          {item.label}
                        </option>
                      ))}
                    </Input>
                    {submitFlag && !state && (
                      <div className="invalid-feedback1">
                        {"State is required"}
                      </div>
                    )}
                    <Input
                      type="tel"
                      value={mobileNumber}
                      onChange={handleMobileNumberChange}
                      placeholder="Enter Mobile number"
                      style={{ marginLeft: "10px" }}
                    />
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="well">
                  <div className="commoninput">
                    <label htmlFor="lname"> Emergency Number</label> {""}
                    <Input
                      type="select"
                      name="number"
                      id="number"
                      placeholder="Enter Number"
                      value={selectedCountry}
                      onChange={handleCountryChange}
                      className={`phonecodeinputs
                        ${submitFlag && !state ? "is-invalid1" : ""}`}
                    >
                      <option value="">+91</option>
                      {phoneCodes.map((item, index) => (
                        <option key={index} value={item.value}>
                          {item.label}
                        </option>
                      ))}
                    </Input>
                    {submitFlag && !state && (
                      <div className="invalid-feedback1">
                        {"State is required"}
                      </div>
                    )}
                    <Input
                      type="tel"
                      value={mobileNumber}
                      onChange={handleMobileNumberChange}
                      placeholder="Enter Mobile number"
                      style={{ marginLeft: "10px" }}
                    />
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="commoninput">
                  <Button style={{ width: "100px" }}>Submit</Button>{" "}
                  <Button style={{ width: "100px" }} onClick={backToHome}>
                    {" "}
                    Back{" "}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
}
export default LearnerLicense;
