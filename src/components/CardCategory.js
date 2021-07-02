import React from 'react';
import { Link } from 'react-router-dom';

export default function CardCategory(props) {

    let productClass = '';
    if (props.detail) {
        productClass = ' product-image'
    };
    const cardClass = "card-image";
    const cardStyle = cardClass + productClass;
    return (
        <div className="card-box">
            {props.typeCategory ?
                (<Link to={`/shop/${props.id}`} className="card-items-container">
                    <img src={props.image} alt={props.name} className="card-image" />
                </Link>) :
                (<img src={props.image} alt={props.name} className={cardStyle} />)
            }
            <p className="card-title">
                {props.name}
            </p>
            {props.detail && (
                <Link to={`/product/${props.id}`}>
                    <button className="next button-class detail-button">Detalles</button>
                </Link>
            )}
        </div>
    );
};
