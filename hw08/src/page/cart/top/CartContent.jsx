import React, { useState } from "react";
import CartItem from "./CartItem";
import ShoppingCartButtons from "./ShoppingCartButtons";
import ShippingAddressForm from "./ShippingAddressForm";
import Product3 from "../../../img/product3.svg";
import Product7 from "../../../img/product7.svg";

const CartContent = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      imgSrc: Product3,
      itemName: "MANGO PEOPLE T-SHIRT",
      price: 300,
      color: "Blue",
      size: "XL",
      quantity: 1,
    },
    {
      id: 2,
      imgSrc: Product7,
      itemName: "MANGO PEOPLE T-SHIRT",
      price: 400,
      color: "Red",
      size: "XL",
      quantity: 1,
    },
  ]);

  const handleQuantityChange = ({ newQuantity }, itemId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const total = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <div className="cart_content">
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            imgSrc={item.imgSrc}
            itemName={item.itemName}
            price={item.price}
            color={item.color}
            size={item.size}
            onQuantityChange={(newQuantity) =>
              handleQuantityChange(newQuantity, item.id)
            }
          />
        ))}
        <ShoppingCartButtons />
      </div>
      <div className="cart_shipping">
        <div className="shipping">
          <h2 className="shipping_subtitle">SHIPPING ADDRESS</h2>
          <ShippingAddressForm />
        </div>
        <div className="cart_price">
          <p className="cart_price_sub-total">
            SUB TOTAL <span className="price">${total}</span>
          </p>
          <h2 className="cart_price_grand-total">
            GRAND TOTAL <span className="price">${total}</span>
          </h2>
          <button className="cart_price_button">PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default CartContent;
