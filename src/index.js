import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import AppRouter from './router/Router';

ReactDOM.render(
      <AppRouter />,
  document.getElementById('root')
);
serviceWorker.unregister();
