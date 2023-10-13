import axios from "axios"

export const GET_PENGUMUMAN = "GET_PENGUMUMAN"

export const getPengumuman = () =>{
    return (dispatch)=>{
        dispatch({
            type : GET_PENGUMUMAN,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        axios({
            method : "GET",
            url : "https://651635c709e3260018c9876d.mockapi.io/pengumuman",
            timeout: 120000
            
        })
            .then((res)=>{
                dispatch({
                    type : GET_PENGUMUMAN,
                    payload: {
                        loading: false,
                        data: res.data,
                        errorMessage: false
                    }
                })
            })
            .catch((err)=>{
                dispatch({
                    type : GET_PENGUMUMAN,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: err.message
                    }
                })
            })


    }
}