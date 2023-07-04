/* eslint-disable camelcase */
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line camelcase
const Create_account = () => {
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // Validation
  const [showPassword, setShowPassword] = React.useState(false);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [EmailErrorMsg, setEmailErrorMsg] = useState("");
  const [showEmailError, setShowEmailError] = useState(false);
  const [Firstname, setFirstname] = useState("");
  const [showFnameError, setShowFnameError] = useState(false);
  const [FirstnameErrorMsg, setFirstnameErrorMsg] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [Lastname, setLastname] = useState("");
  const [showLnameError, setShowLnameError] = useState(false);
  const [LastnameErrorMsg, setLastnameErrorMsg] = useState("");
  // valid states
  const [lowerValidated, setLowerValidated] = useState(false);
  const [upperValidated, setUpperValidated] = useState(false);
  const [numberValidated, setNumberValidated] = useState(false);
  const [lengthValidated, setLengthValidated] = useState(false);
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
  const handlePassword = (e) => {
    console.log("output", e.target.value);
    const lower = new RegExp("(?=.*[a-z])");
    const upper = new RegExp("(?=.*[A-Z])");
    const number = new RegExp("(?=.*[0-9])");
    const length = new RegExp("(?=.{8,})");

    if (lower.test(e.target.value)) {
      setLowerValidated(true);
    } else {
      setLowerValidated(false);
    }
    if (upper.test(e.target.value)) {
      setUpperValidated(true);
    } else {
      setUpperValidated(false);
    }
    if (number.test(e.target.value)) {
      setNumberValidated(true);
    } else {
      setNumberValidated(false);
    }
    if (length.test(e.target.value)) {
      setLengthValidated(true);
    } else {
      setLengthValidated(false);
    }
    if (e.target.name == "Password") {
      setPassword(e.target.value);
    }
  };

  const handleCreate = (e) => {
    console.log("enable", e.target.value);
  };

  return (
    <>
      <div className="Navbar">
        <div className="img-box">
          <img src="./images/Mactassos-logo_white.png" />
        </div>
      </div>
      <div className="Account_container">
        <div className="create_heading">Create an account with email.</div>
        <form className="Create_form">
          <div className="two-box-1">
            <div className="Firstname-box">
              <TextField
                sx={{
                  width: "19vw",
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
                  width: "19vw",
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

          <div className="two-box-2">
            <TextField
              sx={{
                width: "63ch",
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
            <FormControl
              sx={{
                width: "63ch",
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "black",
                },
                "& .MuiInputBase-root:after": {
                  borderBottom: "2px solid black",
                },
              }}
              variant="standard"
            >
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                name="Password"
                onChange={handlePassword}
                id="standard-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <div className="first_case">
              <p
                className={
                  Password == ""
                    ? "normal_val"
                    : lengthValidated
                    ? "valid"
                    : "invalid"
                }
              >
                At least 8 characters
              </p>
              <p
                className={
                  Password == ""
                    ? "normal_val"
                    : upperValidated
                    ? "valid"
                    : "invalid"
                }
              >
                1 uppercase letter
              </p>
            </div>
            <div className="second_case">
              <p
                className={
                  Password == ""
                    ? "normal_val"
                    : lowerValidated
                    ? "valid"
                    : "invalid"
                }
              >
                1 lowercase letter
              </p>
              <p
                className={
                  Password == ""
                    ? "normal_val"
                    : numberValidated
                    ? "valid"
                    : "invalid"
                }
              >
                1 number
              </p>
            </div>
          </div>
          <div className="Create_btn">
            <Link to="/Home">
              <button
                className={Password == "" ? "disable-btn" : "enable-btn"}
                onClick={handleCreate}
                disabled={!Password}
              >
                Create an account
              </button>
            </Link>
          </div>
          <div className="last_box">
            Already have an account ?
            <Link to="/" className="sign_link">
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Create_account;
