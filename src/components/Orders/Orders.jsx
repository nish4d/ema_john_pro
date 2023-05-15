import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import { useState } from "react";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";

const Orders = () => {
  const saveCart = useLoaderData();

  const [cart, setCart] = useState(saveCart);

  const handleRemoveFromCart = (id) => {
    const remaining = cart.filter((data) => data._id !== id);
    
    setCart(remaining);
    removeFromDb(id);
  };

  const handleCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className="grid grid-cols-6">
      <div className="col-span-4 m-12 w-3/4 mx-auto">
        {cart.map((data) => (
          <ReviewItem
            key={data._id}
            data={data}
            handleRemoveFromCart={handleRemoveFromCart}
          ></ReviewItem>
        ))}
      </div>
      <div className="col-span-2 ">
        <Cart cart={cart} handleCart={handleCart}>
          <Link to="/checkout">
            <p>
              {" "}
              proceed Check out <FontAwesomeIcon icon={faCreditCard} />
            </p>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
