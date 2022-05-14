
    import Footer from "../Footer/Footer-component";
    import Header from "../Header/Header-component";
import Tours from "../Tours/Tours-component";
const tours=require("../../data/data.json")



function home(props) {
    return (
  <div>
       <Header/>
   
    
   {
    
      tours.map(item=>{
       return(
         <Tours
          img={item.image} 
           title={item.name}/>

       )
     })
   }
  <Footer/>
  </div>
    );
  }
  
  export default home;