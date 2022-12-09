import { NETWORK_LOADING } from "./types"

/**
 * 
 * @param {Boolean} data - The state of loading 
 */
export const toggleNetworkLoading = (data) => dispatch => {
    dispatch({
      type: NETWORK_LOADING,
      payload: data
    })
}
  