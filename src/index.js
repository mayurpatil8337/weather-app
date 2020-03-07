import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import rootReducer from './client/reducer'
import createSagaMiddleware from 'redux-saga'

// import logger from 'redux-logger'
import mySaga from './client/sagas'
import App from './client/App';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer,
    applyMiddleware(sagaMiddleware))

    sagaMiddleware.run(mySaga)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
