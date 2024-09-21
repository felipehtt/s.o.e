import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Soe from './pages/soe';
import Festas from './pages/festas';
import Intencao from './pages/intencao';


export default function Navegacao() {

    return (

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/soe' element={<Soe />} />
                <Route path='/festas' element={<Festas />} />
                <Route path='/intencao' element={<Intencao />} />
            </Routes>
        </BrowserRouter>

    );

}