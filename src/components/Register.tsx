import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Register.css';
import Footer from './estaticos/footer/Footer';
import NavSecurity from './estaticos/navbar/NavSecurity';

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [photo, setPhoto] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }

    // Validação de senha (mínimo 8 caracteres, 1 maiúscula, 1 número, 1 caractere especial)
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(password)) {
      setError('A senha deve ter no mínimo 8 caracteres, uma letra maiúscula, um número e um caractere especial.');
      return;
    }

    try {
      setMessage('Usuário cadastrado com sucesso!');
      setError('');
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      setError('Usuário não cadastrado. Tente novamente.');
      setMessage('');
    }
  };

  return (
    <>
    <NavSecurity />
    <div className="register-container">
      <div className="matrix-image"></div>
      <div className="register-content">
        <h2>Registre-se</h2>
        <input
          type="text"
          placeholder="Nome de usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Telefone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="text"
          placeholder="Foto URL"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirmar Senha"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button className="register-button" onClick={handleRegister}>
          Cadastrar
        </button>
        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Register;
