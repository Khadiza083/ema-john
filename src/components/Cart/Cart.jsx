/* eslint-disable react/prop-types */


const Cart = ({cart}) => {

    console.log(cart)

    const price = cart.reduce((initial, sum) => initial + sum.price, 0)
    const shipping = cart.reduce((initial, sum) => initial + sum.shipping, 0)
    const tax = price * 7 /100
    return (
        <div className='bg-[#FF99004D]  sticky top-0'>
            <h2 className='text-xl text-center pt-7' >Order summary</h2>
                <div className='py-12 px-3 leading-9'>
                    <p>Selected Items: {cart.length} </p>
                    <p>Total Price: ${price}</p>
                    <p>Total Shipping Charge: ${shipping}</p>
                    <p>Tax: ${tax}</p>
                    <h4 className="text-lg font-semibold">Grand Total: ${price + shipping + tax}</h4>

                </div>
        </div>
    );
};

export default Cart;