import { IconContext } from 'react-icons';
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import CartContext from '../CartContext';
import { useContext } from 'react';
import HeaderCSS from './Header.module.css';
import AuthModal from '../AuthModal/AuthModal';


export function Header() {
    const { items } = useContext(CartContext);
    return (
        <div className={HeaderCSS.header}>
            <Link to='/' className={HeaderCSS.logo}>Logo</Link>
            <div className={HeaderCSS.head2}>
                <input type='search' placeholder='Search' />
                <input type='submit' value="Submit" />
            </div>
            <IconContext.Provider value={{ size: '30px' }}>
                <Link to='/checkout'>
                    <div className={HeaderCSS.cart}>
                        <IoCartOutline />
                        <span>{items.length}</span>
                    </div>
                </Link>
            </IconContext.Provider>
            <div className={HeaderCSS.log}>
                <AuthModal className={HeaderCSS.button} />
                <div className={HeaderCSS.button}><a href="#" target="_self">Register</a></div>
            </div>
        </div>
    )
}