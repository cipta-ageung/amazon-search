import React, { lazy, Suspense } from 'react';

import { Router, Switch } from 'react-router-dom';

import { createBrowserHistory } from 'history';

import { PublicRoute } from './middlewares/AccessPage';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart, faKey, faSearch, faUserCog, faHeart } from '@fortawesome/free-solid-svg-icons';

library.add(faShoppingCart, faKey, faSearch, faUserCog, faHeart);

const history = createBrowserHistory();

const Home = lazy(() => import('./pages/home/Home'));
const Video = lazy(() => import('./pages/video/Video'));

const App = () => {

  return (
    <Router history={history} basename="/">
      <Suspense fallback={"loading"}>
        <Switch>
          <PublicRoute restricted={true} exact path="/" component={Home} />
          <PublicRoute restricted={true} exact path="/video" component={Video} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
