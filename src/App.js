import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Rotas from './rotas';
import Menu from './components/Menu';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Menu />
        <Rotas />
      </div>
    </BrowserRouter>
  );
}

export default App;
