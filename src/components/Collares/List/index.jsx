import { useContext, useEffect } from 'react';
import CollarContext from '../../../contexts/Collar/CollarContext';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CollarList = () => {
    const ctx = useContext(CollarContext);
    console.log(ctx.collares, ctx);
    const { collares } = ctx;

    const getCollares = async () => {
        try {
            const response = await axios.get('http://localhost:5000/collares');
            console.log(response.data);
        } catch (error) {
            console.error('Error al obtener collares:', error);
        }
    };

    useEffect(() => {
        getCollares();
    }, []);


    return (
        <>
         <section className='max-w-7xl mx-auto py-16 px-8 grid grid-cols-1 gap-y-4 gap-x-8 sm:grid-cols-2 sm:gap-y-8 lg:grid-cols-4 lg:gap-y-12'>
            {collares.length === 0 ? (
                <p>No hay collares disponibles</p>
            ) : (
                collares.map((collar) => {
                    return (
                        <div key={collar.id} className="border flex flex-col">
                            <div className="bg-gray-200">
                                <Link to={`/collares/${collar.slug}`} state={{ collar }}>
                                    <img
                                        src={collar.img}
                                        alt={collar.description}
                                        className="w-full h-40 object-center object-cover"
                                    />    
                                </Link>
                            </div>

                            <div className="p-4 flex-1 flex flex-col space-y-2">
                                <h3 className='text-xl font-bold text-gray-900'> {collar.name} </h3>
                                <p className='text-gray500 pb-8'> {collar.description} </p>
                                <Link to={`/collares/${collar.slug}`} state={{ collar }} className='btn-product'>
                                <button type="button" className="w-full">
                                    Ver Collar
                                    </button></Link>
                                
                            </div>
                        </div>
                    );
                })
            )}
         </section>
        </>
    );
};

export default CollarList;