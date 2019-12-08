const initialState = {
    userData: {}
    // isLoading: false,
    // isFulfilled: false,
    // isRejected: false
}
  
  const userData = (state = initialState, action) => {
    switch(action.type) {
      case 'GET_USER_PENDING':
        return {
          ...state
        }
      case 'GET_USER_REJECTED':
        return {
          ...state
        }
      case 'GET_USER_FULFILLED':
        return {
          ...state,
          userData: action.payload.data.result[0][0]
        }
      default:
        return state
    }
  }
  
  export default userData