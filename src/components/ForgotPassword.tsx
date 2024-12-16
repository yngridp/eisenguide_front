import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/ForgotPassword.css';
import Footer from './estaticos/footer/Footer';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  
  const userId = localStorage.getItem('userId'); 
  const handleUpdatePassword = async () => {
    if (newPassword !== confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }

    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(newPassword)) {
      setError('A senha deve ter no mínimo 8 caracteres, uma letra maiúscula, um número e um caractere especial.');
      return;
    }

    if (!userId) {
      setError('Usuário não encontrado.');
      return;
    }

    try {
      
      await axios.put(`https://eisenguide-deploy-render.onrender.com/users/update-password`, {
        email, 
        novaSenha: newPassword,
      });

      setMessage('Senha atualizada com sucesso!');
      setError('');

      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error: any) {
      setError('Erro ao atualizar senha. Verifique os dados e tente novamente.');
      setMessage('');
    }
  };

  return (
    <>
      <div className="forgot-password-container">
        <div className="forgot-password-form">
          <h2>Recuperar Senha</h2>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Nova Senha"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirmar Nova Senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button className="recover-button" onClick={handleUpdatePassword}>
            Atualizar Senha
          </button>

          {message && <p className="success-message">{message}</p>}
          {error && <p className="error-message">{error}</p>}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ForgotPassword;
