import React, { Suspense } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';
import { createBrowserHistory } from 'history';

import Loading from '../components/loading';
import { RouterWrap, Routers } from './routes';

const history = createBrowserHistory();

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
);

export default router;

// import React, { Suspense } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// const Home = React.lazy(() => import("../pages/home"));
// const About = React.lazy(() => import("../pages/about"));

// export const Routers = () => {
//   return (
//     <Suspense fallback={<span>loading</span>}>
//       <Router>
//         <Switch>
//           <Route key="/home" path="/home" component={Home}></Route>
//           <Route key="/about" path="/about" component={About}></Route>
//         </Switch>
//       </Router>
//     </Suspense>
//   );
// };


