import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Navbar,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";
import './Menu.css';
import { Button } from './Button';

class HeaderComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
                 
        }
    }

    render() {
    return (
        <>
            <NavbarView/>
        </>
    );
    }
}

function NavbarView(){
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = ()=>setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton =()=>{
        if(window.innerWidth<=960){
            setButton(false);
        }else{
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
      }, []);
    
    window.addEventListener('resize',showButton);

    return (
    <>
        <nav className="Navbar bg-dark fixed-top">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    Home Chef <i className="fab fa-typo3"></i>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'> 
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'> 
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Speciality
                        </Link>
                    </li>
                    <li className='nav-item'> 
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Chef
                        </Link>
                    </li>
                    <li className='nav-item'> 
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Menu
                        </Link>
                    </li>
                    <li className='nav-item'> 
                        <Link to='/login' className='nav-links' onClick={closeMobileMenu}>
                            Login
                        </Link>
                    </li>
                    <li className='nav-item'> 
                        <Link to='/add-chef/_add' className='nav-links' onClick={closeMobileMenu}>
                            Chef Register
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </>
    );
}



export default HeaderComponent