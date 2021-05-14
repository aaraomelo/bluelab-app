import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, Store } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import reducer from "./store/reducer"
import { composeWithDevTools } from "redux-devtools-extension"
import logger from "redux-logger"

const store: Store<UserState, UserAction> & {
  dispatch: DispatchType
} = createStore(reducer, composeWithDevTools(applyMiddleware(logger ,thunk)))



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
