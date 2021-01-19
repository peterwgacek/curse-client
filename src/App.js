
import './App.css';
// import { useSelector, useDispatch } from 'react-redux';
import Response from './components/Response/Response';
import { Provider } from 'react-redux';


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


