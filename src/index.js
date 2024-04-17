import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./path/to/your/store"; // Import your Redux store here
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
