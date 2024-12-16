import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditTaskPage: React.FC = () => {
  const { taskId } = useParams();  
  const [task, setTask] = useState<any>(null); 
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [objective, setObjective] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    
    const loadTask = async () => {
      try {
        const response = await axios.get(`https://eisenguide-deploy-render.onrender.com/tasks/${taskId}`);
        setTask(response.data); 
        setTitle(response.data.title);
        setDescription(response.data.description);
        setCategory(response.data.category);
        setObjective(response.data.objective);
      } catch (error) {
        console.error("Erro ao carregar a tarefa:", error);
        alert("Erro ao carregar a tarefa.");
      }
    };

    if (taskId) {
      loadTask();
    }
  }, [taskId]);

  const updateTask = async () => {
    const updatedTask = { title, description, category, objective };

    try {
      await axios.put(`https://eisenguide-deploy-render.onrender.com/tasks/${taskId}`, updatedTask);
      alert('Tarefa atualizada com sucesso!');
      navigate('/dashboard'); 
    } catch (error) {
      console.error("Erro ao atualizar tarefa:", error);
      alert("Erro ao atualizar a tarefa.");
    }
  };

  if (!task) {
    return <p>Carregando tarefa...</p>;
  }

  return (
    <div>
      <h1>Editar Tarefa</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Título"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Descrição"
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="IMPORTANTE_URGENTE">Importante e urgente</option>
        <option value="IMPORTANTE_NAO_URGENTE">Importante, mas não urgente</option>
        <option value="URGENTE_NAO_IMPORTANTE">Urgente, mas não importante</option>
        <option value="NAO_URGENTE_NAO_IMPORTANTE">Não urgente e não importante</option>
      </select>
      <input
        type="text"
        value={objective}
        onChange={(e) => setObjective(e.target.value)}
        placeholder="Objetivo"
      />
      <button onClick={updateTask}>Salvar alterações</button>
    </div>
  );
};

export default EditTaskPage;
