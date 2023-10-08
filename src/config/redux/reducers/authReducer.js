const token = localStorage.getItem('userToken')
const initialState = {
    isLoading: false,
    isLogin: !!token,
    token:null,
    message:null
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          isLogin: action.value,
        };
      
        case 'ERR_MESSAGE':
        return {
          ...state,
          message: action.value,
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
  