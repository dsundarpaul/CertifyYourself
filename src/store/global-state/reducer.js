import { DRAWER_OPEN, DRAWER_CLOSE } from "./types"

const initialState = {
  drawerState: false
}

const globalReducer = (state = initialState, action) => {
  console.log('in reducer')
    switch (action.type) {

      case DRAWER_OPEN: return { ...state, drawerState: action.payload };

      case DRAWER_CLOSE: return { ...state, drawerState: action.payload };

      default: return state
    }
}
  
export default globalReducer
  