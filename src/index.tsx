import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import { Provider } from 'react-redux';
import store from './store/index';
import registerServiceWorker from './registerServiceWorker';
import Game from './containers/Game';
import  Fetch  from './containers/FetchTest';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Game />
      <Fetch />
    </div>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
