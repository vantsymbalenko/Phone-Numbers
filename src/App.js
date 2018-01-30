import React, { Component } from 'react';
import {Provider} from 'react-redux';
import Search from './containers/Search.js';
import Add from './containers/Add.js';
import Results from './containers/Results.js';
import configureStore from './store/configurateStore';

let store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <div>
          <Search />
          <Add />
          <Results />
        </div>
      </Provider>
    );
  }
}

export default App;
