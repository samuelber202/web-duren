const token = localStorage.getItem('userToken')
const initialState = {
    isLoading: false,
    isLogin: !!token,
    token:null,
  };
  
  const authReducer = (state = initialState, action) => {
    console.log(state);
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          isLogin: action.value,
        };
      
        case 'CHANGE_LOADING':
        return {
          ...state,
          isLoading: action.value
        };
        case 'CHANGE_TOKEN':
          return {
            ...state,
            token: action.value
          };
          case 'LOGOUT':
            return {
              ...state,
              isLoading: null,
              isLogin: false,
              token:null
            };
      default:
        return state;
    }
  };

  
  export default authReducer;
  