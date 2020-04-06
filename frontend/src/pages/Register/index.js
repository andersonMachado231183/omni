import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import '../../global.css';
import './styles.css';
import imgLogo from '../../assets/logo.svg';


export default function Register(){
    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src= { imgLogo } alt="Be the hero"/>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e 
                        ajude pessoas a encontrarem os casos da sua ONG.
                    </p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#e02041" />
                        Nao tenho cadastro
                    </Link>
                </section>
                <form >
                    <input placeholder="Nome da ONG" className="id"/>
                    <input placeholder="E- mail" type="email" className="id"/>
                    <input placeholder="Whatsapp" className="id"/>
                    <div className="input-group">
                        <input placeholder="Cidade" className="id"/>
                        <input placeholder="UF" className="id" style={{ width : 80 }} />
                    </div>
                    <button className="button" type="submit">
                        Cadastrar
                    </button>
                </form>
            </div>   
        </div>
    );
};