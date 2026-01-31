import { Link } from 'react-router-dom';
import CollarList from '../Collares/List';
const Home = () => {
    return (
       <>
            <main className='text-center px-4 mt-24 mx-auto'>
                <h1 className='text-4xl font-bold mb-8'>Bienvenidos a Nuestra Tienda de Collares</h1>
                <p className='text-lg mb-12'>Explora nuestra colección exclusiva de collares hechos a mano con materiales de alta calidad. Encuentra el accesorio perfecto para cada ocasión.</p>
                <section className='mt-16 mx-auto max-w-md'>
                    <article>
                        <Link to="/collares" className='btn-producto'>Ver Collares</Link>

                        </article>
                </section>
            </main>
        </>
    );
};


export default Home;