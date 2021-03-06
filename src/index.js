import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { HashRouter, Route, Switch } from 'react-router-dom'

import Login from './container/login/login'
import Register from './container/register/register'
import Bossinfo from './container/bossinfo/bossinfo'
import Geniusinfo from './container/geniusinfo/geniusinfo'
import AuthRoute from './component/authroute/authroute'
import Dashboard from './component/dashboard/dashboard'
import Chat from './component/chat/chat'
import reducers from './reducer'
import './config'
import './index.css'

const store = createStore(reducers, compose(
	applyMiddleware(thunk),
	window.devToolsExtension?window.devToolsExtension():f=>f
))
ReactDom.render(
	(<Provider store={store}>
		<HashRouter>
			<div>
				<AuthRoute></AuthRoute>
				<Switch>
					<Route path='/bossinfo' component={Bossinfo}></Route>
					<Route path='/geniusinfo' component={Geniusinfo}></Route>
					<Route path='/login' component={Login}></Route>
					<Route path='/register' component={Register}></Route>
					<Route path='/chat/:user' component={Chat}></Route>
					<Route component={Dashboard}></Route>
				</Switch>
			</div>
		</HashRouter>
	</Provider>),
	document.getElementById('root')
)
