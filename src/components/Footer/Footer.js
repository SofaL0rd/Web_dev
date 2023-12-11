import { Link } from "react-router-dom"
import "./Footer.css"

export function Footer() {
    return (
        <div className='footer'>
            <footer>
                <div><Link to="/about" >About Us</Link></div>
                <div><a href="#" target="_blank">Term of use</a></div>
            </footer>
        </div>
    )
}