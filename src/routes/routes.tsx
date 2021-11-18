import React, { Suspense, lazy } from 'react'
import type { RouteObject } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import Loading from '../components/loading'

/**
 * react-router 6 https://reactrouter.com/
 */

const Home = lazy(() => import('../pages/home'))
const About = lazy(() => import('../pages/about'))

const Element = (props: { child: React.ReactChild }) => {
  return <Suspense fallback={<Loading />}>{props.child}</Suspense>
}

const children = [
  {
    index: true,
    element: <Element child={<Home />} />,
  },
  {
    path: 'About',
    element: <Element child={<About />} />,
  },
  {
    path: 'Home',
    element: <Element child={<Home />} />,
  },
  {
    path: '*',
    element: <Element child={<Home />} />,
  },
]

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Outlet />,
    children: children,
  },
]
