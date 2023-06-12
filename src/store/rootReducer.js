import { combineReducers } from 'redux'

import common from './common/reducer'
import auth from './auth/reducer'
import global from './global-state/reducer'

const rootReducer = combineReducers({
    auth,
    global,
    common
})

export default rootReducer