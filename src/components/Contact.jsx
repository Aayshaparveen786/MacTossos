import React, { useState } from "react";
import Navbar from "./Navbar";
import { TextField } from "@mui/material";
import Footer from "./Footer";
import GoogleMapReact from "google-map-react";
const Contact = () => {
  // Validation
  const [Email, setEmail] = useState("");
  const [EmailErrorMsg, setEmailErrorMsg] = useState("");
  const [showEmailError, setShowEmailError] = useState(false);
  const [Firstname, setFirstname] = useState("");
  const [showFnameError, setShowFnameError] = useState(false);
  const [FirstnameErrorMsg, setFirstnameErrorMsg] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [Lastname, setLastname] = useState("");
  const [showLnameError, setShowLnameError] = useState(false);
  const [LastnameErrorMsg, setLastnameErrorMsg] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [showPhoneNoError, setShowPhoneNoError] = useState(false);
  const [PhoneNoErrorMsg, setPhoneNoErrorMsg] = useState("");
  const handlePhoneNumber = (e) => {
    if (e.target.name == "PhoneNumber") {
      setPhoneNumber(e.target.value);
      setShowPhoneNoError(false);
    }
    if (e.target.value == "") {
      console.log("false", PhoneNumber);

      setShowPhoneNoError(true);
      setPhoneNoErrorMsg("First name is required.");
      // console.log("output", e.target.value);
    }
  };
  const handleFirstnameChange = (e) => {
    if (e.target.name == "Firstname") {
      setFirstname(e.target.value);
      setShowFnameError(false);
    }
    if (e.target.value == "") {
      console.log("false", Firstname);

      setShowFnameError(true);
      setFirstnameErrorMsg("First name is required.");
      // console.log("output", e.target.value);
    }
  };
  const handleLastnameChange = (e) => {
    if (e.target.name == "Lastname") {
      setLastname(e.target.value);
      setShowLnameError(false);
    }
    if (e.target.value == "") {
      setShowLnameError(true);
      setLastnameErrorMsg("Last name is required.");
      console.log("output", e.target.value);
    }
  };
  const handleEmail = (e) => {
    if (e.target.name == "Email") {
      setEmail(e.target.value);
      setEmailErrorMsg("");
      setShowEmailError(false);
    }
    if (Email.length > 0 && !/\S+@\S+\.\S+/.test(e.target.value)) {
      setShowEmailError(true);
      setEmailErrorMsg("Email address format is invalid.");
    }
    if (e.target.value == "") {
      setShowEmailError(true);
      setEmailErrorMsg("Email address format is invalid.");
    }
  };
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  const handleMessage = () => {
    alert("Thanks");
  };
  return (
    <>
      <Navbar />
      <div className="contact-container">
        <div className="banner-box">
          <img src="./images/contact-banner.png" />
        </div>

        <h1 className="form-heading">Get In Touch</h1>
        <form className="Contact-form">
          <div className="col-1">
            <div className="Firstname-box">
              <TextField
                sx={{
                  width: "30vw",
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "black",
                  },
                  "& .MuiInputBase-root:after": {
                    borderBottom: "2px solid black",
                  },
                }}
                id="standard-basic1"
                label="First name"
                name="Firstname"
                onChange={handleFirstnameChange}
                variant="standard"
              />
              {showFnameError == true ? (
                <p className="error-nametext-account">{FirstnameErrorMsg}</p>
              ) : null}
            </div>
            <div className="Lastname-box">
              <TextField
                sx={{
                  width: "30vw",
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "black",
                  },
                  "& .MuiInputBase-root:after": {
                    borderBottom: "2px solid black",
                  },
                }}
                id="standard-basic2"
                label="Last name"
                onChange={handleLastnameChange}
                name="Lastname"
                variant="standard"
              />
              {showLnameError == true ? (
                <p className="error-nametext-account">{LastnameErrorMsg}</p>
              ) : null}
            </div>
          </div>

          <div className="col-2">
            <div className="Email-box">
              <TextField
                sx={{
                  width: "30vw",
                  marginBottom: "1rem",
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "black",
                  },
                  "& .MuiInputBase-root:after": {
                    borderBottom: "2px solid black",
                  },
                }}
                id="standard-basic3"
                label="Email address"
                name="Email"
                onChange={handleEmail}
                variant="standard"
              />
              {showEmailError == true ? (
                <p className="error-Etext-account">{EmailErrorMsg}</p>
              ) : null}
            </div>
            <div className="Phone-box">
              <TextField
                sx={{
                  width: "30vw",
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "black",
                  },
                  "& .MuiInputBase-root:after": {
                    borderBottom: "2px solid black",
                  },
                }}
                id="standard-basic1"
                label="Phone Number"
                name="PhoneNumber"
                onChange={handlePhoneNumber}
                variant="standard"
              />
              {showPhoneNoError == true ? (
                <p className="error-nametext-account">{PhoneNoErrorMsg}</p>
              ) : null}
            </div>
          </div>
          <div className="message-box">
            <TextField
              sx={{
                width: "63vw",
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "black",
                },
                "& .MuiInputBase-root:after": {
                  borderBottom: "2px solid black",
                },
              }}
              placeholder="Your Message"
              variant="standard"
              label=" Message"
            />
          </div>
          <div className="btn-box">
            <button className="mes-btn" onClick={handleMessage}>
              Send Message
            </button>
          </div>
        </form>
        <div style={{ height: "100vh", width: "98vw" }}>
          <GoogleMapReact
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          ></GoogleMapReact>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
