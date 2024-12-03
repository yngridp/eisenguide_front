import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/AddTaskPage.css'; // Importando o arquivo CSS

const AddTaskPage: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [objective, setObjective] = useState('')
  const navigate = useNavigate();

  const categories = [
    'IMPORTANTE_E_URGENTE',
    'IMPORTANTE_MAS_NAO_URGENTE',
    'URGENTE_MAS_NAO_IMPORTANTE',
    'NAO_URGENTE_NAO_IMPORTANTE',
  ];  

  const addTask = async () => {
    const newTask = {
      title,
      description,
      category,  
      objective,
    };

    try {
      // Envia a requisição POST
      await axios.post('http://localhost:8080/tasks', newTask, {
        headers: {
          'Content-Type': 'application/json', 
        }
      });
      alert('Tarefa adicionada com sucesso!');
      navigate('/dashboard'); 
    } catch (error) {
      console.error("Erro ao adicionar tarefa:", error);
      alert('Erro ao adicionar tarefa');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Criar Tarefa</h1>

        <input
          type="text"
          placeholder="Título da Tarefa"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Selecione a Categoria</option>
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>
              {cat.replace(/_/g, ' ')}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Objetivo"
          value={objective}
          onChange={(e) => setObjective(e.target.value)}
        />
        <button onClick={addTask}>Cadastrar Tarefa</button>
      </div>
    </div>
  );
};

export default AddTaskPage;
