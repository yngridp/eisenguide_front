import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/estaticos/footer/Footer'; 
import '../styles/Home.css';
import '../components/estaticos/footer/Footer.css';

const Home: React.FC = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/login'); 
    }

    return (
        <>
            
            <div className="home-container">
                <div className="matrix-image1"></div>
                <div className="home-content">
                    <h1>Eisenguide</h1>
                    <p>Bem-vindo ao nosso sistema de gestão de tarefas eficaz baseado na Matriz Eisenhower. Organize suas tarefas de forma inteligente, priorizando o que é realmente importante com a Matriz de Eisenhower e tenha mais controle sobre seu tempo e suas tarefas.</p>
                    <button className="start-button" onClick={handleClick}>Comece agora</button>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;
