import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import JavaScript from './pages/javascript/JavaScript';
import ReactPage from './pages/react/ReactPage'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import ContactUs from './pages/ContactUs';
import LawsOfHighValueMan from './pages/Personality Development/LawsOfHighValueMan';
import Html from './pages/html/Html';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/react-hindi" element={<ReactPage/>} />
      <Route path="/html-hindi" element={<Html/>} />
      <Route path="/javascript-hindi" element={<JavaScript/>} />
      <Route path="/personality-development-tutorial" element={<LawsOfHighValueMan/>} />
      <Route path="/about" element={<AboutUs/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
      <Route path="/terms-of-service" element={<TermsOfService/>} />
      <Route path="/contact" element={<ContactUs/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
     
  );
}

export default App;
