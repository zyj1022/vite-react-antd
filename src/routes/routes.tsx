import React, { lazy, Fragment } from 'react';
import { withRouter } from 'react-router';

const Home = withRouter(lazy(() => import('../pages/home')));
const About = withRouter(lazy(() => import('../pages/about')));

export const Routers = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'Home',
    component: Home,
  },
  {
    path: 'About',
    component: About,
  }
];

export const RouterWrap = ({ children }) => <Fragment>{children}</Fragment>;
