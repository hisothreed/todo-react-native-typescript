import { createStore } from 'redux'
import reducers from './reducers'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user']
}

const persistedReducer = persistReducer(persistConfig, reducers)

export default function configureAndReturnStore(): any {
  let store = createStore(persistedReducer)
  let persistor = persistStore(store)
  return { store, persistor }
}