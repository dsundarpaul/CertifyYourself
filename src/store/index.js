import thunk from "redux-thunk";
import createDebounce from 'redux-debounced'
import rootReducer from './rootReducer'
import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleware = [thunk, createDebounce()]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(persistedReducer, {}, composeEnhancers(applyMiddleware(...middleware)))
const persistor = persistStore(store)

export { store, persistor }