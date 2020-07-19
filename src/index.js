import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './components/App';
import Header from './components/Header';
import Portfolio from './components/Portfolio'
import Generator from './projects/generator'


import './index.css';


ReactDOM.render(
        <Router history={createBrowserHistory()}>
            <Switch>
                <Route exact path='/' render={() => <Header><App /></Header>} />
                <Route path='/portfolio' render={() => <Header><Portfolio /></Header>} />
                <Route path='/generator' render={() => <Header><Generator /></Header>} />
            </Switch>
        </Router>,
document.getElementById('root'));

