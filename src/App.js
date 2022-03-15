import {Route} from 'react-router-dom';
import './App.css';
import BoxOffice from './pages/boxoffice/BoxOffice';

function App() {
  return (
    <div>
      <Route path='/boxoffice'>
        <BoxOffice/>
      </Route> 
    </div>
  );
}

export default App;
