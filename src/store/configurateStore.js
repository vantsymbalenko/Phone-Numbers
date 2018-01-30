import {createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer.js';

export default function configureStore(initialState){
	let store = createStore(
			rootReducer, 
			initialState, 
			compose(
				applyMiddleware(thunk),
			  	window.devToolsExtension ? window.devToolsExtension() : f => f
			)
		);
	return store;
}