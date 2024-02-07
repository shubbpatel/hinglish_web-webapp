import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import JavaScript from './pages/javascript/JavaScript';
import ReactPage from './pages/react/ReactPage'
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/react-hindi" element={<ReactPage/>} />
      <Route path="/javascript-hindi" element={<JavaScript/>} />
    </Routes>
    </BrowserRouter>
     
  );
}

export default App;
