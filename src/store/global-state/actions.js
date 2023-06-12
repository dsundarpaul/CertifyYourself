import { DRAWER_CLOSE, DRAWER_OPEN } from "./types"


export const closeTheSideDrawer = () => dispatch => {
  dispatch({
    type: DRAWER_CLOSE,
    payload: false
  })
}

export const openTheSideDrawer = () => dispatch => {
  dispatch({
    type: DRAWER_OPEN,
    payload: true
  })
}