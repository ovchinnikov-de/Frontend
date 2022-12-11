import React from 'react';
import './App.css';
import {Goods} from './components/Goods'
import {useLogic} from "./myhooks/logic";
import {Header} from "./components/Header";
import {Search} from "./components/Search";
import {Route, Routes} from "react-router-dom";
import {Home} from "./page/Home";
import {About} from "./page/About";
import {Path} from "./components/Path";



function App() {

  return (
      <>
          <Path/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
      </Routes>
      </>
  )
}

export default App;
