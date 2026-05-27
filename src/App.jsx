import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Home';
import Player1 from './Player1';
import Player2 from './Player2';

// ScrollToTop component to reset scroll on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/player1" element={<Player1 />} />
        <Route path="/player2" element={<Player2 />} />
      </Routes>
    </Router>
  );
}

export default App;
