import { combineReducers } from 'redux'

import common from './common/reducer'
import auth from './auth/reducer'

const rootReducer = combineReducers({
    auth,
    common
})

export default rootReducer