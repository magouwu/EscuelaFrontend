import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Home';
import Contact from './Contact';
import Projects from './Projects';
import Navbar from './components/Navbar';
import ErrorPage from './ErrorPage';

function App() {
  return (
    
    <Router>
      <Navbar/>
      <Routes>
    <Route  path="/" element={<Home/>}/>
    <Route  path="/projects" element ={<Projects/>}/>
    <Route  path="/contact" element={<Contact/>}/>
    <Route path="*" element={<ErrorPage/>}/>
    </Routes>
    </Router>
    
  );
}

export default App;
