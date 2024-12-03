import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Contact.css'; // Crie esse arquivo de estilo
import Footer from './estaticos/footer/Footer';
import Navbar from './estaticos/navbar/Navbar';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    // Verificação de campos obrigatórios
    if (!name || !email || !comment) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    try {
      // Dados para envio via EmailJS
      const data = {
        service_id: 'service_udigerr', // Substitua pelo seu Service ID
        template_id: 'template_hexcxst', // Substitua pelo seu Template ID
        user_id: 'G2MPIaTUMhDYBbSU_', // Substitua pela sua chave pública
        template_params: {
          name: name,
          email: email,
          message: comment,
        },
      };

      // Enviando a requisição via Axios
      const response = await axios.post('https://api.emailjs.com/api/v1.0/email/send', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Verifica a resposta da API
      if (response.status === 200) {
        setMessage('Mensagem enviada com sucesso!');
        setError('');
        setTimeout(() => {
          navigate('/dashboard');
        }, 2000);
      }
    } catch (error) {
      setError('Não foi possível enviar a mensagem. Tente novamente.');
      setMessage('');
    }
  };

  return (
    <>
      <Navbar />
      <div className="contact-container">
        <div className="matrix-image4"></div>
        <div className="contact-content">
          <h2>Contate-nos</h2>
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Comentário"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <button className="contact-button" onClick={handleSubmit}>
            Enviar
          </button>
          {message && <p className="success-message">{message}</p>}
          {error && <p className="error-message">{error}</p>}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
