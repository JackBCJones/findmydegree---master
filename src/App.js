import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import components
import SharedLayout from './components/sharedlayout/SharedLayout';
// import Universities from './components/universities/Universities';

// import pages
import Home from './pages/home/Home';
// import Uni from './pages/uni/Uni';
import CourseList from './pages/courselist/CourseList';
import Error from './pages/Error';
import Favourites from './pages/favourites/Favourites';
// import International from './pages/international/International';
import {AppProvider} from './context/GlobalState';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SharedLayout />} >
            <Route index element={<Home />} />
            <Route path='/courses' element={<CourseList/>}/>
            <Route path='/favourites' element={<Favourites/>}/>
            {/* <Route path='/universities' element={<Universities />}/> */}
            {/* <Route path='/international' element={<International />}/> */}
            {/* <Route path='/university/:uni_id' element={<Uni />}/> */}
            <Route path='*' element={<Error />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
