import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import ContactUs from './pages/ContactUs';
import LawsOfHighValueMan from './pages/Personality Development/LawsOfHighValueMan';
import Html from './pages/html/HtmlHome';
import ReactIntro from './pages/react/ReactIntro';
import ReactRoutes from './routes/ReactRoutes';
import JsHome from './pages/javascript/JsHome';
import JavaScriptRoutes from './routes/JavaScriptRoutes';
import HtmlHome from './pages/html/HtmlHome';
import HtmlRoutes from './routes/HtmlRoutes';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <ReactRoutes/>
      <JavaScriptRoutes/>
      <HtmlRoutes/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      {/* <Route path="/react-hindi/*" element={<ReactIntro/>} /> */}
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
