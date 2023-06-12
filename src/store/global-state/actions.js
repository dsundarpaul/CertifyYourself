import { DRAWER_CLOSE, DRAWER_OPEN } from "./types"


export const closeTheSideDrawer = () => dispatch => {
  console.log('close')
  dispatch({
    type: DRAWER_CLOSE,
    payload: false
  })
}

export const openTheSideDrawer = () => dispatch => {
  console.log('open')
  dispatch({
    type: DRAWER_OPEN,
    payload: true
  })
}