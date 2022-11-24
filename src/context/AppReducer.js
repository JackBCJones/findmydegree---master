export const initialState = {
    favourites: [],
};


export const AppReducer =  (state, action) => {
    // console.log(action);
    switch(action.type) {
        case "ADD_TO_FAVOURITES":
            return {
                ...state,
                favourites: [ ...state.favourites, action.item]
            };
        case "REMOVE_FROM_FAVOURITES":
            const index = state.favourites.findIndex(
                (favouritesItem) => favouritesItem.title === action.title
            );
            let newFavourites = [...state.favourites];

            if (index >=0 ) {
                newFavourites.splice(index, 1);
            } else {
                console.warn(
                    `cant remove course with (title: ${action.title}) as it is not in favourites`
                )
            }
                return {
                    ...state,
                    favourites: newFavourites
                }
            
        default:
            return state;
    }
};

export default AppReducer;