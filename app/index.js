import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import { ConnectedRouter, routerReducer, routerMiddleware } from "react-router-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";

import configureStore from './store/configureStore';
import Main from './Main';

import 'antd/dist/antd.css';
import './styles/app.scss';

import $ from 'jquery';
window.jQuery = $;
window.$ = $;


const store = configureStore({
	model:[{text: 'Task 1'},{text: 'Task 2',}]
});



render((
	<Provider store={store}>
		<Main />
	</Provider>
), document.getElementById('root'));
