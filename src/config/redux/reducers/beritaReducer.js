// src/redux/reducers/pengumumanReducer.js
import {
    FETCH_PENGUMUMAN_REQUEST,
    FETCH_PENGUMUMAN_SUCCESS,
    FETCH_PENGUMUMAN_FAILURE,
  } from '../actions/beritaAction';
  
  const initialState = {
    loading: false,
    pengumuman: [],
    error: '',
  };
  
  const beritaReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_PENGUMUMAN_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_PENGUMUMAN_SUCCESS:
        return {
          ...state,
          loading: false,
          pengumuman: action.payload,
          error: '',
        };
      case FETCH_PENGUMUMAN_FAILURE:
        return {
          ...state,
          loading: false,
          pengumuman: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default beritaReducer;
  