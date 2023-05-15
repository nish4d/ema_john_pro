import React from 'react';
import Product from '../Product/Product';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan} from "@fortawesome/free-solid-svg-icons";

const Cart = ({cart,handleCart, children}) => {
    // console.log(cart,handleCart, children);
    let total = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (let carts of cart) {
        // if(carts.quantity === 0 ){
        //     carts.quantity = 1;
        // }
        // carts.quantity = cart.quantity || 1;
        total = total+ carts.price*carts.quantity;
        totalShipping = totalShipping+ carts.shipping ;
        quantity = quantity + carts.quantity;
        // console.log(carts);
    }
    const tax = total * 7/100;

    const grandTotal = total + totalShipping+ tax;

    return (
        <div className='bg-amber-300 p-8 rounded-md mt-12'>
            <h2>Order Summary</h2>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <p>Grand Total: ${grandTotal.toFixed(2)}</p>
            <div onClick={handleCart} className='flex justify-between px-4 py-2 mt-4 cursor-pointer rounded-md text-white bg-red-600'>
            <span>Clear cart</span>
            <span><FontAwesomeIcon  icon={faTrashCan} /></span>
            </div>
            {
                children
            }
            
        </div>
    );
};

export default Cart;