import React , { useState  } from 'react';
import api from '../../services/api';
import { Link , useHistory} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css';
import imgLogo from '../../assets/logo.svg';

export default function NewIncident(){
    const [ title ,setTitle ] = useState('');
    const [ description , setDescription ] = useState('');
    const [ value , setValue ] = useState('');
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();

    async function handleNewIncident(e){
        e.preventDefault();
        const data = {
            title,
            description,
            value,
        };

         try {
            await api.post('incidents', data, {
                headers:{
                Authorization : ongId,
             }
            });
            history.push('/profile');
            
        } catch (error) {
            alert('Erro ao cadastrar caso, tente novamente.');
        }
    }

    return(
        <div className="new-incident-container">
        <div className="content">
            <section>
                <img src= { imgLogo } alt="Be the hero"/>

                <h1>Cadastrar novo caso</h1>
                <p>Descreva o caso detalhadamente para encomntrar um herói 
                    para resolver isso. 
                </p>
                <Link className="back-link" to="/profile">
                    <FiArrowLeft size={16} color="#e02041" />
                    Voltar para Home
                </Link>
            </section>
            <form onSubmit={ handleNewIncident }>
                <input 
                    value={title} onChange={e => setTitle(e.target.value)} 
                    placeholder="Titulo do caso" className="id"
                />
                <textarea 
                    value={description} onChange={e => setDescription(e.target.value)} 
                    placeholder="Descrição">
                </textarea>
                        
                <input 
                    value={value} onChange={e => setValue(e.target.value)} 
                    placeholder="Valor em Reais" className="id"
                />
                
                <button className="button" type="submit">
                    Cadastrar
                </button>
            </form>
        </div>   
    </div>

    );
}