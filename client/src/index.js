/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

// Provider keeps track of the store which is a global state. Allowing us to access the store from anywhere in the app
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
