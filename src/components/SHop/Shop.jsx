import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("../../../public/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
//   console.log(products);

  const handlers = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  }
//   console.log(cart.length);
  return (
    <div className="grid grid-cols-6">
      <div className="col-span-5 grid grid-cols-2 md:grid-cols-3 gap-3">
            {
                products.map((product) => <Product
                product={product}
                key={product.id}
                handlers={handlers}
                ></Product>)
            }
        </div>
      <div className="col-span-1 flex justify-center mt-12">cart: {cart.length}</div>
    </div>
  );
};

export default Shop;
