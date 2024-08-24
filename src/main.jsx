import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './index.css';

const AppWrapper = () => {
  return (
    <>
      <App />
      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
};

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
 