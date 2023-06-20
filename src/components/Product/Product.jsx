/* eslint-disable react/prop-types */
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Product = ({ product, cartHandle }) => {
    // console.log(product);
    const { name, price, seller, ratings, img } = product


    


    return (
        <div className="ms-24 w-[250px] my-5 border border-gray-200 rounded-lg relative h-[450px]">
            <div className="p-2">
                <img src={img} alt="" />
                <h4 className="text-lg mt-3">{name}</h4>
                <p>Price : ${price}</p>
                <p className="mt-5"><small>Manufacturer: {seller}</small></p>
                <p><small>Ratings: {ratings}</small></p>
            </div>
            <button onClick={ () => cartHandle(product)} className="bg-[#FFE0B3] w-full absolute bottom-0 border border-[#95A0A7] rounded-b-lg py-3 hover:bg-orange-300">Add to Cart <FontAwesomeIcon icon={faCartPlus} /></button>
        </div>
    );
};

export default Product;