import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Store from './store/Store'
import {Provider} from 'react-redux'
import history from './services/history'
import AppRouter from './router/Router';

ReactDOM.render(
    <Provider store={Store}>
      <AppRouter history={history}/>
    </Provider>,
  document.getElementById('root')
);
serviceWorker.register();
