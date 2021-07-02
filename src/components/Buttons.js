import React from 'react';
import { Link } from 'react-router-dom';

export default function Buttons(props) {
    let colorClass = props.next;
    const goPage = props.page;
    const content = props.content;
    let buttonClass = "next button-class";

    if (colorClass === false) {
        buttonClass = "back button-class"
    };

    return (
        <div>
            <Link to={goPage} className="button-link">
                <button className={buttonClass} >{content}</button>
            </Link>
        </div >
    )
};
