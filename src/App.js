
import { Route, Routes } from 'react-router';
import './App.css';
import { Home } from './Home';
import { Seat } from './Seat';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/seat' element={<Seat/>}/>
      </Routes>
    
    </div>
  );
}

export default App;


