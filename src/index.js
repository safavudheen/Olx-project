import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {FirebaseContext} from './store/Context'
import firebase from './firebase/Config'
import Context from './store/Context'
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/css/bootstrap-theme.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
ReactDOM.render(
<FirebaseContext.Provider value={{firebase}}>
<Context>
<App/>
</Context>
</FirebaseContext.Provider>
,document.getElementById('root'));
