import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { reducer } from "./Reducer/reducer";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

let store = createStore(reducer, applyMiddleware(thunk));


const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

