import React from "react";
import RegistrationForm from "./RegistrationForm";
import LoyaltyProgram from "./LoyaltyProgram";

const TopSection = () => {
  return (
    <section className="top">
      <div className="registration">
        <RegistrationForm />
        <LoyaltyProgram />
      </div>
    </section>
  );
};

export default TopSection;
