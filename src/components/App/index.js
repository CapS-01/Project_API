import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import '../../App.css'
import Header from '../Header';
import Landing from '../Landing';
import Footer from '../Footer';
import Welcome from '../Welcome';
import Login from '../Login';
import Singup from '../SingUp';
import ErrorPage from '../ErrorPage';
function App() {
  return (
 
      <Router>
        <Header />

        <Routes>
        
        <Route path="/" element={<Landing />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Singup />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>

        <Footer />
      </Router>
 
  );
}

export default App;
