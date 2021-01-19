import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import reducer from './reducers/reducer.js'


const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(

  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>,

  document.getElementById('root'));

reportWebVitals();

export default store;