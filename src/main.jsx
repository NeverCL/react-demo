import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import routes from './routes';

class Menu extends Component {
    render() {
        return (
            <div>
                我是菜单
            </div>
        );
    }
}

const store = createStore(state => state);

render((
    <Provider store={store}>
        <Router routes={routes} history={hashHistory}></Router>
    </Provider>
), document.getElementById('root'));