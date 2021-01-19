import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
// import store from './store';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';


const responderReducer = (state = [], action) => {
  switch (action.type) {
    case "SETNODE":
      return [...state, currentNode(action.payload)];
    default:
      return state;
  }
};

const store = createStore(
  responderReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch({ type: "SETNODE" });

ReactDOM.render(
  // Render a `<Provider>` around the entire `<App>`,
  // and pass the Redux store to as a prop
  <React.StrictMode>
    <Header />
    <Provider store={store}>
      <App />
    </Provider>
    <Footer />

  </React.StrictMode>,

  document.getElementById('root'));

reportWebVitals();
