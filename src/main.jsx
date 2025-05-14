import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
 import  {Provider}  from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './context/store.js'

createRoot(document.getElementById('root')).render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
    <App />
    </Provider>
  </PersistGate>,
)
