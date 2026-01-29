import CollarContext from "./CollarContext";

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

    return (
        <CollarContext.Provider 
        value={{ 
            collares: initialState.collares 
            }}
        >
            {props.children}
        </CollarContext.Provider>
    );
};

export default CollarState;