  
import { Link } from "react-router-dom";
function Tour(props) {



    return (
      <>
    
      <div key={props.id}>
     
      <p id="title">{props.title }</p>
      
       <img  src={props.img} alt={props.title} />
       
       </div>
       
   </>
    );
  }
  

  export default Tour;