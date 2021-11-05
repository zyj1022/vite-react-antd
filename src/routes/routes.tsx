import React, { Suspense, lazy } from 'react'
import type { RouteObject } from 'react-router-dom'
import { Outlet, Link, useRoutes, useParams } from 'react-router-dom'
import Loading from '../components/loading'

/**
 * react-router 6 https://reactrouter.com/
 */

const Home = lazy(() => import('../pages/home'))
const About = lazy(() => import('../pages/about'))

const Comps = [
  {
    index: true,
    element: <Home />
  },
  {
    path: 'about',
    element: <About />
  },
  {
    path: '*',
    element: <Home />
  },
]

const Element = (props: { children: React.ReactChild }) => {
  return <Suspense fallback={<Loading />}>{props.children}</Suspense>
}

const children = () => {
  return Comps.map((item, i) => {
    const elm: any = {
      element: (
        <Element>
          <Home />
        </Element>
      )
    }
    if (item.index) {
      elm.index = true;
    } else {
      elm.path = item.path;
    }
    return elm;
  })
}

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Outlet />,
    children: children(),
  },
]
