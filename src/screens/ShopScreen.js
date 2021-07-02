import React from 'react';
import logo from '../images/logo.png';
import CardCategory from '../components/CardCategory';
import Buttons from '../components/Buttons';
import data from '../data';

export default function ShopScreen() {
    const categories = data.category;
    const nextPage = "/shop/1";
    const previousPage = "/";
    const content = ['pagar', 'cancelar orden'];

    return (
        <div>
            <div className="banner1">
                <img src={logo} alt="logo" className="logo-banner" />
            </div>
            <p className="screen-title">ELIGE UNA OPCIÓN</p>
            <div className="cards-box-container">
                {categories.map(category => (
                    <CardCategory key={category._id} id={category._id} name={category.name} image={category.image} detail={false} typeCategory={true} />
                ))}
            </div>
            <div className="buttons-container">
                <Buttons page={nextPage} content={content[0]} next={true} />
                <Buttons page={previousPage} content={content[1]} next={false} />
            </div>
        </div>
    )
};
