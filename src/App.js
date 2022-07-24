import './App.css';
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';




function App() {


  return (
   <BrowserRouter>
      <Routes>
          <Route path='/post'element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path="/" element={<Navigate replace to="/post" />} />
      </Routes>

   </BrowserRouter>
  );
}

export default App;
