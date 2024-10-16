import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './assets/components/NavBar';
import Hero from './assets/Hero';
import EscrowAsAService from './assets/components/Escrow-as-a-Service';
import HomePage from './assets/components/Home';
import Web3Solutions from './assets/components/Web3Solutions';
import Why from './assets/components/Why-D-Share';
import About from './assets/components/About';
import BusinessCase from './assets/components/BusinessCase';

import './index.scss';

function App() {
  return (  
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<><Hero/><EscrowAsAService/><Web3Solutions/><Why/><BusinessCase/><About/></> } />
      </Routes>
    </Router>
  );
}

export default App;