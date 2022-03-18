<<<<<<< HEAD
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      
      
    </div>
=======
import {Route, Routes} from 'react-router-dom';
// import './App.css';
import BoxOffice from './pages/boxoffice/BoxOffice';
import ScndBoxOffice from './pages/scondboxoffice/ScndBoxOffice';

function App() {
  return (
      <Routes>
      <Route path='/' element={<BoxOffice/>}/>
      <Route path='/scndboxoffice' element={<ScndBoxOffice/>}/>
      </Routes>
>>>>>>> 228bc0f9f5dba82c64e0b40af98d1196e178b899
  );
}

export default App;
