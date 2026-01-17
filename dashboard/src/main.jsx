import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import ProtectedRoute from './routes/ProtectedRoute';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<ProtectedRoute>
          <App/>
        </ProtectedRoute> } />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
