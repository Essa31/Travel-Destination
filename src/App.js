import logo from './logo.svg';
import './App.css';
import Home from './ Component/Home/Home-component';

import { Routes, Route } from "react-router-dom";
const tours=require('./data/data.json')

function App() {
  return (
    <>
   <Home tours={tours} />
   
       <Routes>
       <Route path="/" element={<Home />} />
      </Routes>
  </>



  )

 
 

  }

export default App;
