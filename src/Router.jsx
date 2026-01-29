import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import CollarState from './contexts/Collar/CollarState.jsx';

const Router = () => {
    return (
        <CollarState>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                    </Route>
                </Routes>    
            </BrowserRouter>
        </CollarState>
    );
}

export default Router;