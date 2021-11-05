import React, { Suspense, Fragment, lazy } from 'react'
import { useRoutes } from 'react-router-dom'

import { routes } from './routes';

const Router = () => {
  const elem = useRoutes(routes);
  return <>{elem}</>;
}

export default Router
