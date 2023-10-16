import { DELETE_PENGUMUMAN, GET_PENGUMUMAN } from "../actions/pengumumanAction"


const initialState = {
    getPengumumanResult: false,
    getPengumumanLoading: false,
    getPengumumanError: false,

    deletePengumumanResult: false
}

const pengumumanAction = (state = initialState, action) =>{
    switch(action.type){

        case GET_PENGUMUMAN:
           
            return{
                ...state,
                getPengumumanResult: action.payload.data,
                getPengumumanLoading: action.payload.loading,
                getPengumumanError: action.payload.errorMessage,
            } 

            case DELETE_PENGUMUMAN:
           
            return{
                ...state,
                deletePengumumanResult: true,
            } 

          
        default : 
        return state
    }
}

export default pengumumanAction