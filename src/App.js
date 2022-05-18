import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Pages/Home/Home'
function App() {
  return (
    <div className='py-2'>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
