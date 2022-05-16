
import Footer from "../Footer/Footer-component";
import Header from "../Header/Header-component";
import Tours from "../Tours/Tours-component";
const toursData=require("../../data/data.json")



function home(props) {
    return (
  <div>
  <Header/>
  
  
  <Tours tour={toursData} /> 

  <Footer/>
  </div>
    );
  }
  
  export default home;