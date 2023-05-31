/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import {
  Autocomplete,
  Box,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { CountryList } from "./CountryList";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { NavLink } from "react-router-dom";
const Payment = () => {
  const [Name, setName] = useState("");
  const handleName = (e) => {
    console.log("output", e.target.value);

    if (e.target.name == "Name") {
      setName(e.target.value);
    }
  };
  const [Number, setNumber] = useState("");
  const handleNumber = (e) => {
    console.log("output", e.target.value);

    if (e.target.name == "Number") {
      setNumber(e.target.value);
    }
  };
  const [Address, setAddress] = useState("");
  const handleAddress = (e) => {
    console.log("output", e.target.value);

    if (e.target.name == "Address") {
      setAddress(e.target.value);
    }
  };
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="main-payment-container">
        <h1>Add Payment</h1>
        <form className="payment-form">
          <TextField
            id="standard-basic"
            label="Name"
            name="Name"
            variant="standard"
            onChange={handleName}
            sx={{
              width: "50ch",
              marginBottom: "2rem",
              "& .MuiInputLabel-root.Mui-focused":
                {
                  color: "black",
                },
              "& .MuiInputBase-root:after": {
                borderBottom: "2px solid black",
              },
            }}
          />
          <TextField
            id="standard-basic"
            label=" Card Number"
            name="Number"
            variant="standard"
            onChange={handleNumber}
            sx={{
              width: "50ch",
              marginBottom: "2rem",
              "& .MuiInputLabel-root.Mui-focused":
                {
                  color: "black",
                },
              "& .MuiInputBase-root:after": {
                borderBottom: "2px solid black",
              },
            }}
          />
          <TextField
            id="standard-basic"
            label="Address"
            name="Address"
            variant="standard"
            onChange={handleAddress}
            sx={{
              width: "50ch",
              marginBottom: "2rem",
              "& .MuiInputLabel-root.Mui-focused":
                {
                  color: "black",
                },
              "& .MuiInputBase-root:after": {
                borderBottom: "2px solid black",
              },
            }}
          />

          <Autocomplete
            id="country-select-demo"
            sx={{ width: "32vw" }}
            options={CountryList}
            autoHighlight
            getOptionLabel={(option) =>
              option.label
            }
            renderOption={(props, option) => (
              <Box
                component="li"
                sx={{ marginBottom: "2rem" }}
                {...props}
              >
                {option.label}
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                sx={{
                  "& .MuiInputBase-root:after": {
                    borderBottom: "black",
                  },
                  "& .MuiFormLabel-root.Mui-focused":
                    {
                      color: "black",
                    },
                }}
                variant="standard"
                {...params}
                label="Country"
                inputProps={{
                  ...params.inputProps,
                  autoComplete: "new-password", // disable autocomplete and autofill
                }}
              />
            )}
          />
        </form>
        <div>
          <button
            className="Submit-btn"
            onClick={handleClickOpen}
          >
            Submit
          </button>
          {/* <Button
            variant="outlined"
          >
            Open alert dialog
          </Button> */}
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle
              id="alert-dialog-title"
              sx={{
                width: "30vw",
                textAlign: "center",
              }}
            >
              {"ThankYou "}
            </DialogTitle>

            <DialogActions>
              <NavLink to="/Home">
                <Button
                  onClick={handleClose}
                  autoFocus
                >
                  Ok
                </Button>
              </NavLink>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </>
  );
};

export default Payment;
