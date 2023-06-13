import React, { useEffect } from "react";

const RazorpayIntegration = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = () => {
    const options = {
      key: "rzp_test_eOzeE2vRVIU4Gq",
      amount: 10000, // amount in paise (e.g., 10000 paise = ₹100)
      name: "ANDAJ Company",
      description: "Purchase Description",
      // image: "https://example.com/your_logo.png",
      image: "/images/food-logo.png",

      handler: function (response) {
        // Handle the payment success callback
        console.log(response);
      },
      prefill: {
        email: "aayshaparveen1012gmail.com",
        contact: "7489322644",
      },
      theme: {
        color: "#F37254",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div>
      {/* <h1>Razorpay Integration</h1> */}
      <button onClick={handlePayment} className="cartItem__removeButton">
        Pay Now
      </button>
    </div>
  );
};

export default RazorpayIntegration;
