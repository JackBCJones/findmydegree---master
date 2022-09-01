import './index.css';
import Home from './pages/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedLayout from './components/sharedlayout/SharedLayout';
import Uni from './pages/uni/Uni';
import CourseList from './pages/courselist/CourseList';
import Universities from './components/universities/Universities';
import React from 'react';
import Error from './pages/Error';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />} >
          <Route index element={<Home />} />
          <Route path='/courses' element={<CourseList/>}/>
          <Route path='/universities' element={<Universities />}/>
          <Route path='/:uniId' element={<Uni />}/>
          <Route path='*' element={<Error />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
