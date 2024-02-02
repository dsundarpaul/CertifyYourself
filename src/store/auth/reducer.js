import { LOGIN, USER_LOGOUT, USER_AUTH } from "./types"

const initialState = {
    loggedIn: false,
    userData: {}
}

/**
 * 
 * @param {Object} state - The initial state
 * @param {any} action - The data passed from action
 * @returns 
 */
const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN:
        return {
          ...state,
          loggedIn: true,
          userData: action.payload
        }

      case USER_AUTH: return { ...state, userData: action.payload, loggedin: true }
      
      case USER_LOGOUT: return { ...state, userData: {}, loggedIn: false }

      default: return state
    }
}
  
export default authReducer
  