import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Soe from './pages/soe';
import Festas from './pages/festas';
import Intencao from './pages/intencao';
import Login from './pages/login';
import Casamento from './pages/casamento';
import Adole from './pages/adolescente/indes';
import Infantil from './pages/infantil';
import NaoEncontrado from './pages/naoencontrado';


export default function Navegacao() {

    return (

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/soe' element={<Soe />} />
                <Route path='/festas' element={<Festas />} />
                <Route path='/intencao' element={<Intencao />} />
                <Route path='/login' element={<Login />} />
                <Route path='/casamento' element={<Casamento />} />
                <Route path='/adolescente' element={<Adole />} />
                <Route path='/infantil' element={<Infantil />} />

                <Route path='/*' element={<NaoEncontrado />} />
            </Routes>
        </BrowserRouter>

    );

}