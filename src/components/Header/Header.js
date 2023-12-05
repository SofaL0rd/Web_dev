import { IconContext } from 'react-icons';
import './Header.css';
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import CartContext from '../CartContext';
import { useContext } from 'react';


export function Header() {
    const {items} = useContext(CartContext);
    return (
        <div className="header">
            <Link to='/' className='logo'>Logo</Link>
            <div id="head2">
                <input type='search' placeholder='Search' />
                <input type='submit' value="Submit" />
            </div>
            <IconContext.Provider value={{ size: '30px' }}>
                <Link to='/checkout'>
             <div className='cart'>
                    <IoCartOutline />
                <span>{items.length}</span>
                    </div>
                </Link>
            </IconContext.Provider>
            <div className="log">
                <div className="button"><a href="#" target="_self">Log In </a></div>
                <div className="button"><a href="#" target="_self">Register</a></div>
            </div>
        </div>
    )
}