import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async() => {
    const loadedProducts = await fetch('products.json')
    const products = await loadedProducts.json();

    const storeCart = getShoppingCart();


    const saveCart = [];
    // console.log(storeCart);
    for(const id in storeCart){
        const addedCart = products.find(p => p.id === id);
        if(addedCart){
            const quantity = storeCart[id];
            addedCart.quantity = quantity;
            saveCart.push(addedCart);
        }
    }
    return saveCart;
}

export default cartProductsLoader;