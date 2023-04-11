import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/checkout" element = {
            <>
              <Header />
              <Checkout />
            </>
          } />

          <Route path="/" element= {
            <>
              <Header />
              <Home />
            </>
          }>
          </Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
