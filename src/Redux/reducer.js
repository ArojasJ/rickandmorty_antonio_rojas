import { ADD_FAVORITE, DELETE_FAVORITE} from "./actions";


const initialState = {
    myFavorites: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FAVORITE:
            return {
            ...state,
            myFavorites: [...state.myFavorites, action.payload]
        }
        case DELETE_FAVORITE:
            const filtro = state.myFavorites.filter((fav) => fav.id != action.payload )
            return{
                ...state,
                myFavorites: filtro
            }
            default:
                return { ...state };
    }
}

export default rootReducer;