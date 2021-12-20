import React from 'react';
import AppStyle from "./HeaderStyle.module.css";
import {NavLink} from "react-router-dom";

const Header = () => {

    const styleActive = ({isActive}) => (
      isActive ? `${AppStyle.active} ${AppStyle.link} ` : AppStyle.link
    );


    return (
        <header className={AppStyle.header}>
            <img
                src="/img/logo.png" alt=""
                alt="Logotipo de la aplicación"
                className={AppStyle.imgLogo}
            />

            <nav>
                <ul className={AppStyle.ulMenu}>
                    <li>
                        <NavLink to="/" className={styleActive}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/books/" className={styleActive}>Books</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about/" className={styleActive}>About Us</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;