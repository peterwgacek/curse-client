import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

ReactDOM.render(

  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>,

  document.getElementById('root'));

reportWebVitals();
