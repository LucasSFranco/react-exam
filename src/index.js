import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from '@/store'

import Router from '@/views/Router'

import '@/assets/fonts'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
