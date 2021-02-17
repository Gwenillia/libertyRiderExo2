import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Landing from './page/landing';

import ReactGa from 'react-ga';

function App() {

    useEffect(() => {
        ReactGa.initialize(process.env.REACT_APP_GA_ID);
        ReactGa.pageview(window.location.pathname + window.location.search);
    }, []);
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Landing}/>
            </Switch>
        </HashRouter>
    );
}

export default App;
