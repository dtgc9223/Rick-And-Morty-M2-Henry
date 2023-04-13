import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, RESET } from "./action-types";

const initialState = {
    myFavorites: [], //Solo lo cambian el add y remove
    allCharacters: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV: return {
            ...state,
            myFavorites: [...state.myFavorites, action.payload],
            allCharacters: [...state.allCharacters, action.payload]
        };

        case REMOVE_FAV:
        const newFavorites = state.myFavorites.filter((ch) => ch.id !== action.payload)
        return{ 
            ...state,
            myFavorites: newFavorites,
            allCharacters: newFavorites
        };
        
        case FILTER:
        const newFilter = state.allCharacters.filter((ch) => ch.gender !== action.payload)
        return{ 
            ...state,
            myFavorites: newFilter
        };
        
        case RESET:
        return{ 
            ...state,
            myFavorites: [...state.allCharacters]
        };

        case ORDER:
        const newOrder = state.allCharacters.sort((a,b) => {
            if(a.id > b.id) {
                return 'Ascendente' === action.payload ? 1 : -1
            }
            if(a.id < b.id) {
                return 'Descendente' === action.payload ? 1 : -1
            }
            return 0;
        })
        return{ 
            ...state,
            myFavorites: newOrder
        };
        default: return {...state};
    };
}
export default reducer;