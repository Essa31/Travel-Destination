
    import Footer from "../Footer/Footer-component";
    import Header from "../Header/Header-component";
import Tours from "../Tours/Tours-component";




function home(props) {
    return (
  <div>
       <Header/>
   
    
   {
    
      props.tours.map(name=>{
       return(
         <Tours
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