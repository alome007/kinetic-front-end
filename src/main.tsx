import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { initGA } from './utils/analytics';
import { ThemeProvider } from './context/ThemeContext';

// Initialize Google Analytics with your measurement ID
if (import.meta.env.VITE_GA_MEASUREMENT_ID) {
  initGA(import.meta.env.VITE_GA_MEASUREMENT_ID);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
