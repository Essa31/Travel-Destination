
    import Footer from "../Footer/Footer-component";
    import Header from "../Header/Header-component";
import Touerco from "../Touerco/Tours-component";




function home(props) {
    return (
  <div>
       <Header/>
   
    
   {
    
      props.tours.map(name=>{
       return(
         <Touerco
          img={name.image} 
           title={name.name}/>

       )
     })
   }
  <Footer/>
  </div>
    );
  }
  
  export default home;