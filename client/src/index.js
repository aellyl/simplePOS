import React from "react"
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"
import { Router, browserHistory } from "react-router"
import { syncHistoryWithStore } from "react-router-redux"
import { applyMiddleware, createStore } from "redux"
import thunkMiddleware from "redux-thunk"
// import createLogger from "redux-logger"
import { syncHistory } from "react-router-redux"
import createRoutes from "./routes"
import rootReducer from "./reducers"
import './index.css';


import registerServiceWorker from './registerServiceWorker';
let middleware = [		
	thunkMiddleware
]	

// only add Redux-Logger on the client-side because it causes problems server-side.
// if (!isNode) {
// 	middleware.push(createLogger())
// }

const finalCreateStore = applyMiddleware(...middleware)(createStore)
// const store = finalCreateStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())	
const store = finalCreateStore(rootReducer)	

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)
const routes = createRoutes(store, history)

ReactDOM.render(
	<Provider store={store}>
		{routes}
	</Provider>
	, document.getElementById("root"));
	
registerServiceWorker();

