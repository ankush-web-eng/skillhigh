import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Form from './components/Form';
import Home from './components/Home';

function App() {
  return (
    <Router >
      <div className='flex flex-col min-h-screen'>
        <Navbar />
        <main className='flex-grow'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/admin" element={<Form />} />
        </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App;