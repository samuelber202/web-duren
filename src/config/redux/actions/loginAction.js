import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase";

export const login = (email, password) => (dispatch) => {
  dispatch({ type: "CHANGE_LOADING", value: true });
  const auth = getAuth(app);
  let tokenArray = JSON.parse(localStorage.getItem("tokenArray")) || [];

  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res.user.email);
        dispatch({ type: "LOGIN", value: true });
        dispatch({ type: "CHANGE_TOKEN", value: res._tokenResponse.idToken });

        const tokenData = {
          token: res._tokenResponse.idToken,
          email: res.user.email,
        };

        tokenArray.push(tokenData);
        localStorage.setItem('zxc9238[0]-2Token', JSON.stringify(tokenArray));

        resolve(true);
      })
      .catch((err) => {
        console.log("failed", err.message);
        dispatch({ type: "LOGIN", value: false });
        dispatch({ type: "CHANGE_LOADING", value: true });
        reject(false);
      });
  });
};
