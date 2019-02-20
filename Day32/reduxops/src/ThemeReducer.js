const initialState = {
    theme: "light"
}

const ThemeReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SWITCH_TO_DARK':
            return {...state, theme: "dark"};
        case 'SWITCH_TO_LIGHT':
            return {...state, theme: "light"};
        default:
            return state;
        }
}

export default ThemeReducer;