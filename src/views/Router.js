import { useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Articles from '@/services/Articles'

import News from '@/views/News'

import GlobalStyle from '@/styles/GlobalStyle'

export const routes = {
  news: {
    name: 'News',
    path: '/:type(topic)?/:topic?',
  },
}

function Router() {

  useEffect(() => {
    Articles.synchronize()
  }, [])

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route
          exact
          path={routes.news.path}
          component={News}
        />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
