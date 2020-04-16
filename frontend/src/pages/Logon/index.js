import React, { useState } from 'react';
import { Link , useHistory} from 'react-router-dom';

import './styles.css';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';
import imgHeroes from '../../assets/heroes.png';
import imgLogo from '../../assets/logo.svg';

export default function Logon(){
    const [ id, setId ] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();
        

        try {
            const response = await api.post('sessions', { id });

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
            history.push('/profile');
        } catch (err) {
            alert('Falha no login, tente novamente.');
        }
    }

    return(
    <div className="logon-container">
        <section className="form">
            <img src={ imgLogo } alt="logo"/>
            <form onSubmit ={handleLogin }>
                <h1>Faça seu logon</h1>
            <input className="id"  value={ id } onChange={ e => setId(e.target.value)}
             placeholder="Sua ID"/>
            <button className="button" type="submit">Entrar</button>
            <Link className="back-link" to="./register">
                <FiLogIn size={16} color="#e02041" />
                Nao tenho cadastro
            </Link>
            </form>

        </section>
        <img src= { imgHeroes } alt="heroes"/>
    </div>
    );
}