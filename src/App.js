import React from 'react';

import { Provider } from 'react-redux'
import { store } from './Redux/store'

import TabNavigation from './Navigations/TabNavigation';
const App = () => {
  return (
    <Provider store={store}>
      <TabNavigation />
    </Provider>
  );
};

export default App;