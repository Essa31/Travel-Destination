import logo from './logo.svg';
import './App.css';
import Home from './ Component/Home/Home-component';
import TourDetails from './ Component/TourDetails/TourDetails';

import { Routes, Route } from "react-router-dom";
const tours=require('./data/data.json')

function App() {
  return (
    <>
   
   
       <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/city/:id" element={<TourDetails />} />
      </Routes>
  </>



  )

 
 

  }

export default App;
