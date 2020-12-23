import React from 'react'
import { hydrate } from 'react-dom'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';


hydrate(<App/>, document.getElementById('root'))
