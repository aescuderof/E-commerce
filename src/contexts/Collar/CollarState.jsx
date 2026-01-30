import { useReducer } from 'react';
import CollarContext from "./CollarContext";
import CollarReducer from "./CollarReducer";
import axioClient from '../../config/axios';

const CollarState = (props) => {
    const initialState = {
        collares: [
            {
                id: 0,
                name: 'Collar Kuna',
                price: 18.000,
            },

            {
                id: 1,
                name: 'Collar Kuna 2',
                price: 18.000,
            },

               
        ],
    
    } 

    const [globalState, dispatch] = useReducer(CollarReducer, initialState);

const getCollares = async () => {
    try {
        const response =  await axioClient.get('/collares');
        console.log(response);

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
            collares: initialState.collares, 
            getCollares,
            }}
        >
            {props.children}
        </CollarContext.Provider>
    );
};

export default CollarState;