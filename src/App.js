import './App.css';
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import PostId from './pages/PostId';
import About from './pages/About';
import Posts from './pages/Posts';




function App() {


  return (
   <BrowserRouter>
      <Routes>
          <Route path='/post'element={<Posts/>}></Route>
          <Route path='/post/:id'element={<PostId/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path="/" element={<Navigate replace to="/post"/>} />
          <Route path='*' element={<Navigate replace to="/post"/>}/>
      </Routes>

   </BrowserRouter>
  );
}

export default App;
