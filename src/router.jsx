import React from 'react';
import './index.scss';
import Inicio from './pages/inicio';
import Cadastro from './pages/cadastro';
import NaoEncontrado from './pages/naoEncontrada';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


export default function Navegacao() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/cadastro' element={<Cadastro />} />

        <Route path='*' element={<NaoEncontrado />} />
      </Routes>
      
    </BrowserRouter>

  )

}