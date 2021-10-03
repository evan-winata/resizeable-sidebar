import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import classes from "./App.module.scss";
// import './App.css';

function App() {
  return (
    <div className={classes.app}>
      <Router>
      <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={lazy(() => import("./pages/Home"))} />
        <Route exact path="/leftside" component={lazy(() => import("./pages/LeftSidebar"))} />
        <Route exact path="/rightside" component={lazy(() => import("./pages/RightSidebar"))} />
        <Route exact path="/bothside" component={lazy(() => import("./pages/BothSidesSidebar"))} />
        {/* {Routes &&
          Routes.map((route) => (
            <Route key={route.name} exact={route.exact} path={route.path} component={route.component} />
          ))} */}
      </Switch>
    </Suspense>
    </Router>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
