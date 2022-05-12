import logo from './logo.svg';
import './App.css';
import Home from './ Component/Home/Home-component';
import Footer from './ Component/Footer/Footer-component';
import Header from './ Component/Header/Header-component';
import Touerco from './ Component/Touerco/Tours-component'; 
  
const tours=require('./data/data.json')

function App() {
  return (
    <>
   <Home tours={tours} />
  </>



  )

 
 

  }

export default App;
