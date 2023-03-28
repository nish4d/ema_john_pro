import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart} from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const { img, name, seller, ratings, price } = props.product;
  const handlers = props.handlers;
  
  return (
    <div className="m-4">
      <div className="card w-full bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>Price: ${price}</p>
          <p>Manufacturer: {seller}</p>
          <p>Rating: {ratings} Star</p>
          <div className="card-actions">
            <button
              onClick={() => handlers(props.product)}
              className="btn btn-primary"
            >
              Buy Now <FontAwesomeIcon className="ml-2" icon={faShoppingCart} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
