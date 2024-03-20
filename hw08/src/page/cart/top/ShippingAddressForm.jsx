import React from "react";

const ShippingAddressForm = () => {
  return (
    <form className="shipping_form">
      <input className="shipping_inf" type="text" placeholder="Bangladesh" />
      <input className="shipping_inf" type="text" placeholder="State" />
      <input
        className="shipping_inf"
        type="text"
        placeholder="Postcode / Zip"
      />
      <button className="shipping_button">GET A QUOTE</button>
    </form>
  );
};

export default ShippingAddressForm;
