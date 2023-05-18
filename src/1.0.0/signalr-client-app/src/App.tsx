import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {   
  Routes,  
  Route,  
  // Link  
}   
from 'react-router-dom';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      {/* <ul>  
        <li>  
          <Link to="/">Home</Link>  
        </li>  
        <li>  
          <Link to="/lobby">Lobby</Link>  
        </li>
      </ul> */}
      <Routes>  
            <Route path='/' element={<Home/>}></Route>  
      </Routes>  
    </div>
  );
}

export default App;
