import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
        {/* Notification */}
        <Toaster position='top-right' richColors toastOptions={{ style:{borderRadius: '14px'}}} />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
