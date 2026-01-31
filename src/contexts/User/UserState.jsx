import axiosClient from "../../config/axios";
const UserState = (props) => {
    const initialState = {
        currentUser: {
            username: "",
            email: "",
            country: "",
            address: "",
            zipcode: 0
        },

        cart: [],
        authState: false,
    };

    const [globalState, dispatch] = useReducer(UserReducer, initialState);

    const registerUser = async (form) => {
        try {
            const response = await axiosClient.post('/users/register', form);
            console.log('respuesta del registro', response);

            dispatch(
                {
                    type: 'REGISTRO_EXITOSO',
                    payload: response.data,
                }

            )
        } catch (error) {
            console.error(error);
            return error.response.data.msg;

        }
}

 const loginUser = async (form) => {
    try {
        const res = await axiosClient.post('/users/login', form);
        const token = res.data.token;

        dispatch({
            type: 'LOGIN_EXITOSO',
            payload: token,
        })
        return;
    } catch (error) {
        console.error(error);
        return error.response.data.message;
    }

       
}

}
