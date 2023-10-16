import { getDatabase, ref, get, remove } from 'firebase/database';

export const GET_PENGUMUMAN = "GET_PENGUMUMAN";
export const DELETE_PENGUMUMAN = "DELETE_PENGUMUMAN";


export const getPengumuman = () => {
  return async (dispatch) => {
    dispatch({
      type: GET_PENGUMUMAN,
      payload: {
        loading: true,
        data: [],
        errorMessage: null,
      },
    });

    try {
      const db = getDatabase();
      const pengumumanRef = ref(db, 'pengumuman');

      const dataSnapshot = await get(pengumumanRef);

      if (dataSnapshot.exists()) {
        const data = dataSnapshot.val();
        const beritaArray = Object.values(data);

        dispatch({
          type: GET_PENGUMUMAN,
          payload: {
            loading: false,
            data: beritaArray,
            errorMessage: null,
          },
        });
      } else {
        dispatch({
          type: GET_PENGUMUMAN,
          payload: {
            loading: false,
            data: [],
            errorMessage: 'No data available',
          },
        });
      }
    } catch (error) {
      dispatch({
        type: GET_PENGUMUMAN,
        payload: {
          loading: false,
          data: [],
          errorMessage: error.message,
        },
      });
    }
  };
};


export const deletePengumuman = (beritaId) => {
    return async (dispatch) => {
      try {
        const db = getDatabase();
        const beritaRef = ref(db, `pengumuman/${beritaId}`);
        
        await remove(beritaRef); 
        dispatch({
          type: DELETE_PENGUMUMAN,
          payload: true,
        });
      } catch (error) {
        console.error('Error deleting berita:', error);
      }
    };
  };
