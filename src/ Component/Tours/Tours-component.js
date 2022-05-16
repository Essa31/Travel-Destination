import "./Tours.css"
import Tour from "./tour/Tour";
import { Link } from "react-router-dom";
const toursData=require("../../data/data.json")

function Tours(props) {



    return (
      <>
     
       {
    
    toursData.map(item=>{
      
     return(
      <Link to={`/city/${item.id }`}>

       <Tour
     
        img={item.image} 
         title={item.name}/>
     </Link>
     )
   })
 }

      </>
    );
  }
  

  export default Tours;

