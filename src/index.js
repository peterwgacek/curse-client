import React from 'react';
import { ReactDOM } from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/reducer.js';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(

  <React.StrictMode>
    <Provider store={store}>
      <Header />
      <App />
      <Footer />
    </Provider>
  </React.StrictMode>,

  document.getElementById('root'));
