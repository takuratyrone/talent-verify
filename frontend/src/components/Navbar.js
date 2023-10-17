import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import './navbar.css';
import { useState } from "react";

const Navbar = () => {

    // state = { clicked: false };

    const [state, setState] = useState(false);
    const [activeNav, setActiveNav] = useState('#');  

    const handleClick = () => {
        setState(!state);
    }

    return (
        <div className="navigation">
        
        <nav>
            <a href="/">Logo</a>

            <div className="links">
                <ul id="navbar" className={state ? "#navbar active" : "#navbar"}>
                    <li><Link to={'/'} className={activeNav === '#' ? 'navbar-links active' : 'navbar-links'} onClick={() => setActiveNav('#')}>Home</Link></li>
                    <li><Link to={'/company'} className={activeNav === '#about' ? 'navbar-links active' : 'navbar-links'} onClick={() => setActiveNav('#about')}>Company</Link></li>
                    <li><Link to={'/employees'} className={activeNav === '#tickets' ? 'navbar-links active' : 'navbar-links'} onClick={() => setActiveNav('#tickets')}>Employees</Link></li>
                    <li><Link to={'/departments'} className={activeNav === '#contact' ? 'navbar-links active' : 'navbar-links'} onClick={() => setActiveNav('#contact')}>Departments</Link></li>
                    <li><Link to={'/roles'} className={activeNav === '#' ? 'navbar-links active' : 'navbar-links'} onClick={() => setActiveNav('#')}>Roles</Link></li>
                    <li><Link to={'/duties'} className={activeNav === '#' ? 'navbar-links active' : 'navbar-links'} onClick={() => setActiveNav('#')}>Duties</Link></li>
                    
                </ul>
            </div>

            <div><button className="btn btn-primary"><b>Tickets</b></button></div>

            <div id="navbar-mobile" onClick={handleClick}>
                { !state && <i><RxHamburgerMenu className="ham ham-menu"/></i> }
                { state && <i><MdClose className="ham ham-close"/></i> }
                {/* <i id="bar"  className={this.state ? 'fas fas-menu' : 'fas fas-times'}></i> */}
            </div>
            
        </nav>
        </div>
    );
}
 
export default Navbar;