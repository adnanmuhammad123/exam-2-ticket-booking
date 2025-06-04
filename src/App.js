import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import FlightList from './components/FlightList';
import FlightBooking from './components/FlightBooking';
import Home from './includes/Home';
import About from './includes/About';
import Contact from './includes/Contact';
import GlobalStyle from './styles/GlobalStyles';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<FlightList />} />
        <Route path="/booking/:id" element={<FlightBooking />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
