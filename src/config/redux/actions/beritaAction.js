import axios from "axios"

export const GET_BERITA = "GET_BERITA"

export const getBerita = () =>{
    return (dispatch)=>{
        dispatch({
            type : GET_BERITA,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        axios({
            method : "GET",
            url : "https://651635c709e3260018c9876d.mockapi.io/kegiatan",
            timeout: 120000
        })
            .then((res)=>{
                dispatch({
                    type : GET_BERITA,
                    payload: {
                        loading: false,
                        data: res.data,
                        errorMessage: false
                    }
                })
            })
            .catch((err)=>{
                dispatch({
                    type : GET_BERITA,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: err.message
                    }
                })
            })


    }
}