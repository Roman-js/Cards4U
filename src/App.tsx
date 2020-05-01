import React from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import Cards from "./ui/Cards";
import {Provider} from "react-redux";
import store from "./bll/store";


function App() {
  return (
    <HashRouter>
        <Provider store={store}>
      <Cards/>
         </Provider>
    </HashRouter>
  );
}

export default App;
