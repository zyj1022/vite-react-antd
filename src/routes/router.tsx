import { createBrowserHistory } from 'history'
import React, { Suspense } from 'react'
import { Redirect } from 'react-router'
import { Route, Router, Switch } from 'react-router-dom'

import Loading from '../components/loading'
import { Routers, RouterWrap } from './routes'

const history = createBrowserHistory()

const router = () => (
  <Suspense fallback={<Loading />}>
    <Router history={history}>
      <Switch>
        {Routers.map((item) => (
          <Route
            key={item.path}
            exact
            path={`/${item.path}`}
            component={() => (
              <RouterWrap>
                <item.component />
              </RouterWrap>
            )}
          />
        ))}
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  </Suspense>
)

export default router
