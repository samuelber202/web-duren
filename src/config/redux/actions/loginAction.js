import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../../firebase';

export const login = (email, password) => (dispatch) => {
  dispatch({type:'CHANGE_LOADING', value:true})
  const auth = getAuth(app)
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
    .then(res => {
      dispatch({type:'LOGIN', value:true})
      dispatch({type:'CHANGE_TOKEN', value:res._tokenResponse.idToken})
      localStorage.setItem('userToken', res._tokenResponse.idToken)
      resolve(true)
    }).catch((err)=>{
      console.log("failed", err.message)
      dispatch({type:'LOGIN', value:false})
      dispatch({type:'CHANGE_LOADING', value:true})
      reject(false)
    })
  })
};

