import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />

                </Route>
            </Routes>    
        </BrowserRouter>
    );
}

export default Router;