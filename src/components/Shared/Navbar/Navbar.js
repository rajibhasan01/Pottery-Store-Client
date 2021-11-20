import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as FiIcons from 'react-icons/fi';
import * as AiIcons from 'react-icons/ai';
import * as GaIcons from 'react-icons/gi';
import * as MdIcons from 'react-icons/md';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import { useHistory } from 'react-router';
import './Navbar.css';
import useAuth from '../../../hooks/useAuth';
import Cart from '../Cart/Cart';

function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const history = useHistory();
    const { user, logout } = useAuth();
    const [scrolling, setScrolling] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    const handlePage = () => {
        history.push('/login');
    }

    window.onscroll = () => {
        if (window.scrollY > 20) {
            setScrolling(true);
        }
        else {
            setScrolling(false);
        }
    };


    const [lgShow, setLgShow] = useState(false);
    const [placeOrder, setPlaceOrder] = useState(false);

    const handleClose = () => {
        setLgShow(false);
        setPlaceOrder(false);
    };

    const handleShow = () => {
        setLgShow(true);
    };

    const handlePlaceOrder = () => {
        setPlaceOrder(true);
    };

    const handleBackToCart = () => {
        setPlaceOrder(false);
    };

    const handleDashboard = () => {
        history.push('/dashboard');
    };

    // get cart data from local storage
    const getCart = JSON.parse(localStorage.getItem(`${user.email}_cart`));


    return (
        <>
            <IconContext.Provider value={{ color: '#000' }}>
                <div className={scrolling ? '' : 'nav-color'}>
                    <div className={scrolling ? "navbar" : "navbar-hidebg"}>
                        <Link to='#' className='menu-bars text-decoration-none'>
                            <FaIcons.FaBars onClick={showSidebar} className={scrolling ? 'text-dark fs-3' : 'Btext-color fs-3'} />

                            <h3 className="ms-3 d-none text-color-second d-md-inline stylishFont"><span className="title-color mx-0 stylishFont">Pot</span>Tery<GaIcons.GiPaintedPottery /></h3>

                        </Link>
                        <div className="me-0 mt-2 ms-auto d-flex text-color-second">
                            <FaIcons.FaPhoneAlt className="d-none d-md-block mt-2" />
                            <p className="me-5 text-muted fw-lighter ms-3 d-none d-md-block mt-1">01754-063712</p>

                            {
                                user.email && <div className="logoutName mt-1"><MdIcons.MdDashboardCustomize className="me-2 mt-1" /><p className="me-3 text-muted px-2 rounded fw-light login-cursor" onClick={handleDashboard}>Dashboard</p>
                                </div>
                            }

                            <FaIcons.FaUser className="me-2 mt-2" />
                            {
                                !user.email ? <p className="me-5 fw-light mt-1 text-muted login-cursor" onClick={handlePage}>Login</p>
                                    :
                                    <>
                                        <div className="logoutName mt-1"><p className="text-muted pe-3"> {user.displayName} </p><p className="me-3 bg-secondary text-white px-2 rounded fw-light login-cursor" onClick={logout}>Logout</p>
                                        </div>

                                        <p onClick={handleShow}><FiIcons.FiShoppingCart className="me-4 fs-5 mt-2 cartCursor" /> {getCart?.length > 0 && <span className="notification">{getCart?.length}</span>}</p>

                                    </>

                            }

                        </div>

                    </div>
                    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                        <ul className='nav-menu-items' onClick={showSidebar}>
                            <li className='navbar-toggle mt-3'>
                                <Link to='#' className='menu-bars fs-3'>
                                    <AiIcons.AiOutlineClose />
                                </Link>

                                <h3 className="ms-3 pt-1 text-color-second stylishFont"><span className="title-color mx-0 stylishFont">Pot</span>Tery<GaIcons.GiPaintedPottery /></h3>
                            </li>
                            {SidebarData.map((item, index) => {
                                return (
                                    <li key={index} className={user.email ? item.cname : item.cName}>
                                        <Link to={item.path}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>

            </IconContext.Provider>

            <Cart
                handleClose={handleClose}
                handleShow={handleShow}
                lgShow={lgShow}
                products={getCart}
                placeOrder={placeOrder}
                handlePlaceOrder={handlePlaceOrder}
                handleBackToCart={handleBackToCart}
            />
        </>
    );
}

export default Navbar;