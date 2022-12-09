import { NETWORK_LOADING } from "./types"

const initialState = {
    networkLoading: false,
    loading: false
}

/**
 * 
 * @param {Object} state - The initial state
 * @param {any} action - The data passed from action
 * @returns 
 */
const commonReducer = (state = initialState, action) => {
    switch (action.type) {
      case NETWORK_LOADING:
        return {
          ...state,
          networkLoading: action.payload
        }
      default:
        return state
    }
}
  
export default commonReducer
  