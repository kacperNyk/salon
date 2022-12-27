//styles
import './scss/index.scss';
import './scss/app.scss';
//rest
import { Routes, Route, Link } from 'react-router-dom'
import About from '../pages/About'
import Prices from '../pages/Prices'
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import logo from '../assets/img/logo.png';


function App() {

  return <div className='App'>
    <nav className='navbar'>
    <div className="logo">
      salon<img src={logo} alt="logo" />
    </div>
    <ul className='navbar-list'>
      <li> 
        <Link to='/' > Strona główna</Link>
      </li >
      <li> 
        <Link to='/about' > O nas</Link> 
      </li >
      <li>
         <Link to='/prices' > Cennik</Link> 
      </li>
      <li>
         <Link to='/contact' >Kontakt</Link> 
      </li>
    </ul>
  </nav>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/prices' element={<Prices/>}/>
    <Route path='/contact' element={<Contact/>}/>
  </Routes>
  </div>
}

export default App
