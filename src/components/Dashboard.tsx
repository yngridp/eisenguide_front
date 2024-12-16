import axios from "axios";
import Footer from "./estaticos/footer/Footer";
import Navbar from "./estaticos/navbar/Navbar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Dashboard.css';

const Dashboard: React.FC = () => {
  const [tasks, setTasks] = useState<any[]>([]);
  const [filterCategory, setFilterCategory] = useState('');
  const navigate = useNavigate();

  const categories = [
    'IMPORTANTE_E_URGENTE',
    'IMPORTANTE_MAS_NAO_URGENTE',
    'URGENTE_MAS_NAO_IMPORTANTE',
    'NAO_URGENTE_NAO_IMPORTANTE',
  ];

  const loadTasks = async () => {
    try {
      const response = await axios.get('https://eisenguide-deploy-render.onrender.com/tasks');
      setTasks(response.data || []);
    } catch (error) {
      console.error("Erro ao carregar tarefas:", error);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const deleteTask = async (taskId: string) => {
    try {
      await axios.delete(`https://eisenguide-deploy-render.onrender.com/tasks/${taskId}`);
      setTasks(tasks.filter((task: { id: string; }) => task.id !== taskId));
    } catch (error) {
      console.error("Erro ao excluir tarefa:", error);
    }
  };

  const filteredTasks = Array.isArray(tasks)
    ? tasks.filter(
        (task) =>
          (task.category ? task.category.toLowerCase().includes(filterCategory.toLowerCase()) : false)
      )
    : [];

  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        {/* Quadrantes de Tarefas */}
        <div className="quadrant-container">
          {categories.map((category, index) => (
            <div key={index} className={`quadrant quadrant-${index}`}>
              <h3>
                {category === 'IMPORTANTE_E_URGENTE' && 'Faça agora'}
                {category === 'IMPORTANTE_MAS_NAO_URGENTE' && 'Programe-se'}
                {category === 'URGENTE_MAS_NAO_IMPORTANTE' && 'Delegue'}
                {category === 'NAO_URGENTE_NAO_IMPORTANTE' && 'Faça no tempo livre ou elimine'}
              </h3>
              <ul className="task-list">
                {filteredTasks
                  .filter((task) => task.category === category)
                  .map((task) => (
                    <li key={task.id} className="task-item">
                      <strong>{task.title}</strong>
                      <div className="task-item-icons">
                        {/* edição de tarefa */}
                        <button onClick={() => navigate(`/edit-task/${task.id}`)}>
                          <img src="/assets/editar.png" alt="Editar" />
                        </button>
                        <button onClick={() => deleteTask(task.id)}>
                          <img src="/assets/deletar.png" alt="Excluir" />
                        </button>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>

        {/*  Criar e Filtrar Tarefa */}
        <div className="task-panel">
          <div className="task-filter">
            <h3>Filtrar tarefas por categoria</h3>
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
            >
              <option value="">Selecione a Categoria</option>
              {categories.map((category, idx) => (
                <option key={idx} value={category}>
                  {category.replace(/_/g, ' ')}
                </option>
              ))}
            </select>
          </div>
          <div className="task-create-section">
            <h3>Criar Tarefa</h3>
            <button onClick={() => navigate('/add-task')}>+ Adicionar Tarefa</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
