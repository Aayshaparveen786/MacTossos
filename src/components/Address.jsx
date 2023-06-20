/* eslint-disable react/prop-types */
import { TextField } from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import RazorpayIntegration from "./Razorpay";

/* eslint-disable react/react-in-jsx-scope */
const Address = ({ onNext }) => {
  const handleOptionClick = (pageType) => {
    onNext(pageType); // call the onNext function with pageType as an argument
  };
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const handleChange = (e) => {
    if (e.target.name === "f-name") {
      setFirstName(e.target.value);
    }
    if (e.target.name === "l-name") {
      setLastName(e.target.value);
    }
    if (e.target.name === "designation") {
      setDesignation(e.target.value);
    }
    if (e.target.name === "company") {
      setCompany(e.target.value);
    }
    if (e.target.name === "mobile") {
      setMobile(e.target.value);
    }
    if (e.target.name === "summary") {
      setSummary(e.target.value);
    }
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
    if (e.target.name === "address1") {
      setAddress(e.target.value);
    }
    if (e.target.name === "address2") {
      setAddress(e.target.value);
    }
    if (e.target.name === "city") {
      setCity(e.target.value);
    }
    if (e.target.name === "zipcode") {
      setZipcode(e.target.value);
    }
  };
  return (
    <>
      <h1 className="Address-heading">Address</h1>

      <div className="Address-container">
        <div className="row-1">
          <TextField
            label="First Name"
            className="name"
            name="f-name"
            type="text"
            value={firstName}
            onChange={handleChange}
          />
          <TextField
            label="Last Name"
            className="name"
            name="l-name"
            type="text"
            value={lastName}
            onChange={handleChange}
          />
        </div>
        <div className="row-1">
          <TextField
            label="Email"
            className="email"
            name="email"
            type="email"
            value={email}
            onChange={handleChange}
          />
          <TextField
            label="Mobile No"
            className="mobile"
            name="mobile"
            type="tel"
            value={mobile}
            onChange={handleChange}
          />
        </div>

        <div className="row-1">
          <TextField
            label="Address Line1"
            className="address"
            name="address1"
            type="text"
            value={address}
            onChange={handleChange}
          />
          <TextField
            label="Address Line2"
            className="address"
            name="address2"
            type="text"
            value={address}
            onChange={handleChange}
          />
        </div>
        <div className="row-1">
          <TextField
            label="City"
            className="address"
            name="city"
            type="text"
            value={city}
            onChange={handleChange}
          />
          <TextField
            label="Zipcode"
            className="address"
            name="zipcode"
            type="text"
            value={zipcode}
            onChange={handleChange}
          />
        </div>
        <NavLink onClick={() => handleOptionClick("option2")}>
          {/* <button className="cartItem__removeButton">Continue</button> */}
          <RazorpayIntegration />
        </NavLink>
      </div>
    </>
  );
};

export default Address;
