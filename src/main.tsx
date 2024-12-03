import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // Use createRoot ao invés de ReactDOM.render
import './index.css';
import App from './App.tsx';

const rootElement = document.getElementById('root') as HTMLElement; // Garantir que o elemento exista

// Usar createRoot para renderizar a aplicação
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
