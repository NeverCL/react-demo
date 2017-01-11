import React, { Component } from 'react';

class Main extends Component {
    render() {
        return (
            <div>
                Main2
                {this.props.children}
            </div>
        );
    }
}

/*访问地址                  对应组件
    /               <Main><App></App></Main>
    /about          <Main><About></About></Main>
    /profile        <Main><Profile></Profile></Main>
    /profile/add    <Main><ProfileAdd></ProfileAdd></Main>


Link 
    to:             to="/about"
    activeStyle     activeStyle={{color: 'red'}}
    activeClassName activeClassName="active"

IndexLink
    如果链接到根路由/，不要使用Link组件，而要使用IndexLink组件。
    这是因为对于根路由来说，activeStyle和activeClassName会失效，或者说总是生效，因为/会匹配任何子路由。
*/

const routes = {
    path: '/',
    indexRoute: {
        getComponent(nextState, cb) {
            require.ensure([], require => cb(null, require('./app.jsx').default), 'chunk-app')
        }
    },
    getComponent(nextState, cb) {
        cb(null, Main);
    },
    childRoutes: [
        {
            path: 'profile',
            getComponent(nextState, cb) {
                require.ensure([], require => cb(null, require('./containers/Profile')), 'chunk-profile')
            }
        },
        {
            path: 'profile/add',
            getComponent(nextState, cb) {
                require.ensure([], require => cb(null, require('./profileAdd.jsx').default), 'chunk-profileadd')
            }
        }
    ],
};

export default routes;