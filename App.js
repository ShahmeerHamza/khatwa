import React from 'react'
import { NativeBaseProvider } from 'native-base'
import { App_Navigation } from './config/navigation'
import { Provider } from 'react-redux';
import { store } from './store';

const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <App_Navigation />
      </NativeBaseProvider>
    </Provider>
  )
}

export default App

