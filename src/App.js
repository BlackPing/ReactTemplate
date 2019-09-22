import React, { useEffect, useState } from "react";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import loadable from '@loadable/component'
import RouteList from './Router';
import Headers from './Component/Header.jsx'

const Login = loadable(() => import('./Component/Login.jsx'));
const Home = loadable(() => import('./AppComponent/Home'));
function App() {
    return (
        <>
            <Router>
                <Link key="/" to="/"><Headers /></Link>
                <nav>
                    {RouteList.map((result => 
                        <Link key={result.name} to={result.path}><button>{result.name}</button></Link>
                    ))}
                    <Link key="/login" to="/login"><div>Login</div></Link>
                </nav>
                <Switch>
                    <Route key="/" exact path="/" component={Home}></Route>
                    {RouteList.map((result => 
                        <Route key={result.path} path={result.path} component={result.component}/>
                    ))}
                    <Route key="/login" exact path="/login" component={Login}></Route>
                </Switch>
            </Router>
        </>
    );
}
export default App;