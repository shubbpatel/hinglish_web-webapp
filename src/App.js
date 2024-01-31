import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import JavaScript from './pages/JavaScript';
import ReactPage from './pages/ReactPage'
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<ReactPage/>} />
      <Route path="/javascript" element={<JavaScript/>} />
    </Routes>
    </BrowserRouter>
     
  );
}

export default App;
