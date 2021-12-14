import './App.css';
import { Routes,Route, Link } from "react-router-dom";
import Home from './page/Home.js';
import About from './page/About.js';
import Contact from './page/Contact';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className='nav-link' to='/' >{''} Home</Link>
              <Link className='nav-link' to='/about'>{''} About</Link>
              <Link className='nav-link' to='/contact'>{''} Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Contact' element={<Contact/>} /> 
      </Routes>
    </div>
  );
}

export default App;
