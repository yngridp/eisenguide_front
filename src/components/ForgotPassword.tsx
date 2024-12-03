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

  // Suponha que o ID do usuário está armazenado no localStorage
  const userId = localStorage.getItem('userId'); // Ou de onde você estiver recuperando o ID

  const handleUpdatePassword = async () => {
    if (newPassword !== confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }

    if (!userId) {
      setError('Usuário não encontrado.');
      return;
    }

    try {
      // Envia a requisição PUT para o backend com ID na URL e a nova senha no corpo da requisição
      await axios.put('http://localhost:8080/users/update-password', {
        email,
        novaSenha: newPassword,
      });

      setMessage('Senha atualizada com sucesso!');
      setError('');

      // Redireciona para a página de login após 2 segundos
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
    <Footer></Footer></>
  );
};

export default ForgotPassword;
