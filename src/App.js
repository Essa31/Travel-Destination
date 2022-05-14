import logo from './logo.svg';
import './App.css';
import Home from './ Component/Home/Home-component';
import Footer from './ Component/Footer/Footer-component';
import Header from './ Component/Header/Header-component';
import Tours from './ Component/Tours/Tours-component'; 
import { Routes, Route, Link } from "react-router-dom";
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
