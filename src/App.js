import React from 'react';
import Navigations from './navigations'
// import { PersistGate } from 'redux-persist/integration/react'

import { Provider } from 'react-redux'
import { persistor, store } from './store'
import { PersistGate } from 'redux-persist/integration/react';

const App = () => { 
  
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigations />
      </PersistGate>
    </Provider>
  )
}

export default App;

    // <Provider store={store}>
    //   <PersistGate loading={null} peristor={persistor}>
    //     {/* <Navigations /> */}
    //     hisdf
    //   </PersistGate>
    // </Provider>