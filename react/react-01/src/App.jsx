import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer'
import Random from './components/random';
import State from './components/state';
import Effect from './components/effect';
import ListComponent from './components/map';
import Conditional from './components/conditional';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';

function App() {

  return (
    <BrowserRouter>
      {/* <ul>
        <li className='special-class'><Link to='/'>Home</Link></li>
        <li className='special-class'><Link to='/about'>About</Link></li>
      </ul> */}



      <div className='h-screen w-screen flex justify-center items-center'>
        <h1 className='text-sky-500 text-3xl'>My name is Ankush</h1>
      </div>



      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
