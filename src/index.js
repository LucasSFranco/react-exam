import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import './assets/fonts'
import store from './store'
import Router from './views/Router'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
