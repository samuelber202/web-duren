// src/redux/actions/pengumumanActions.js
import axios from 'axios';

export const FETCH_PENGUMUMAN_REQUEST = 'FETCH_PENGUMUMAN_REQUEST';
export const FETCH_PENGUMUMAN_SUCCESS = 'FETCH_PENGUMUMAN_SUCCESS';
export const FETCH_PENGUMUMAN_FAILURE = 'FETCH_PENGUMUMAN_FAILURE';

const apiUrl = 'https://651635c709e3260018c9876d.mockapi.io/pengumuman';

export const fetchPengumumanRequest = () => ({
  type: FETCH_PENGUMUMAN_REQUEST,
});

export const fetchPengumumanSuccess = (data) => ({
  type: FETCH_PENGUMUMAN_SUCCESS,
  payload: data,
});

export const fetchPengumumanFailure = (error) => ({
  type: FETCH_PENGUMUMAN_FAILURE,
  payload: error,
});

export const fetchPengumuman = () => {
  return (dispatch) => {
    dispatch(fetchPengumumanRequest());
    axios
      .get(apiUrl)
      .then((response) => {
        const pengumuman = response.data;
        dispatch(fetchPengumumanSuccess(pengumuman));
      })
      .catch((error) => {
        dispatch(fetchPengumumanFailure(error.message));
      });
  };
};
