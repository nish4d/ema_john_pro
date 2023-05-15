import React, { useEffect, useState } from "react";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import { Link, useLoaderData } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const { totalProducts } = useLoaderData();

  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  // const pageNumbers = []
  // for(let i = 0; i < totalPages; i++) {
  //   pageNumbers.push(i)
  // }

  const pageNumbers = [...Array(totalPages).keys()];

   /**
     * Done: 1. Determine the total number of items: 
     * TODO: 2. Decide on the number of items per page: 
     * DONE: 3. Calculate the total number of pages: 
     * DONE: 4. Determine the current page:
     * 
    */
 
  // useEffect(() => {
  //   fetch("http://localhost:5000/products")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, []);


  useEffect(() => {
    async function fetchData() {
        const response = await fetch(`http://localhost:5000/products?page=${currentPage}&limit=${itemsPerPage}`);

        const data = await response.json();
        setProducts(data);
    }
    fetchData();
}, [currentPage, itemsPerPage]);


  useEffect(() => {
    // console.log(products);
    const storedCard = getShoppingCart();
    const ids = Object.keys(storedCard);
    fetch("http://localhost:5000/productsByIds", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(ids),
  })
  .then(res=> res.json())
  .then(cartProducts => {


    const addedProduct = [];
    // console.log(storedCard);
    for (const id in storedCard) {
      // console.log(id);
      const saveCart = cartProducts.find((data) => data._id === id);
      // console.log(saveCart);
      if (saveCart) {
        const quantity = storedCard[id];
        saveCart.quantity = quantity;
        addedProduct.push(saveCart);
      }
    }
    // console.log(addedProduct);
    setCart(addedProduct);
  })
    
  }, []);
  // console.log(cart);

  const handlers = (product) => {
    // const newCart = [...cart, product];
    let newCart = [];
    const exist = cart.find((pd) => pd._id === product._id);
    if (!exist) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      exist.quantity = exist.quantity + 1;
      const reaming = cart.filter((pd) => pd._id !== product._id);
      newCart = [...reaming, exist];
    }

    setCart(newCart);
    // console.log(product._id);
    addToDb(product._id);
  };

  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };
  //   console.log(cart.length);

  const options = [5, 10, 20];
  function handleSelectChange(event) {
    setItemsPerPage(parseInt(event.target.value));
    setCurrentPage(0);
}


  return (
    <>
      <div className="grid grid-cols-6">
        <div className="col-span-5 grid grid-cols-2 md:grid-cols-3 gap-3">
          {products.map((product) => (
            <Product
              product={product}
              key={product._id}
              handlers={handlers}
            ></Product>
          ))}
        </div>
        <div className="col-span-1 flex justify-center mt-12">
          <Cart cart={cart} handleCart={handleClearCart}>
            <Link to="/orders">
              <button>
                <span>Review Order</span>{" "}
                <FontAwesomeIcon icon={faCreditCard} />
              </button>
            </Link>
          </Cart>
        </div>
      </div>
      {/* pagination */}
      <div className="text-center space-x-4 my-12">
        <p>Current Page: {currentPage+1}</p>
        {pageNumbers.map((number) => (
          <button
            className={currentPage === number ? 'btn btn-warning': 'btn'}
            key={number}
            onClick={() => setCurrentPage(number)}
          >
            {number+1}
          </button>
        ))}
        <select className="px-3 py-2 bg-warning rounded-md" value={itemsPerPage} onChange={handleSelectChange}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Shop;
