import React from 'react';

const Cart = ({cart}) => {

    let total = 0;
    let totalShipping = 0;
    for (let carts of cart) {
        total = total+ carts.price;
        totalShipping = totalShipping+ carts.shipping;
        // console.log(carts);
    }
    const tax = total * 7/100;

    const grandTotal = total + totalShipping+ tax;

    return (
        <div>
            <h2>Order Summary</h2>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <p>Grand Total: ${grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;