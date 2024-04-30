import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { AuthContext } from './context/context';
import userStore from './store/userStore';
import itemStore from './store/itemStore';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <AuthContext.Provider value={{
    user: new userStore(),
    item: new itemStore()
  }}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthContext.Provider>
);

