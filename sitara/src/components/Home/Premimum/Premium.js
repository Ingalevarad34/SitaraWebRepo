import React, { useState } from "react";
import "./Premium.css";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PremiumBanner = () => {
  const navigate = useNavigate();

  return (
    <div className="premium-banner">
      <h1>Get Premium free for 1 month</h1>
      <p>Just ₹119/month after. Debit and credit cards accepted. Cancel anytime.</p>
      <button className="btn btn-dark"  onClick={() => navigate("/payment")}>Get Started</button>
      <button className="btn btn-outline-light">See Other Plans</button>
    </div>
  );
};

const PremiumFeatures = () => {
  const features = [
    { icon: "🎵", title: "Ad-free music listening", desc: "Enjoy uninterrupted music" },
    { icon: "📴", title: "Offline playback", desc: "Save your data by listening offline" },
    { icon: "📡", title: "Play everywhere", desc: "Listen on your speakers, TV, and other devices" },
    { icon: "💳", title: "Pay your way", desc: "Pay with cards, Paytm, UPI, and more" }
  ];

  return (
    <div className="premium-features">
      <div className="row justify-content-center">
        {features.map((feature, index) => (
          <div key={index} className="col-md-3 text-center">
            <div className="feature-icon">{feature.icon}</div>
            <h5>{feature.title}</h5>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const PremiumPlans = () => {
  const plans = [
    {
      title: "Mini",
      price: "₹7/day",
      features: ["Ad-free music listening", "Offline songs", "Download 30 songs"],
      details: "Enjoy premium music with offline support for ₹7/day. Ideal for quick access!",
    },
    {
      title: "Individual",
      price: "₹119/month",
      features: ["Ad-free music", "Offline songs", "Download 10,000 songs"],
      details: "Best for solo users who want unlimited music with offline downloads.",
    },
    {
      title: "Duo",
      price: "₹149/month",
      features: ["2 Premium accounts", "Ad-free music", "Offline songs"],
      details: "Great for two people! Share premium with your best friend or partner.",
    },
    {
      title: "Family",
      price: "₹179/month",
      features: ["Up to 6 accounts", "Ad-free music", "Offline songs"],
      details: "Perfect for families! Get up to 6 separate accounts with parental controls.",
    }
  ];

  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = (plan) => {
    setSelectedPlan(plan);
    setShowModal(true);
  };

  return (
    <div className="premium-plans container">
      <h3 className="text-center mb-4">Pick your Premium</h3>
      <div className="row justify-content-center">
        {plans.map((plan, index) => (
          <div key={index} className="col-md-3">
            <div className="plan-card">
              <h5 className="plan-title">{plan.title}</h5>
              <p className="plan-price">{plan.price}</p>
              <ul>
                {plan.features.map((feature, i) => (
                  <li key={i}>✅ {feature}</li>
                ))}
              </ul>
              <button className="btn btn-dark" onClick={() => handleShowModal(plan)}>View Plans</button>
            </div>
          </div>
        ))}
      </div>

      {/* Special Discount */}
      <div className="special-discount mt-4">
        <h5>🎓 Special discount for students</h5>
        <button className="btn btn-warning">Learn More</button>
      </div>

      {/* Plan Details Modal */}
      {selectedPlan && (
        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedPlan.title} Plan</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>Price: {selectedPlan.price}</h5>
            <p>{selectedPlan.details}</p>
            <ul>
              {selectedPlan.features.map((feature, i) => (
                <li key={i}>✅ {feature}</li>
              ))}
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={() => setShowModal(false)}>Close</Button>
            <Button variant="success">Subscribe Now</Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

const Premium = () => {
  return (
    <>
      <div className="main-premium">
        <PremiumBanner />
        <PremiumFeatures />
        <PremiumPlans />
      </div>
    </>
  );
};

export default Premium;
