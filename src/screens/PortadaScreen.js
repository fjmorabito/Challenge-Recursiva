import React from 'react';
import { Link } from 'react-router-dom';

export default function PortadaScreen() {
    return (
        <div className="cover-page">
            <img src="./images/logo.png" alt="logo" className="logo" />
            <Link to="/shop">
                <button className="shop-button">SHOP NOW</button>
            </Link>
        </div >
    )
};
