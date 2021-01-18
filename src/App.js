
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { respond } from './actions/respond';
import Response from './components/Response/Response';


function App() {

  const responder = useSelector(state => state.responder);
  const dispatch = useDispatch();

  return (
    <div className="App">

      <Response />
      {/* <button onClick={() => dispatch(respond())}>+</button> */}

    </div>
  );
}

export default App;


