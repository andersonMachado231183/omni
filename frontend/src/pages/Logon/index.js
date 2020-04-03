import React from 'react';

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
            <input placeholder="Sua ID"/>
            <button type="submit">Entrar</button>
            <a href="./register">
                <FiLogIn size={16} color="#e02041" />
                Nao tenho cadastro
            </a>
        </section>

        <img src= { imgHeroes } alt="heroes"/>
    </div>
    );
}