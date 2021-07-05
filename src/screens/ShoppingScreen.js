import React, { useState } from 'react';
import logo from '../images/logo.png';
import data from '../data';
import CardCategory from '../components/CardCategory';
import Buttons from '../components/Buttons';

export default function ShoppingScreen(props) {
    /*Search product by category is made by the parameter in the url*/
    const firstCategory = window.location.pathname.split("/").pop();

    /*Variable to call component*/
    const type = '/product';

    /*Import data from data file */
    const categories = data.category;
    const products = data.products;

    /*Variables for navegation*/
    const nextPage = "/payment";
    const previousPage = "/shop";
    const content = ['pagar', 'cancelar orden']

    /*Custom title category*/
    const [categoryToShow, setCategoryToShow] = useState(categories[firstCategory - 1].name);
    const setValueCategory = (categoryId, categoryName) => {
        setCategoryToShow(categoryName);
        props.history.push(`/shop/${categoryId}`)
    };

    return (
        <div>
            <div className="banner2">
                <img src={logo} alt="logo" className="logo-banner" />
            </div>
            <div className="navbar-shopping">
                {categories.map(category => (
                    <img className="navbar-image" key={category._id} src={category.image} alt='category' onClick={() => setValueCategory(category._id, category.name)} />
                ))}
            </div>
            <h2 className="screen-title">{categoryToShow}</h2>
            <div className="product-button-container">
                <div className="cards-box-container-products">
                    {products.filter(product => product.category === categoryToShow).map(product => (
                        <CardCategory key={product._id} id={product._id} name={product.name} image={product.image} type={type} detail={true} category={false}></CardCategory>
                    ))}
                </div>
                <div className="buttons-container">
                    <Buttons page={nextPage} content={content[0]} next={true} />
                    <Buttons page={previousPage} content={content[1]} next={false} />
                </div>
            </div>
        </div >
    );
};
