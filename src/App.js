import React, { useEffect, useState } from "react";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import loadable from '@loadable/component'
import Root from './GlobalValue';
import RouteList from './Router';
Root.test = "String";

import { createStore } from 'redux';
import { sessionService, sessionReducer } from 'redux-react-session';

const Home = loadable(() => import('./AppComponent/Home'));
function App() {
    return (
        <>
            <Router>
                <nav>
                    {RouteList.map((result => 
                        <Link to={result.path}><button>{result.name}</button></Link>
                    ))}
                </nav>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    {RouteList.map((result => 
                        <Route path={result.path} component={result.component}/>
                    ))}
                </Switch>
            </Router>
        </>
    );
}
export default App;