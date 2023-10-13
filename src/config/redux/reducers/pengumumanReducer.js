import { GET_PENGUMUMAN } from "../actions/pengumumanAction"


const initialState = {
    getPengumumanResult: false,
    getPengumumanLoading: false,
    getPengumumanError: false,
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

          
        default : 
        return state
    }
}

export default pengumumanAction