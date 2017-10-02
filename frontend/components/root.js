import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import Immigration from './immigration';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <Immigration />
    </HashRouter>
  </Provider>
);

export default Root;
