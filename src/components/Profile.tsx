import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface UserProfile {
  photo: string;
  name: string;
  email: string;
  phone: string;
}

const Profile: React.FC = () => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Verifica se o usuário está logado e busca os dados do usuário logado
        const response = await axios.get('http://localhost:8080/users/me', {
          withCredentials: true, // Envia cookies de sessão
        });
        setUser(response.data); // Salva os dados do usuário no estado
      } catch (error) {
        setError('Erro ao buscar dados do usuário');
        console.error('Erro ao buscar dados do usuário:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []); // O useEffect será chamado apenas uma vez após a montagem do componente

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!user) {
    return <div>Usuário não encontrado.</div>;
  }

  return (
    <div>
      <h1>Perfil de {user.name}</h1>
      <img src={user.photo || 'default-photo-url.jpg'} alt="Foto do Usuário" />
      <p>Email: {user.email}</p>
      <p>Telefone: {user.phone}</p>
    </div>
  );
};

export default Profile;
