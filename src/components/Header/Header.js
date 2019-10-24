import React from 'react';
import './style/header.sass';

const Header = () => {

    return (
        <header>
            <div className="header__border-top"/>

            <div className="header__container">

                <a className="header__logo"
                   href="#"
                />

                <span>Brands</span>

                <nav>
                    <a className
                       href="#">
                        Home
                    </a>
                    <a className
                       href="#">
                        Products
                    </a>
                    <a className
                       href="#">
                        Campaigns
                    </a>
                    <a className
                       href="#">
                        Orders
                    </a>
                    <a className
                       href="#">
                        Performance
                    </a>
                </nav>
            </div>
        </header>

        )
};

export default Header;