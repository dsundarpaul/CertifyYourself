import { DRAWER_CLOSE, DRAWER_OPEN, USER_EDIT_DRAWER_CLOSE, USER_EDIT_DRAWER_OPEN } from "./types"


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

export const userEditDrawerOpen = () => dispatch => {
  dispatch({
    type: USER_EDIT_DRAWER_OPEN,
    payload: false
  })
}

export const userEditDrawerClose= () => dispatch => {
  dispatch({
    type: USER_EDIT_DRAWER_CLOSE,
    payload: true
  })
}