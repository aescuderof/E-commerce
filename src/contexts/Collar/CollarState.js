import CollarContext from "./CollarContext";

const CollarState = (props) => {
    const initialState = {
        collaress: [
            {
                id: 0,
                name: 'Collar Kuna',
                price: 18.000,
            }
               
        ],
    
    } 

    return (
        <CollarContext.Provider 
        value={{ 
            collaress: initialState.collaress 
            }}
        >
            {props.children}
        </CollarContext.Provider>
    );
};

export default CollarState;