import React from "react";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import { Routes ,Route, Navigate} from 'react-router-dom';
const App = () => {
  return (
    <>
      <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/About' element={<About/>} />
      <Route exact path='/Services' element={<Services/>} />
      </Routes>

      <Navigate  to = "/"/> 
    </>
  );
};

export default App;
