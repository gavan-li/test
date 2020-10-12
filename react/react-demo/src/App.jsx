import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Demo1 from './view/demo1/index.jsx';
import Demo2 from './view/demo2/index.jsx';
import Demo3 from './view/demo3/index.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/demo1"><Demo1 /></Route>
          <Route path="/demo2"><Demo2 /></Route>
          <Route path="/demo3"><Demo3 /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
