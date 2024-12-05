import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Login.css';
import Footer from './estaticos/footer/Footer';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [notification, setNotification] = useState({ message: '', type: '' });
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/auth/login', { email, password });
      
      const token = response.data.token;
      const userId = response.data.userId; 
      
      localStorage.setItem('authToken', token);
      localStorage.setItem('userId', userId); 

      showNotification('Login feito com sucesso!', 'success');
      
      // Redireciona para o Dashboard após 1 segundo
      setTimeout(() => navigate('/dashboard'), 1000);
    } catch (error: any) {
      // Exibe a mensagem de erro caso as credenciais estejam incorretas
      showNotification('Credenciais inválidas', 'error');
    }
  };

  // exibir notificações de sucesso ou erro
  const showNotification = (message: string, type: string) => {
    setNotification({ message, type });
    setTimeout(() => setNotification({ message: '', type: '' }), 3000);
  };

  return (
    <>
      <div className="login-container">
        <div className="login-form">
          <h1>Login</h1>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <p className="forgot-password-link" onClick={() => navigate('/forgot-password')}>
            Esqueceu a senha? Clique aqui
          </p>

          <button onClick={handleLogin}>Entrar</button>

          <p>
            Não tem conta? Cadastre-se e comece a organizar suas tarefas de forma eficiente.
          </p>

          <button className="signup-button" onClick={() => navigate('/register')}>
            Criar conta
          </button>
        </div>

        {notification.message && (
          <div className={`notification ${notification.type}`}>
            {notification.message}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Login;
