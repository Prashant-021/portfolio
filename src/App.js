import './App.css';
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import Details from './components/Details'
import Project from './components/Project'
import Testimonials from './components/Testimonials'
import Footer  from './components/Footer';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path="/Details" element={<Details />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Testimonials" element={<Testimonials />} />
      </Routes>
      <Footer/> 
    </div>
  );
}

export default App;
