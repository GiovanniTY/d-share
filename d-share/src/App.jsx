import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './assets/components/NavBar';
import Hero from './assets/Hero';
import EscrowAsAService from './assets/components/Escrow-as-a-Service';
import HomePage from './assets/components/Home';
import Web3Solutions from './assets/components/Web3Solutions';

import './index.scss';

function App() {
  return (  
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<><Hero/><EscrowAsAService/><Web3Solutions/></> } />
      </Routes>
    </Router>
  );
}

export default App;