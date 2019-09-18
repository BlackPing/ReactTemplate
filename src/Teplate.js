import React, { useEffect, useState } from "react"; // React Import
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom"; // React Router Import
import loadable from '@loadable/component' // Code Splitting Import
import Root from './GlobalValue'; // GlobalValue

Root.test = "String"; // GlobalValue Controll

const Com1 = loadable(() => import('./Component/One')); // Code Splitting
const Com2 = loadable(() => import('./Component/Two'));

const table = ['data1', 'data2'];

const App = () => {

    import("./Function/Common").then(func => { // Code Spliting Function JS File
        func.getdata("get", "/", {}).then((result) => { // async axios data request respons
            console.log(result);
        })
    });

    function load() {
        import("./Function/Common").then(func => {
            func.getdata("get", "/", {}).then((result) => {
                console.log(result);
            })
        });
    }

    const [count, setCount] = useState(""); // Local Variable Controll [0] value [1] Set Function
    return (
        <>
            {Root.test}
            <Router>
                    <Link to="/home"><button>Com1</button></Link>
                    <Link to="/set"><button>Com2</button></Link>
                <div>
                    <Switch>
                        <Route path="/home" component={Com1}/>
                        <Route path="/" component={Com2}/>
                    </Switch>
                </div>
                <div>
                <button onClick={load}>test</button>
                </div>
                {table.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </Router>
        </>
    );
}

/* Render Area Loop Controll
 {table.map((value, index) => (
     <li key={index}>{value}</li>
 ))}
 */

export default App;