const CollarReducer = (globalState, action) => {
    switch (action.type) {
        case 'OBTENER_COLLARES':
            return {
                ...globalState,
                collares: action.payload,
            };
        

    default:
        return globalState;
    }
};

export default CollarReducer;