import React from 'react';
import logo from '../images/logo.png';
import data from '../data.js';
import Buttons from '../components/Buttons.js';

export default function ProductScreen() {
    /*Search data of the product is made by the parameter in the url*/
    const productId = window.location.pathname.split("/").pop();
    const product = (data.products.filter(product => product._id === productId))[0];

    /*Variables for navegation*/
    const previousPage = '/shop/1';
    const content = "Volver";

    return (
        <div>
            <div className="banner2">
                <img src={logo} alt="logo" className="logo-banner" />
            </div>
            <h2 className="screen-title">{product.name}</h2>
            <div className="product-content">
                <div className="col-1">
                    <img className="img-medium" src={product.image} alt={product.name}></img>
                    <img className="img-medium" src={product.aditional} alt={product.name}></img>
                </div>
                <ul className="col-2">
                    <li className="product-info">
                        <h2> Precio: ${product.price}</h2>
                    </li>
                    <li className="product-info">
                        <h2>Descripción</h2>
                        <p>{product.description}</p>
                    </li>
                </ul>
            </div>
            <div className="button-product-screen">
                <Buttons page={previousPage} next={false} content={content} />
            </div>
        </div>
    );
};
