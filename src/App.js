import React from 'react';
import Navigations from './navigations'
import { PersistGate } from 'redux-persist/integration/react'

import { Provider } from 'react-redux'
import { store, persistor } from './store'

const App = () => {
  <Provider store={store}>
    <PersistGate loading={null} peristor={persistor}>
      <Navigations />
    </PersistGate>
  </Provider>
}

export default App;
