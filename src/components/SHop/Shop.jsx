import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("../../../public/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(()=> {
    // console.log(products);
    const storedCard = getShoppingCart()
    const addedProduct = [];
    // console.log(storedCard);
    for(const id in storedCard){
      // console.log(id);
      const saveCart = products.find(data=> data.id === id)
      console.log(saveCart);
      if(saveCart){
        const quantity = storedCard[id];
        saveCart.quantity = quantity;
        addedProduct.push(saveCart);
      }
    }
    // console.log(addedProduct);
    setCart(addedProduct);
  },[products])
//   console.log(products);

  const handlers = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    // console.log(product.id);
    addToDb(product.id)
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
      <div className="col-span-1 flex justify-center mt-12">
        
        <Cart cart={cart}></Cart>

        </div>
    </div>
  );
};

export default Shop;
