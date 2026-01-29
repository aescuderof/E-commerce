import { useContext } from 'react';
import CollarContext from '../../../contexts/Collar/CollarContext';

const CollarList = () => {
    const ctx = useContext(CollarContext);
    console.log(ctx.collares, ctx);
const { collares } = ctx;

    return (
        <div>
            Lista de Collares
            {collares.map((collar) => (
                <div key={collar.id}>
                    <h1>{collar.name}</h1>
                    <p>Precio: ${collar.price}</p>
                </div>
            ))}

        </div>
    );
};

export default CollarList;