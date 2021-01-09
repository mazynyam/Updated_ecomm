import 'react-app-polyfill/ie11'; // For IE 11 support
import 'react-app-polyfill/stable';
import 'core-js';
import './polyfill'
import React from 'react'
import { hydrate } from 'react-dom'
import App from './App'
import './index.css'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import { Provider } from 'react-redux'
import store from './store'
import { icons } from './admin/assets/icons'
React.icons = icons
hydrate(
    <Provider store={store}>
        <App/>
    </Provider>
, document.getElementById('root'))
