import React, { Link } from 'react';
import { Button } from '@material-ui/core';

export default function DetailButton(props) {
    const { product } = props;
    return (
        <div>
            <Link to={`/product/${product._id}`}>
                <Button>Detalles</Button>
            </Link>
        </div>
    )
};
