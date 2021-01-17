
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { respond } from './actions/respond';
import Response from './components/Response/Response';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {

  const responder = useSelector(state => state.responder);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Header />
      <Response />
      {/* <button onClick={() => dispatch(respond())}>+</button> */}
      <Footer />
    </div>
  );
}

export default App;


