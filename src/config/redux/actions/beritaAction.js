import { getDatabase, ref, get, remove } from 'firebase/database';

export const DELETE_BERITA = "DELETE_BERITA"
export const GET_BERITA = "GET_BERITA";

export const getBerita = () => {
  return async (dispatch) => {
    dispatch({
      type: GET_BERITA,
      payload: {
        loading: true,
        data: [],
        errorMessage: null,
      },
    });

    try {
      const db = getDatabase();
      const beritaRef = ref(db, 'kegiatan');

      const dataSnapshot = await get(beritaRef);

      if (dataSnapshot.exists()) {
        const data = dataSnapshot.val();
        const beritaArray = Object.values(data);

        dispatch({
          type: GET_BERITA,
          payload: {
            loading: false,
            data: beritaArray,
            errorMessage: null,
          },
        });
      } else {
        dispatch({
          type: GET_BERITA,
          payload: {
            loading: false,
            data: [],
            errorMessage: 'No data available',
          },
        });
      }
    } catch (error) {
      dispatch({
        type: GET_BERITA,
        payload: {
          loading: false,
          data: [],
          errorMessage: error.message,
        },
      });
    }
  };
};


export const deleteBerita = (beritaId) => {
  return async (dispatch) => {
    try {
      const db = getDatabase();
      const beritaRef = ref(db, `kegiatan/${beritaId}`);
      
      await remove(beritaRef); 
      dispatch({
        type: DELETE_BERITA,
        payload: true,
      });
    } catch (error) {
      console.error('Error deleting berita:', error);
    }
  };
};

