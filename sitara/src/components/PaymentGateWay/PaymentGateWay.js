import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Home/Premimum/Premium.css"; // Reusing the Premium UI styles

const plans = [
  { title: "Mini", price: "₹7/day", features: ["Ad-free music", "Offline mode", "Download 30 songs"] },
  { title: "Individual", price: "₹119/month", features: ["Ad-free music", "Offline mode", "Download 10,000 songs"] },
  { title: "Duo", price: "₹149/month", features: ["2 Premium accounts", "Ad-free music", "Offline mode"] },
  { title: "Family", price: "₹179/month", features: ["Up to 6 accounts", "Parental controls", "Offline mode"] }
];

const PaymentGateway = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [step, setStep] = useState(1); // Step 1: Plan Selection, Step 2: Payment

  return (
    <div className="premium-plans container">
      <h3 className="text-center mb-4">{step === 1 ? "Select Your Plan" : "Payment Options"}</h3>

      {/* Step 1: Plan Selection */}
      {step === 1 && (
        <>
          <div className="row justify-content-center">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`col-md-3 plan-card ${selectedPlan === plan.title ? "selected" : ""}`}
                onClick={() => setSelectedPlan(plan.title)}
              >
                <h5 className="plan-title">{plan.title}</h5>
                <p className="plan-price">{plan.price}</p>
                <ul>
                  {plan.features.map((feature, i) => <li key={i}>✅ {feature}</li>)}
                </ul>
              </div>
            ))}
          </div>

          {selectedPlan && (
            <div className="text-center mt-4">
              <button className="btn btn-success btn-lg" onClick={() => setStep(2)}>Proceed to Payment</button>
            </div>
          )}
        </>
      )}

      {/* Step 2: Payment Methods */}
      {step === 2 && (
        <>
          <div className="text-center">
            <h4>Plan Selected: {selectedPlan}</h4>
            <p>Enjoy your Premium benefits!</p>
          </div>

          <div className="payment-options d-flex justify-content-center gap-3 mt-3">
            <button className="btn btn-primary">💳 Credit / Debit Card</button>
            <button className="btn btn-secondary">📲 UPI / Net Banking</button>
            <button className="btn btn-success">💰 Pay via Wallet</button>
          </div>

          <div className="text-center mt-4">
            <button className="btn btn-dark" onClick={() => setStep(1)}>Go Back</button>
          </div>
        </>
      )}
    </div>
  );
};

export default PaymentGateway;
