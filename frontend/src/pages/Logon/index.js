import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import { FiLogIn } from 'react-icons/fi';

import imgHeroes from '../../assets/heroes.png';
import imgLogo from '../../assets/logo.svg';

export default function Logon(){
    return(
    <div className="logon-container">
        <section className="form">
            <img src={ imgLogo } alt="logo"/>
            <form><h1>Faça seu logon</h1></form>
            <input className="id" placeholder="Sua ID"/>
            <button className="button" type="submit">Entrar</button>
            <Link className="back-link" to="./register">
                <FiLogIn size={16} color="#e02041" />
                Nao tenho cadastro
            </Link>
        </section>
        <img src= { imgHeroes } alt="heroes"/>
    </div>
    );
}