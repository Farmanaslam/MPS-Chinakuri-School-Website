
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import "./events.css"
import Header from './Components/Header';
import TopNav from './Components/TopNav';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Member from './Components/Member';
import Mandatory from './Components/Mandatory';
import Rules from './Components/Rules';
import Events from './Components/Events';
import Hours from './Components/Hours';
import Contact from './Components/Contact';
import { Route, Routes } from "react-router-dom";
import About from './Components/About';
function App() {
  return (
   <>
   <Header/>
   <TopNav/>
   <Routes>
        <Route path="" element={<Home />} />
        <Route path="/aboutschool" element={<About />} />
        <Route path="/ourmembers" element={<Member />} />
    
        <Route path="/mandatorydisclosure" element={<Mandatory />} />
        <Route path="/events" element={<Events />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/schoolhours" element={<Hours />} />
        {/* <Route path="/gallery" element={<Member />} /> */}
        <Route path="/contact" element={<Contact />} />
        </Routes>
   <Footer/>
   </>
  );
}

export default App;
