import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { sync } from '@/store/slices/newsSlice'
import GlobalStyle from '@/styles/GlobalStyle'
import News from '@/views/News'

export const routes = {
  news: {
    name: 'News',
    path: '/:type(topic)?/:topic?',
  },
}

function Router() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(sync())
  })

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
