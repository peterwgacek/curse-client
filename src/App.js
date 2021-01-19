
import './App.css';
// import { useSelector, useDispatch } from 'react-redux';
import Response from './components/Response/Response';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/reducer.js';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <Response />
      </Provider>
    </div>
  );
}

export default App;


