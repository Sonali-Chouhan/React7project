import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./Redux/Store";
import { Provider } from "react-redux";
ReactDOM.render(
  <div>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
    ,
  </div>,

  document.getElementById("root")
);


