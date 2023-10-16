import { DELETE_BERITA, GET_BERITA } from "../actions/beritaAction"


const initialState = {
    getBeritaResult: false,
    getBeritaLoading: false,
    getBeritaError: false,

    deleteBeritaResult: false
}

const beritaAction = (state = initialState, action) =>{
    switch(action.type){

        case GET_BERITA:
           
            return{
                ...state,
                getBeritaResult: action.payload.data,
                getBeritaLoading: action.payload.loading,
                getBeritaError: action.payload.errorMessage,
            } 

            case DELETE_BERITA:
           
    return{
        ...state,
        deleteBeritaResult: true,
    } 
          
        default : 
        return state
    }
}






export default beritaAction