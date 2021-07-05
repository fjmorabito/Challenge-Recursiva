import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Buttons from '../components/Buttons';
import ModalDetail from '../components/ModalDetail';


export default function PaymentScreen() {

    /*Variables for navegation and different buttons text fields*/
    const nextPage = "/";
    const previousPage = "/shop/1";
    const content = 'pagar';

    /*Template to show on Modal*/
    const detalleCompra = ["Simple", "Bañado", "Copa helada"]

    /*Currencies part*/
    const ars = '1';
    const [currency, setCurrency] = useState(ars);
    const [dolar, setDolar] = useState('100');
    const [dolarBlue, setdolarBlue] = useState('150');
    const totalPayment = '$ ' + (300 / (parseInt(currency))).toFixed(2);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await Axios.get('https://www.dolarsi.com/api/api.php?type=valoresprincipales');
            setDolar(data[0].casa.compra);
            setdolarBlue(data[1].casa.compra);
        };
        fetchData();
    }, []);

    return (
        <div className="cover-page payment-page">
            <img src="./images/logo.png" alt="logo" className="logo-payment" />
            <div className="forms-container">
                <div className="form-1-container">
                    <div className="number-cont">
                        <div className="result">
                            <p className="payment-title">Total a pagar:</p>
                            <p className="total-payment">{totalPayment}</p>
                        </div>
                        <div className="currency-container">
                            <button onClick={() => setCurrency(dolar)}>DOLAR OFICIAL</button>
                            <button onClick={() => setCurrency(dolarBlue)}>DOLAR BLUE</button>
                            <button onClick={() => setCurrency(ars)}>ARS</button>
                        </div>
                    </div>
                    <div className="button-cont">
                        <ModalDetail detalles={detalleCompra}></ModalDetail>
                        <Link to={previousPage}>
                            <button className="back button-class">Cancelar Orden</button>
                        </Link>
                    </div>
                </div>
                <form className="form-2-container">
                    <p className="payment-title">
                        Formas de Pago
                    </p>
                    <div className="tarjetas-container">
                        <img src="./images/tarjetas.png" alt="tarjetas" className="tarjeta1"></img>
                        <img src="./images/tarjetas2.png" alt="tarjetas2" className="tarjeta2"></img>
                    </div>
                    <ul className="input-label-container">
                        <li className="li-item input1">
                            <div className="label-cont">
                                <label className="form-label">Nombre del titular</label>
                            </div>
                            <input type="text" id="name" className="form-input"></input>
                        </li>
                        <li className="li-item input1">
                            <div className="label-cont">
                                <label className="form-label">Número de la tarjeta</label>
                            </div>
                            <input type="number" id="card" className="form-input"></input>
                        </li>
                        <li className="li-item">
                            <div className="label-cont">
                                <label className="form-label">Fecha de expiración</label>
                            </div>
                            <div className="input2">
                                <input type="number" className="form-input short"></input>
                                <span className="barra">/</span>
                                <input type="number" className="form-input short"></input>
                            </div>
                        </li>
                        <li className="li-item">
                            <div className="label-cont">
                                <label className="form-label">Código de seguridad</label>
                            </div>
                            <input type="number" id="card" className="form-input short"></input>
                        </li>
                    </ul>
                    <div className="payment-button-container">
                        <Buttons page={nextPage} next={true} content={content}></Buttons>
                    </div>
                </form>
            </div>
        </div >
    )
}
