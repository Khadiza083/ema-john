import { useState } from 'react';
import './Shop.css'
import { useEffect } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

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
            <div>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;