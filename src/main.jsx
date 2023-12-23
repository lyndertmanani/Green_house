// main.tsx or main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import {NextUIProvider} from '@nextui-org/react'
import App from './App'
import "./css/index.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider  className="dark text-foreground bg-background">
      <App />
    </NextUIProvider>
  </React.StrictMode>,
)