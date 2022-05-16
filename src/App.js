
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Reviews from './Pages/Reviews/Reviews';
import LogIn from './Pages/LogIn/LogIn';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/appointment" element={<Appointment/>} />
        <Route path="/reviews" element={<Reviews/>} />
        <Route path="/login" element={<LogIn/>} />
      </Routes>
    </div>
  );
}

export default App;
