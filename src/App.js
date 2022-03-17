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
  );
}

export default App;
