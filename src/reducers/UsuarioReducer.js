const initialState = {
    name: 'Enoc',
    email: 'vittor_g3@hotmail.com'
};

const UsuarioReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_NAME':
            return {...state, name: action.payload.name};
            break;
        case 'SET_EMAIL':
            return {...state, email: action.payload.email};
            break;
    }
    
    return state;
};

export default UsuarioReducer;