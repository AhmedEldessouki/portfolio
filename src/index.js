import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import {createStore, applyMiddleware, compose} from 'redux'
import RootReducer from './Store/Reducer/RootReducer'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {reduxFirestore, getFirestore} from 'redux-firestore'
import {reactReduxFirebase, getFirebase} from 'react-redux-firebase'
import firebaseConfig from './Config/FirebaseConfig'

const store = createStore(RootReducer, compose(
  applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
  reduxFirestore(firebaseConfig),
  reactReduxFirebase(firebaseConfig, {useFirestoreForProfile: true, userProfile: 'users', attachAuthIsReady: true})
  )
);
store.firebaseAuthIsReady.then(()=> {

  ReactDOM.render(
    <BrowserRouter >
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter >
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
  serviceWorker.unregister();
});