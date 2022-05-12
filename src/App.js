import logo from './logo.svg';
import './App.css';
import Home from './ Component/Home-component';
import Footer from './ Component/Footer-component';
import Header from './ Component/Header-component';
import Touerco from './ Component/Tours-component'; 
  

const tours=require('./data/data.json')
function App() {
  return (
    <>
    <Header/>
   
    
    {
      tours.map(name=>{
        return(
          <Touerco
           img={name.image} 
            title={name.name}/>

        )
      })
    }
   <Footer/>
  </>



  )

 
 

  }

export default App;
