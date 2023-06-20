import { useState } from 'react';
import './Shop.css'
import { useEffect } from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([])
const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const cartHandle = (product) => {
        // console.log(product);
        const newCart = [...cart, product]
        setCart(newCart)
    }

    return (
        <div className="products">
            <div className='grid grid-cols-3 my-16'>
                {
                    products.map(product => <Product key={product.id} product={product} cartHandle={cartHandle}></Product>)
                }
            </div>
            <div className='bg-[#FF99004D] '>
                <h2 className='text-xl text-center mt-7'>Order summary</h2>
                <div className='py-12 px-3'>
                    <p>Selected Items: {cart.length} </p>
                </div>
            </div>
        </div>
    );
};

export default Shop;