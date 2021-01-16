
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { respond } from './actions/respond';



function App() {

  const responder = useSelector(state => state.responder);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Response: {responder} </h1>
      <button onClick={() => dispatch(respond())}>+</button>
    </div>
  );
}

export default App;


