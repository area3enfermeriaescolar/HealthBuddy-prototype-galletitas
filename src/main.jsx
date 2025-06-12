import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Importación de contexto para galletitas (OPCIONAL)
import { HealthTipsProvider } from './context/HealthTipsContext';

// Importación de estilos
import './styles.css';
import './demoStyles.css';
import './globalStyles.css';
import './theme/styles/unifiedStyles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HealthTipsProvider>
      <App />
    </HealthTipsProvider>
  </React.StrictMode>
);