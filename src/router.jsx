import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './screens/AuthContext';


import Home from './pages/home';
import Soe from './pages/soe';
import Festas from './pages/festas';
import Intencao from './pages/intencao';
import Login from './pages/login';
import Adulto from './pages/festas/adulto';
import Jovens from './pages/festas/jovens';
import Infantil from './pages/festas/infantil';
import NaoEncontrado from './pages/naoencontrado';
import Dashboard from './pages/dashboard';
import Faq from './pages/faq'
import Comunidade from './pages/comunidade';
import PrivateRoute from './screens/privateRoute';
import Contato from './pages/contato';


export default function Navegacao() {

    return (

        <BrowserRouter>
            <AuthProvider>

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/soe' element={<Soe />} />
                    <Route path='/festas' element={<Festas />} />
                    <Route path='/intencao' element={<Intencao />} />
                    <Route path='/intencao/:id' element={<Intencao />} />
                    <Route path='/dashboard' element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>} />
                    <Route path='/dashboard/:id' element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/festas/jovens' element={<Jovens />} />
                    <Route path='/festas/adulto' element={<Adulto />} />
                    <Route path='/festas/infantil' element={<Infantil />} />
                    <Route path='/faq' element={<Faq />} />
                    <Route path='/comunidade' element={<Comunidade />} />
                    <Route path='/contato' element={<Contato />} />

                    <Route path='/*' element={<NaoEncontrado />} />
                </Routes>

            </AuthProvider>

        </BrowserRouter>

    );

}