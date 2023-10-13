import { GET_BERITA } from "../actions/beritaAction"


const initialState = {
    getBeritaResult: false,
    getBeritaLoading: false,
    getBeritaError: false,
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

          
        default : 
        return state
    }
}

export default beritaAction