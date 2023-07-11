
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbarsection from './navbar';

import Fullstack from './components/Fullstack';
import Cpage from './components/c';
import Go from './components/go';
import Java from './components/java';
import Python from './components/python';
import Home from './components/Home';


function App() {
  return (
    <BrowserRouter>
    <Navbarsection/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/fullstack" element={<Fullstack/>}/>
      <Route path="/c" element={<Cpage/>}/>
      <Route path="/go" element={<Go/>}/>
      <Route path="/java" element={<Java/>}/>
      <Route path="/python" element={<Python/>}/>
    </Routes>

    </BrowserRouter>

  
  );
}

export default App;