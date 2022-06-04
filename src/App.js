import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Home';
import Contact from './Contact';
import Projects from './Projects';
import Navbar from './components/Navbar';
import ErrorPage from './ErrorPage';
import Portal from './Portal';
//Express js
//Nodejs
//sequelize
//
function App() {
  return (
    <div className='App'>
    <Router>
      <Navbar/>
      <Routes>
    <Route  path="/" element={<Home/>}/>
    <Route  path="/projects" element ={<Projects/>}/>
    <Route  path="/contact" element={<Contact/>}/>
    <Route  path="/portal" element={<Portal/>}/>
    <Route path="*" element={<ErrorPage/>}/>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
