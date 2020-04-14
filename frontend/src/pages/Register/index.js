import React, { useState }from 'react';
import { Link , useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import '../../global.css';
import './styles.css';
import imgLogo from '../../assets/logo.svg';



export default function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [cidade, setCidade] = useState(''); 
    const [uf, setUf] = useState(''); 

    const history = useHistory();

   async function handleRegister(e){
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            cidade,
            uf,
        };
    try{
     const response =   await api.post('ongs', data);
     alert(`Seu ID de acesso : ${response.data.id}`);
     history.push('/');

    } catch (err) {
        alert('Erro de cadastro. Tente novamente.');
    }
}

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
                <form onSubmit = { handleRegister }>
                    <input 
                        placeholder="Nome da ONG" className="id" 
                        value= {name} onChange= {e =>setName(e.target.value)}/>
                    <input 
                        placeholder="E- mail" type="email" className="id"
                        value= {email} onChange= {e =>setEmail(e.target.value)} />
                    <input 
                        placeholder="Whatsapp" className="id"
                        value= {whatsapp} onChange= {e =>setWhatsapp(e.target.value)} />
                    <div className="input-group">
                        <input
                             placeholder="Cidade" className="id"
                             value= {cidade} onChange= {e =>setCidade(e.target.value)}/>
                        <input 
                             placeholder="UF" className="id" style={{ width : 80 }} 
                             value= {uf} onChange= {e =>setUf(e.target.value)}/>
                    </div>
                    <button className="button" type="submit">
                        Cadastrar
                    </button>
                </form>
            </div>   
        </div>
    );
};