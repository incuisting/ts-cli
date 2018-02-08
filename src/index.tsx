import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store/index';
import registerServiceWorker from './registerServiceWorker';
import Game from './containers/Game';
import Fetch from './containers/FetchTest';
import { Nav } from './containers/Nav';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Nav />
        <Route exact={true} path="/" component={Game} />
        <Route path="/fetch" component={Fetch} />
      </div>
    </ConnectedRouter>

  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
