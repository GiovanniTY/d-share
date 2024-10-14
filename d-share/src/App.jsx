import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './assets/components/NavBar';
import Hero from './assets/Hero';
import About from './assets/components/About';

import './index.scss';

function App() {
  return (  // Assicurati di restituire il JSX qui
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<><Hero /><About /></>} />
      </Routes>
    </Router>
  );
}

export default App;