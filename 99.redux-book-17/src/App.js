import logo from './logo.svg';
import './App.css';
import CounterContainer from './containers/CounterContainer';
import Todos from './components/Todos';

function App() {
  return (
    <div>
      <CounterContainer />
      <hr />
      <Todos />
    </div>
  );
}

export default App;
