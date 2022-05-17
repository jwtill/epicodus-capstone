import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import firebase from "./firebase";

import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import { createStore } from 'redux';


const store = createStore(rootReducer);

const rrfProps = {
  firebase,
  config: {
    userProfile: "users"
  },
  dispatch: store.dispatch,
  createFirestoreInstance
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>
  </React.StrictMode >
);

