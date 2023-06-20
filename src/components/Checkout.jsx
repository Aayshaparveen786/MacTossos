/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
import React, { useState } from "react";
import CartItem from "../components/CartItems";
import RazorpayIntegration from "./Razorpay";
import Address from "./Address";
import TrackingOrder from "./Trackingorder";
// import TrackingOrder from "./Trackingorder";

function Checkout() {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentPageType, setCurrentPageType] = useState("");

  const steps = [
    {
      label: "Cart",
      content: <CartItem onNext={(pageType) => handleNext(pageType)} />,
    },
    {
      label: "Address",
      content: <Address onNext={() => handleNext()} />,
    },
    {
      label: "Payment",
      content: <RazorpayIntegration onNext={() => handleNext()} />,
    },
    {
      label: "Tracking Order",
      content: <TrackingOrder onNext={() => handleNext()} />,
    },
  ];

  function handleNext(pageType) {
    if (pageType) {
      setCurrentPageType(pageType);
    }
    if (currentStep + 1 < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  }

  return (
    <div>
      <div className="stepper">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`step ${index === currentStep ? "active" : ""}`}
            onClick={() => setCurrentStep(index)}
          >
            <span className="step-label">{step.label}</span>
          </div>
        ))}
      </div>
      <div className="step-content">{steps[currentStep].content}</div>
    </div>
  );
}

export default Checkout;
