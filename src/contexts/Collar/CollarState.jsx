import { useReducer } from 'react';
import CollarContext from "./CollarContext";
import CollarReducer from "./CollarReducer";
import axiosClient from '../../config/axios';

const CollarState = (props) => {
    const initialState = {
        collares: [
            {
                id: 0,
                name: 'Collar Kuna',
                price: 18.000,
                img: 'https://zazu.cl/cdn/shop/files/Collar_Corazon_Banado_en_Oro.png?v=1725644281&width=1800',
                description: 'Collar artesanal',
                
            },

            {
                id: 1,
                name: 'Collar Kuna 2',
                price: 18.000,
                img: 'https://zazu.cl/cdn/shop/files/Collar_Corazon_Banado_en_Oro.png?v=1725644281&width=1800',
                description: 'Collar artesanal premium',
            },

               
        ],
    
    } 

    const [globalState, dispatch] = useReducer(CollarReducer, initialState);

const getCollares = async () => {
    try {
        const response =  await axioClient.get('/collares');
        console.log('endpoint obtener collares', response);

        dispatch({
            type: 'OBTENER_COLLARES',
            payload: response.data.collares,
            })
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <CollarContext.Provider 
        value={{ 
            collares: globalState.collares, 
            getCollares,
            }}
        >
            {props.children}
        </CollarContext.Provider>
    );
};

export default CollarState;