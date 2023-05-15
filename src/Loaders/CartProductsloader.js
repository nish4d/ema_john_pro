import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
  const storeCart = getShoppingCart();
  const ids = Object.keys(storeCart);
  // console.log(ids);

  const loadedProducts = await fetch("http://localhost:5000/productsByIds", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(ids),
  });
  const products = await loadedProducts.json();

  const saveCart = [];
  // console.log(storeCart);
  for (const id in storeCart) {
    const addedCart = products.find((p) => p._id === id);
    if (addedCart) {
      const quantity = storeCart[id];
      addedCart.quantity = quantity;
      saveCart.push(addedCart);
    }
  }
  return saveCart;
};

export default cartProductsLoader;
