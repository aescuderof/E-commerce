import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import CollarState from './contexts/Collar/CollarState.jsx';
import Register from './components/Auth/Register.jsx';
import Login from './components/Auth/Login.jsx';
import CollarList from './components/Collares/List/index.jsx';

const Router = () => {
    return (
        <CollarState>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="/collares" element={<CollarList />} />
                        <Route path="/registro" element={<Register /> } />
                        <Route path="/iniciar-sesion" element={<Login /> } />
                        <Route path="*" element={<h1>404 - Not Found</h1>} />
                        <Route path="/collares/:slug" element={<SingleCollar />} />

                    </Route>
                </Routes>    
            </BrowserRouter>
        </CollarState>
    );
}

export default Router;