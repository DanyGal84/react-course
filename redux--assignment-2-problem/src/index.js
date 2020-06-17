import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import persons from './store/reducers/person';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(persons);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
