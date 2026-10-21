import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { LoginProvider } from './context/LoginProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LoginProvider>
      <App />
    </LoginProvider>
  </StrictMode>,
)
