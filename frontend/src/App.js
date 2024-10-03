import React from 'react';
import './App.css';
import Home from './components/Home';
import Login  from './components/Login';
import{Route,Routes} from 'react-router-dom';
import Home2 from './components/Home2';

function App() {
  return (
    <>


<Routes>
  <Route  path='/' element={<Login/>}/>
  <Route path='/home' element={<Home/>}/>
</Routes>
    </>
  );
}

export default App;
