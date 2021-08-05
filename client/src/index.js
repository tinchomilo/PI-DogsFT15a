import React from 'react';
import ReactDOM from 'react-dom';
import DogsApp from './DogsApp';
import { Provider } from 'react-redux';
import { store } from './redux/store'
import { BrowserRouter } from 'react-router-dom';

import './index.css';


ReactDOM.render(
  <Provider store = { store }>
    <BrowserRouter>
      <DogsApp />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


