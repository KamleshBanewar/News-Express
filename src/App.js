import React from 'react';
import AllNews from './Components/AllNews';
import Navbar from './Components/Navbar';
import Business from './Components/Business';
import Entertainment from './Components/Entertainment';
import Health from './Components/Health';
import Science from './Components/Science';
import Sport from './Components/Sport';
import Technology from './Components/Technology';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Footer from './Components/Footer';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>

          <Route path="/News-Express" element={<AllNews />} />
          <Route exact path="/business" element={<Business />} />
          <Route exact path="/entertainment" element={<Entertainment />} />
          <Route exact path="/health" element={<Health />} />
          <Route exact path="/science" element={<Science />} />
          <Route exact path="/sport" element={<Sport />} />
          <Route exact path="/technology" element={<Technology />} />

        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
