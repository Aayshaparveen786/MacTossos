/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Navbar from "./Navbar";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
const steps = [
  {
    label: "Select campaign settings",
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: "Create an ad group",
    description: `An ad group contains one or more ads which target a shared set of keywords learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues`,
  },
  {
    label: "Create an ad",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];
const About = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <>
      <Navbar />
      <div className="About">
        <div className="first-box">
          <h4 className="short-heading">Testimonial</h4>
          <h1 className="main-heading">What our customers are saying</h1>
          <span className="sub-para">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            quasi qui minus quos sit perspiciatis inventore quis provident
            placeat fugiat!
          </span>
          <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
            <Paper
              square
              elevation={0}
              sx={{
                display: "flex",
                alignItems: "center",
                height: 50,
                pl: 2,
                bgcolor: "background.default",
              }}
            >
              <Typography>{steps[activeStep].label}</Typography>
            </Paper>
            <Box sx={{ height: 100, maxWidth: 400, width: "100%", p: 2 }}>
              {steps[activeStep].description}
            </Box>
            <MobileStepper
              variant="text"
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                >
                  Next
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Back
                </Button>
              }
            />
          </Box>
        </div>
        <div className="second-box">
          <img src="./images/network.png" />
        </div>
      </div>
      <section className="services" id="services">
        <div className="top">
          <h2>
            <span className="yellow">Why</span> We are the Best
          </h2>
          <p>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
            Lorem ipsum is placeholder.
          </p>
        </div>

        <div className="bottom">
          <div className="box">
            <img src="./images/delivery-man.svg" alt="" />
            <h4>Free Delivery</h4>
            <p>
              Lorem ipsum dolor sit amet,adipiscing elit. Eu, montes, metus
              porttitor consectetur pretium. Euismod imperdiet pellentesque
              cursus in netus.
            </p>
          </div>
          <div className="box">
            <img src="./images/fast-food.svg" alt="" />
            <h4>Healthy Foods</h4>
            <p>
              Lorem ipsum dolor sit amet,adipiscing elit. Eu, montes, metus
              porttitor consectetur pretium. Euismod imperdiet pellentesque
              cursus in netus.
            </p>
          </div>
          <div className="box">
            <img src="./images/order-food.svg" alt="" />
            <h4>Online Ordering</h4>
            <p>
              Lorem ipsum dolor sit amet,adipiscing elit. Eu, montes, metus
              porttitor consectetur pretium. Euismod imperdiet pellentesque
              cursus in netus.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
