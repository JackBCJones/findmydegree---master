export const initialState = {
    favourites: [],
};

export const reducer =  (state, action) => {
    console.log(action);
    
    switch(action.type) {
        case "ADD_TO_FAVOURITES":
            return {
                ...state,
                favourites: [ ...state.favourites, action.payload]
            }
        default:
            return state;
    }
};