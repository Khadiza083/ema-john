

const Product = ({ product }) => {
    console.log(product);
    const { name, price, seller, ratings, img } = product
    return (
        <div className="ms-24 w-[250px] my-24 border border-gray-200 rounded-lg relative h-[450px]">
            <div className="p-2">
                <img src={img} alt="" />
                <h4 className="text-lg mt-3">{name}</h4>
                <p>Price : ${price}</p>
                <p className="mt-5"><small>Manufacturer: {seller}</small></p>
                <p><small>Ratings: {ratings}</small></p>
            </div>
            <button className="bg-[#FFE0B3] w-full absolute bottom-0 py-3 hover:bg-orange-300">Add to Cart</button>
        </div>
    );
};

export default Product;