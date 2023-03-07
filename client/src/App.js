import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Login, Home, Register, Replies } from './components';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/:id/replies' element={<Replies/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;