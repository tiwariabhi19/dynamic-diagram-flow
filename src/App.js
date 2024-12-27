import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import DiagramFlow from "./containers/DiagramFlow";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <DiagramFlow />
      </div>
    </Provider>
  );
}

export default App;
