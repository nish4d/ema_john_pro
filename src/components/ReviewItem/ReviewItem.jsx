import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan} from "@fortawesome/free-solid-svg-icons";

const ReviewItem = ({data,handleRemoveFromCart}) => {
    // console.log(data);
    const {_id,img,name,price,quantity,ratings,shipping} = data;
    return (
        <div className='p-4 border flex items-center justify-between border-amber-300 mt-4 rounded-md'>
            <div className='flex items-center'>
            <img className='w-16 rounded-md' src={img} alt="" />
            <div className='text-[12px] ml-2'>
                <h2>{name}</h2>
                <p>Price: <span className='text-orange-600'>{price}</span></p>
                <p>Shipping charge: <span className='text-orange-600'>{shipping}</span> </p>
            </div>
            </div>
            <button onClick={()=>handleRemoveFromCart(_id)} className='bg-amber-400 h-10 w-10 rounded-full flex justify-center items-center'>
            <FontAwesomeIcon className='text-orange-600'  icon={faTrashCan} />
            
            </button>
        </div>
    );
};

export default ReviewItem;