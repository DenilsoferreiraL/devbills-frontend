import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import Global from './styles/global'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Global />
  </StrictMode>,
)