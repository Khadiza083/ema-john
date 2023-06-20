import logo from './../../assets/images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className="bg-black w-full px-24 flex justify-between py-5 items-center">
            <img src={logo} alt="" />

            <div className='text-white'>
                <a href="/order">Order</a>
                <a href="/review">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;
