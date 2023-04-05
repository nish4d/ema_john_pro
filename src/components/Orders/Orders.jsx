import React from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import { useState } from "react";
import { removeFromDb } from "../../utilities/fakedb";


const Orders = () => {
    const saveCart = useLoaderData();

    const [cart, setCart] = useState(saveCart)
    
    const handleRemoveFromCart = (id) =>{
        const remaining = cart.filter(data => data.id !== id)
        setCart(remaining)
        removeFromDb(id)
    }

  return (
    <div className="grid grid-cols-6">
      <div className="col-span-4 m-12 w-3/4 mx-auto">
        {
            cart.map(data=> <ReviewItem 
            key={data.id}
            data={data}
            handleRemoveFromCart={handleRemoveFromCart}
            ></ReviewItem>)
        }
      </div>
      <div className="col-span-2 flex justify-center mt-12 bg-amber-300 p-8 rounded-md">
      <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Orders;
