import React, { useState } from 'react';
import { Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    modal: {
        position: 'absolute',
        width: '20%',
        backgroundColor: '#ffffff',
        borderRadius: '10px',
        border: 'none',
        padding: '16px 32px 24px',
        top: '30%',
        left: '30%',
    },
    title: {
        marginBottom: '10px',
        textDecoration: 'underline'
    }
}));
export default function ModalDetail(props) {

    const detallesCompra = props.detalles;

    const styles = useStyles();

    const [modal, setModal] = useState(false);

    const openCloseModal = () => {
        setModal(!modal);
    }

    const body = (
        < div className={styles.modal} >
            <h2 className={styles.title}>Detalle de la compra</h2>
            <ul>
                {detallesCompra.map(producto => (<li key={producto} className={styles.liModal}>{producto}</li>))}
            </ul>
        </div >
    );

    return (
        <div>
            <button className="next button-class" onClick={openCloseModal}>Ver detalle</button>
            <Modal open={modal} onClose={openCloseModal}>
                {body}
            </Modal>
        </div>
    )
};
