import React from 'react';
import './App.css';
import Headers from './Components/Headers';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Baner from './Components/Baner';
import Login from './Components/Login';
import 'bootstrap/dist/css/bootstrap.css';

const Products = ()=><h2>Products</h2>;
function App() {
  return (
    <Router>
    <div className="App">
      <Headers></Headers>
      <Route path="/" exact component={Baner}></Route>
      <Route path="/Products/" component={Products}></Route>
      <Route path="/Login/" component={Login}></Route>
    </div>
    </Router>
  );
}

export default App;
