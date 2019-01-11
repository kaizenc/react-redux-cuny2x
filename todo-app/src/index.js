import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { ToDo, ToDoApp } from "./components";
import counter from "./reducers";

const store = createStore(counter);

ReactDOM.render(
  <Provider store = {store}>
    <h1>Hello World!</h1>
    <ToDoApp />
  </Provider>,
  document.getElementById("root")
);
