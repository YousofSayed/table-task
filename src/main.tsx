import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const root : HTMLElement = document.querySelector(`#root`)!;
  root.style.height = `${window.innerHeight}px`;
  window.addEventListener(
    "resize",
    () => (root.style.height = `${window.innerHeight}px`)
  );

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
