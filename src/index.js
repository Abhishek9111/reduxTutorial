import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import store from "./store/store";
import App from "./App";
import { Provider } from "react-redux";

store.subscribe(() => console.log(store.getState()));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
