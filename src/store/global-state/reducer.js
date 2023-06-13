import { DRAWER_OPEN, DRAWER_CLOSE, USER_EDIT_DRAWER_CLOSE, USER_EDIT_DRAWER_OPEN } from "./types"

const initialState = {
  drawerState: false,
  userEditDrawer: false
}

const globalReducer = (state = initialState, action) => {

    switch (action.type) {

      case DRAWER_OPEN: return { ...state, drawerState: action.payload };

      case DRAWER_CLOSE: return { ...state, drawerState: action.payload };

      case USER_EDIT_DRAWER_OPEN: return { ...state, userEditDrawer: action.payload };

      case USER_EDIT_DRAWER_CLOSE: return { ...state, userEditDrawer: action.payload };
      default: return state
    }
}
  
export default globalReducer
  