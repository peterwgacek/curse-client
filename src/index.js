import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'react';


// const store = createStore(reducer)

// STORE -> GLOBALIZED STATE

// ACTION -> TALK

const respond = () => {
  return {
    type: 'RESPOND'
  }
}


const store = createStore(responderReducer);

//Dis play in console

store.subscribe(() => console.log(store.getState()));

// DISPATCH
store.dispatch(respond());


ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
