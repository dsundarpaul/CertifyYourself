import React from 'react';
import Navigations from './navigations'
// import { PersistGate } from 'redux-persist/integration/react'

import { Provider } from 'react-redux'
import { store } from './store'

const App = () => { 
  
  return (
    <Provider store={store}>
        <Navigations />
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