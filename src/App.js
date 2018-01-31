import React, { Component } from 'react';
import {Provider} from 'react-redux';
import Search from './containers/Search.js';
import Add from './containers/Add.js';
import Results from './containers/Results.js';
import configureStore from './store/configurateStore';
import './css/app.css';

let store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <div className="container">
          <Search />
          <Results />
          <Add />
        </div>
      </Provider>
    );
  }
}

export default App;
