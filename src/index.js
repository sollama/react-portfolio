import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './components/Home';
import Header from './components/Header';
import Generator from './projects/generator';


ReactDOM.render(
    <div>
        <Router history={createBrowserHistory()}>
            <Switch>
                <Route exact path='/' render={() => <Header><App /></Header>} />
                <Route path='/generator' render={() => <Header><Generator /></Header>} />
            </Switch>
        </Router>
    </div>,
document.getElementById('root'));

