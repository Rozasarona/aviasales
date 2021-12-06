import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './components/App/App';
import './index.css'
import { bindActionCreators } from 'redux';
import reducer from './reducer';
import { Provider } from 'react-redux';
import { getSearchId } from './Api';




const store = createStore(reducer);


ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>, document.getElementById('root'));

getSearchId().then(searchId => alert(searchId));




