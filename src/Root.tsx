import React from 'react'
import App from './App'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from './store'
const { store, persistor } = configureStore()

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    )
  }
}

AppRegistry.registerComponent('Root', () => Root)
